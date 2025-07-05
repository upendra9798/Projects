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

1. Frontend setup - npm create vite@latest
2. install chakra ui (vite.config is different-from chatgpt)
3. To have different pages in our website we used -> 
 npm i react-router-dom
4. Make App under BrowserRouter in main.jsx
5. In App.js using react-router-dom :-  we created different pages
6. Creating navbar first (npm i react-icons)
7. Used useColorModeValue to toggle color
8. Created CreatePage.jsx
9. Tried console log data entered to see in console if our code is correct or not. Now we have to save this data toour database
10. npm i zustand -> to make a global fn
11. To not write http://localhost:5000/api/products, we created a proxy in viteconfig.js, so we have to only write /api/products

Note: Getting error beacuse our frontend running on diff port and backen on diff
  so we used CORS in backend server to remove error(make sure to use it every time)
:- Also make sure to run backend and enable mongodB before sending req from frontend to backend otherwise it will show error
( Failed to execute 'json' on 'Response': Unexpected end of JSON input
    at createProduct (product.js:17:32)
    at async handleAddProduct)
// Also try to run backend again after frontend or connecting mongodb

12. Used Toaster to show notification menu when error or product creation(Use new syntax by seeing chakra ui website) 
npx @chakra-ui/cli snippet add toaster

13. Creating Homepage to show all the products
14. Formed product Card to map all the products

Note:- 1. Solved error of not visible image-> It is because i am sending a web link not image address
2.Icon of edit, delete not visible from IconButton fn so used under box
3.delet fn not working due to change in name of deleteProducts in store and Product card(extra s in store)
4.In homepage wrote column instead of columns

15. To update the data used drawer(not modal) from chakra UI(changed version), changed code of edit, delete icon to fit in 
drawer code so that it works on clicking edit icon and used toaster on delete

Note :- spacing doesn't work now so use margin instead