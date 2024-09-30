import React from 'react'
import { useState } from 'react'
import './Navbar.css'
import {Link} from "react-router-dom"
import { ShopContext } from '../../Context/ShopContext'
import { useContext } from 'react'

import logo from "../../assets/Assets/logo.png"
import cart_icon from '../../assets/Assets/cart_icon.png'

const Navbar = () => {

  const [underline,setUnderline] = useState("");
  const {getTotalCartItems} = useContext(ShopContext);
  
  return (
    <div className = "navbar">
      <div className = "nav-logo">
      <img  style ={{height :"60px",width:"60px"}}src ={logo} alt =""/>
      <p>FreshFinds</p>
      </div>
      <ul className ="nav-menu">
      <li onClick ={()=>setUnderline("Shop")}><Link style = {{textDecoration:"none"}}to ='/'>Shop</Link>{underline==="Shop"?<hr/>:<></>}</li>
      <li onClick ={()=>setUnderline("Mens")}><Link style = {{textDecoration:"none"}}to ='/Mens'>Mens</Link>{underline==="Mens"?<hr/>:<></>}</li>
      <li onClick ={()=>setUnderline("Womens   ")}><Link style = {{textDecoration:"none"}}to ='/Womens'>Womens</Link>   {underline==="Womens   "?<hr/>:<></>}</li>
      <li onClick ={()=>setUnderline("Kids")}><Link style = {{textDecoration:"none"}}to ='/Kids'>Kids</Link>{underline==="Kids"?<hr/>:<></>}</li>
      <li onClick ={()=>setUnderline("Product")}><Link style = {{textDecoration:"none"}} to ='/Product'>Product</Link>{underline==="Product"?<hr/>:<></>}</li>
      </ul>
      <div className ="nav-login-cart">
         <Link to = '/login'><button>Login</button></Link>
         <Link to ='/cart'> <img src ={cart_icon} alt =""/></Link>
        <div className ="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  )
}

export default Navbar
