const mongoose = require("mongoose");

//import hidden mongo connections from .env
const mongoBookData = process.env.MONGO_BOOK_DATA ;
const mongoUserAuthData = process.env.MONGO_USER_AUTH_DATA;

const bookData = async () => {
  try {
    await mongoose.connect(mongoBookData);

    console.log("Connection to the Database was Successful!");

  } catch (error) {
    console.error("Connection to the Database has failed!", error);
    process.exit(1);
  }
};


const userAuthData = async ()=>{
      try {
    await mongoose.connect(mongoUserAuthData);

    console.log("Connection to the Database was Successful!");
    
  } catch (error) {
    console.error("Connection to the Database has failed!", error);
    process.exit(1);
  }
}



module.exports = {bookData, userAuthData};
