import express from "express"
import { createProduct, deleteProduct, getProducts, updateProduct } from "../controllers/product.controller.js";

const router = express.Router();

router.get("/",getProducts)  //http-get
router.post("/", createProduct) //http-post so 1 & 2 same path but different http
router.put("/:id", updateProduct)
//we can use put or patch to update(patch-to update specific fields of product
// and put to update all fileds)
router.delete("/:id", deleteProduct)
//It will be differentiated by http methods(put,post,etc) in server

// ✅ Valid Usage: Different Paths
//There cannot be two same path with same http method
// router.post("/", createProduct);               // POST /products
// router.post("/search", searchProducts);        // POST /products/search

// ❌ Invalid: Same Path Twice
// router.post("/", createProduct);
// router.post("/", somethingElse);  // This will override the above!


export default router;
