const mongoose = require("mongoose");

const mongoData = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://clintojiamboh:clintojiamboh.@bookstoreapi.mihlagh.mongodb.net/"
    );
    console.log("Connection to the Database was Successful!");
  } catch (error) {
    console.error("Connection to the Database has failed!", error);
    process.exit(1);
  }
};

module.exports = mongoData;
