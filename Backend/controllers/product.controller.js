import mongoose from 'mongoose';
import Product from '../models/product.model.js'

export const getProducts = async(req,res) => {
    try {
        const products = await Product.find({});//empty obj means all products
        res.status(200).json({success:true,data: products})     
    } catch (error) {
        console.log("Error in fetching products: ",error.message);
        res.status(500).json({sucess:false, message: "Server Error"})
    }
}

export const createProduct = async(req,res) => {  //post->To show some data in request
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
}

export const updateProduct = async(req,res) => {
   const {id} = req.params;
   const product = req.body;//it gives the field that is to be updated
   //like name,email,etc

   if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({success:false, message: "Invalid Product Id"})
   }
   try {
    const updatedProduct = await Product.findByIdAndUpdate(id,product,{new:true});
    res.status(200).json({success:true,data:updatedProduct})
   } catch (error) {
    req.status(500).json({success:false,message:"Servor Error"})
   }
}

export const deleteProduct = async(req,res) => {
    const {id} = req.params
    // console.log("id",id); 
    
    if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({success:false, message: "Invalid Product Id"})
   }
    
    try {
        await Product.findByIdAndDelete(id);
        res.status(200).json({success:true, message: "Product deleted"})
    } catch (error) {
        console.log("Error in deleting product: ",error.message);
        res.status(500).json({success:false, message: "Servor Error"})
    }
}

