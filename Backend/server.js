import express from 'express'
import dotenv from "dotenv"
import { connectDB } from './config/db.js'
import productRoutes from "./routes/product.routes.js"; 
//You're importing the default export (which is the router), and naming it productRoutes.
// 💡 The name is completely up to you.You could write:something would still refer to that router.

dotenv.config() //to read MONGO_URI without this it will show undefined

const app = express()

// app.get("/", (req,res) => {  //for home page
//     res.send("Server is ready")
// })

app.use(express.json()) //allows us to accept JSON data in the req.body
//It is a middleware(That runs before user sends req to the client)
      
app.use("/api/products",productRoutes)
//It will differentiate by http methods(put,post,etc)


app.listen(5000, () => {
    connectDB() //DB connection
    console.log("Server started at http://localhost:5000");   
})