const port = 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken")
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const fs = require('fs');

app.use(express.json());
app.use(cors());

// Ensure upload directory exists
const uploadDir = './upload/images';
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
}

mongoose.connect("mongodb+srv://tanishk15112001:9t0eHJVJA3CvTYCY@cluster0.qxtr6.mongodb.net/e-commerce", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('MongoDB connection error:', error));

app.get("/", (req, res) => {
    res.send("Express App is Running");
});

const storage = multer.diskStorage({
    destination: uploadDir,
    filename: (req, file, cb) => {
       return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
    }
});

const upload = multer({ storage: storage });

app.use('/images', express.static('upload/images'));

app.post("/upload", upload.single('product'), (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({
                success: 0,
                message: 'No file uploaded or an error occurred during the upload',
            });
        }
        res.json({
            success: 1,
            image_url: `http://localhost:${port}/images/${req.file.filename}`,
        });
    } catch (error) {
        console.error('Error during file upload:', error.message);
        res.status(500).json({
            success: 0,
            message: 'Internal Server Error',
        });
    }
});

const Product = mongoose.model("Product", {
    id: { type: Number, required: true },
    name: { type: String, required: true },
    image: { type: String, required: true },
    category: { type: String, required: true },
    new_price: { type: Number, required: true },
    old_price: { type: Number, required: true },
    date: { type: Date, default: Date.now },
    available: { type: Boolean, default: true },
});

app.post('/addproduct', async (req, res) => {
    let products = await Product.find({});
    let id = products.length > 0 ? products[products.length - 1].id + 1 : 1;

    const product = new Product({
        id: id,
        name: req.body.name,
        image: req.body.image, 
        category: req.body.category,
        new_price: req.body.new_price,
        old_price: req.body.old_price,
    });

    try {
        await product.save();
        console.log("Product Saved");
        res.json({ success: true, name: req.body.name });
    } catch (error) {
        console.error('Error saving product:', error.message);
        res.status(500).json({ success: false, message: 'Error saving product' });
    }
});

app.post('/removeproduct',async (req,res) =>{
        await Product.findOneAndDelete({id:req.body.id});
        console.log("Removed");
        res.json({
            success:true,
            name:req.body.name,
        })
})

app.get('/allproducts',async (req,res)=>{
   let products = await Product.find({})
   console.log("All products fetched");
   res.send(products);
}
)

app.listen(port, (error) => {
    if (!error) {
        console.log(`Server running on port ${port}`);
    } else {
        console.log("Error: " + error);
    }
});
