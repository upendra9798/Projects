import express from 'express'
import dotenv from "dotenv"
import { connectDB } from './config/db.js'
import Product from './models/product.model.js'

dotenv.config() //to read MONGO_URI without this it will show undefined

const app = express()

// app.get("/", (req,res) => {  //for home page
//     res.send("Server is ready")
// })

app.use(express.json()) //allows us to accept JSON data in the req.body
//It is a middleware(That runs before user sends req to the client)

app.post("/api/products", async(req,res) => {  //post->To show some data in request
    const product = req.body //user will send this data

    if(!product.name || !product.price || !product.image) {
        return res.status(400).json({success: false, message: "Please provide all fields"})
    }

    const newProduct = new Product(product)//Product from product.model.js
    //product -> send by user (up)

    try {
        await newProduct.save();
        res.status(201).json({success: true, data: newProduct});
    } catch (error) {
        console.log("Error in create product: ",error.message);
        res.status(500).json({success: false, message: "Server Error"})
        //500-for internal error 
    }
})


app.delete("/api/products/:id", async(req,res) => {
    const {id} = req.params
    // console.log("id",id); 
    
    try {
        await Product.findByIdAndDelete(id);
        res.status(200).json({success:true, message: "Product deleted"})
    } catch (error) {
        res.status(404).json({success:false, message: "Product not found"})
    }
})

// console.log(process.env.MONGO_URI);


app.listen(5000, () => {
    connectDB() //DB connection
    console.log("Server started at http://localhost:5000");   
})