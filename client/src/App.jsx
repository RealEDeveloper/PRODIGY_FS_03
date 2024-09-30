
import './App.css'
import Shop from "./Pages/Shop"
import ShopCategory from "./Pages/ShopCategory"
import Product from "./Pages/Product"
import Cart from "./Pages/Cart"
import Navbar from "./components/Navbar/Navbar"
import LoginSignUp from "./Pages/LoginSignup"
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import men_banner from "./assets/Assets/banner_mens.png"
import women_banner from "./assets/Assets/banner_women.png"
import kid_banner from "./assets/Assets/banner_kids.png"




function App() {
  
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path ='/' element ={<Shop/>}></Route>
        <Route path ='/mens' element ={<ShopCategory banner ={men_banner} category = "men"/>}></Route>
        <Route path ='/womens' element ={<ShopCategory banner ={women_banner} category = "women"/>}></Route>
        <Route path ='/product' element ={<Product />}>
          <Route path = ':productId' element ={<Product/>}/>
        </Route>
        <Route path ='/kids' element ={<ShopCategory banner ={kid_banner} category = "kid"/>}></Route>
        <Route path ='/cart' element ={<Cart/>}></Route>
        <Route path ='/login' element ={<LoginSignUp/>}/>
      </Routes>
    
      </BrowserRouter>
    </div>
  );
}
 
export default App;
