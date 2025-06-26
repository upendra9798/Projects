import express from 'express'
import dotenv from "dotenv"
import { connectDB } from './config/db.js'
import productRoutes from "./routes/product.routes.js"; 
import cors from 'cors'  
//You're importing the default export (which is the router), and naming it productRoutes.
// 💡 The name is completely up to you.You could write:something would still refer to that router.

dotenv.config() //to read MONGO_URI without this it will show undefined

const app = express()
const PORT = process.env.PORT || 5000 //5000-written in case it is undefined in 
//.env file

// app.get("/", (req,res) => {  //for home page
//     res.send("Server is ready")
// })

app.use(cors({
  origin: 'http://localhost:5173',  // Your frontend's origin (Vite default) see vite 
  credentials: true                 // Only needed if you're sending cookies or auth headers
}))

/*When your frontend is running on one origin (e.g. http://localhost:5173)
and your backend API is on another (e.g. http://localhost:5000),
the browser blocks the request by default.
Without CORS:
The browser says:
"You're trying to access data from a different origin — I’ll block it to protect the user."
📦 CORS tells the browser:
This server allows cross-origin requests from your frontend.
*/
app.use(express.json()) //allows us to accept JSON data in the req.body
//It is a middleware(That runs before user sends req to the client)
      
app.use("/api/products",productRoutes)
//It will differentiate by http methods(put,post,etc)


app.listen(PORT, () => {
    connectDB() //DB connection
    console.log("Server started at http://localhost:" + PORT);   
})