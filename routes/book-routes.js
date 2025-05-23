const express = require("express");
//import controllers for the below outes
const {
  getAllBooks,
  getSingleBooksById,
  addNewBook,
  updateBookById,
  deleteBookById,
} = require("../contollers/book-controller");

//creating a router
const router = express.Router();

//creating all routes related to the books.
router.get("/get", getAllBooks);
router.get("/get/:id", getSingleBooksById);
router.post("/add", addNewBook);
router.put("/update/:id", updateBookById);
router.delete("/delete/:id", deleteBookById);

//if we had another products eg cars, will have to create their own separate router

module.exports = router;
