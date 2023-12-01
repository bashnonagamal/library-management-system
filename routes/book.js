var express = require('express');
var router = express.Router();

var BookController = require('../controllers/BookController');

/**
 * Get Book list
 * @route GET api/getBooks
 */
router.get('/getBooks', async (req, res) => {
    return await new BookController(req, res).getBooks();
})

/**
 * Delete Book 
 * @route DELETE api/deleteBook
 */
router.delete('/deleteBook/:id', async (req, res) => {
    return await new BookController(req, res).deleteBook();
})

/**
 * Add Book 
 * @route POST api/addBook
 */
router.post('/addBook', async (req, res) => {
    return await new BookController(req, res).addBook();
})

/**
 * Update Book 
 * @route PUT api/addBook
 */
router.put('/updateBook/:id', async (req, res) => {
    return await new BookController(req, res).updateBook();
})

/**
 * Get Book by title
 * @route GET api/getBookByTitle
 */
router.get('/getBookByTitle/:title', async (req, res) => {
    return await new BookController(req, res).filterBooks("title");
})

/**
 * Get Book by author
 * @route GET api/getBookByAuthor
 */
router.get('/getBookByAuthor/:author', async (req, res) => {
    return await new BookController(req, res).filterBooks("author");
})

/**
 * Get Book by ISBN
 * @route GET api/getBookByISBN
 */
router.get('/getBookByISBN/:ISBN', async (req, res) => {
    return await new BookController(req, res).filterBooks("ISBN");
})


module.exports = router;