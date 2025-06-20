1. - npm i express dotenv mongoose-outside
2. In server.js Forms express and listening port
3. - npm i nodemon -D(for npm run devDependencies)-outside

:- BACKEND

1. For database used Mongoose created cluster
2. created .env file and forms MONGO_URI
3. To use this at server import dotenv and use dotenv.config()
   to read console.log("Server started at http://localhost:5000"); without config it will show undefined
4. We will use it to connect at our database
5. In db.js we connect the database and import in server.js
6. Then we form product model
7. Formed API for product so that user can form the product, update them ,delete them
    API-> It connect user and database
    user sends a API reqest to database and can form,update,delete the product and send the response back to the client
8. Forming Product route in server.js by using product model
9. Used Postman to check if api is working and entered json data
10. Used app.use(express.json()) to read the json data
11. Formed delete route for deleting product from id
12. Update route, get all products route
13. Made separate file for product controllers and routes
14. Create port in .env file and from here take port to server by const PORT = process.env.PORT || 5000


:- FRONTEND

1. 