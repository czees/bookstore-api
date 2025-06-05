require("dotenv").config();
const express = require("express");
//imports database, routes
const bookData = require("./database/database.js");
const userAuthData = require('./database/database.js')
const bookRoutes = require("./routes/book-routes.js");
const userRoutes = require("./routes/user-routes.js");

const port = process.env.PORT || 3000;
const app = express();

//connect to database
bookData();
userAuthData();

//middleware
app.use(express.json());

//create routes
app.use("/api/books", bookRoutes);
app.use('/api/user', userRoutes);
//if incase you have more items eg instead of books you have cars or clothes, your routes will be like this
//app.use('api/cars', bookRoutes);
//app.use('api/clothes', bookRoutes);

app.listen(port, () => {
  console.log(`The Server is Running on port ${port}`);
});
