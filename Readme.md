1. - npm i express dotenv mongoose-outside
2. In server.js Forms express and listening port
3. - npm i nodemon -D(for npm run devDependencies)-outside
4. For database used Mongoose created cluster
5. created .env file and forms MONGO_URI
6. To use this at server import dotenv and use dotenv.config()
   to read console.log("Server started at http://localhost:5000"); without config it will show undefined
7. We will use it to connect at our database
8. In db.js we connect the database and import in server.js
9. Then we form product model
10. Formed API for product so that user can form the product, update them ,delete them
    API-> It connect user and database
    user sends a API reqest to database and can form,update,delete the product and send the response back to the client
11. Forming Product route in server.js by using product model
12. Used Postman to check if api is working and entered json data
13. Used app.use(express.json()) to read the json data
14. Formed delete route for deleting product from id
