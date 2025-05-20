require('dotenv').config();
const express = require('express');
//imports database, routes
const mongoData = require('./database/database.js');
const bookRoutes = require('./routes/book-routes.js')



const port = process.env.PORT || 3000
const app = express();

//connect to database
mongoData();


//middleware
app.use(express.json());


//create routes
app.use('/api/books', bookRoutes);
//if incase you have more items eg instead of books you have cars or clothes, your routes will be like this
            //app.use('api/cars', bookRoutes);
            //app.use('api/clothes', bookRoutes);



app.listen(port, ()=>{
    console.log(`The Server is Running on port ${port}`)
});