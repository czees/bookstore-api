//we import our Book model schema from the model folder
const Book = require('../models/book')




//this are the controller functions for each route for book model. if we hade another model eg cars, clothes will have to create their own separate contollers

const addNewBook = async (req, res)=>{
    try{
        const newBookFormData = req.body;//we are requesting the data from the body of eg the form that the user has entered
        const newlyCreatedBook  = await Book.create(newBookFormData);
        if(newBookFormData){
            res.status(200).json({
                success: true,
                message: 'Book created succefully',
                data: newlyCreatedBook
            })
        }

    } catch(error){
        console.log(error)
        res.status(404).json({
            success: false,
            message: 'Something went wrong. Please try again'
        })
    }
};

//

const getAllBooks = async (req, res)=>{
    try{
        const allBooks = await Book.find({});

        if(allBooks.length > 0){
            res.status(200).json({
                success: true,
                message: 'List of all books from Database',
                data: allBooks
            })
        }
        else{
            res.status(404).json({
                success: false,
                message: 'No Book was Found'
            })
        }

    } catch(error){
        console.log(error)
        res.status(404).json({
            success: false,
            message: 'Something went wrong. Please try again'
        })
    }
};

//

const getSingleBooksById = async (req, res)=>{
    try{
        const bookId = req.params.id;
        const singleFoundBook =await Book.findById(bookId);

        if(singleFoundBook){
            res.status(200).json({
                success: true,
                message: `The Book with ID ${bookId} was Found`,
                data: singleFoundBook
            })
        }
        else{
             res.status(404).json({
                success: false,
                message: `No Book with ID ${bookId} was Found`
            })  
        }

    } catch(error){
        console.log(error)
        res.status(404).json({
            success: false,
            message: 'Something went wrong. Please try again!'
        })
    }
};

//

const updateBookById = async (req, res)=>{
    try{
        const updatedInfrom = req.body;
        const bookId = req.params.id;
        const updateBook = await Book.findByIdAndUpdate(bookId, updatedInfrom, {new: true});
        //will take 3 parameters. the id and the information to update followed by the new object property which is very important

        if(updateBook){
            res.status(200).json({
                success: true,
                message: `Book with ID ${bookId} was updated`,
                data: updateBook
            })
        }
         else{
             res.status(404).json({
                success: false,
                message: `No Book with ID ${bookId} was Found`
            })  
        }

    } catch(error){
        console.log(error)
        res.status(404).json({
            success: false,
            message: 'Something went wrong. Please try again'
        })
    }
};

//

const deleteBookById = async (req, res)=>{
    try{
        const bookId = req.params.id;
        const deletedBook = await Book.findByIdAndDelete(bookId);

        if(deleteBookById){
            res.status(200).json({
                success: true,
                message: `The Book with ID ${bookId} was deleted`,
                data: deletedBook
            })
        }
         else{
             res.status(404).json({
                success: false,
                message: `No Book with ID ${bookId} was Found`
            })  
        }

    } catch(error){
        console.log(error)
        res.status(404).json({
            success: false,
            message: 'Something went wrong. Please try again'
        })
    }
};



module.exports = { getAllBooks, getSingleBooksById, addNewBook, updateBookById, deleteBookById};