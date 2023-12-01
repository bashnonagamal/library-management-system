var express = require('express');
var router = express.Router();

var BorrowProcessController = require('../controllers/BorrowProcessController');

/**
 * Check out a book
 * @route POST api/checkOut
 */
router.post('/checkOut', async (req, res) => {
    return await new BorrowProcessController(req, res).checkOut();
})

/**
 * Return a book 
 * @route post api/returnBook
 */
router.post('/returnBook', async (req, res) => {
    return await new BorrowProcessController(req, res).returnBook();
})

/**
 * List Borrower books
 * @route GET api/listBorrowerBooks
 */
router.get('/listBorrowerBooks/:borrower_id', async (req, res) => {
    return await new BorrowProcessController(req, res).listBorrowerBooks();
})

/**
 * List over due books
 * @route GET api/overDueBooks
 */
router.get('/overDueBooks', async (req, res) => {
    return await new BorrowProcessController(req, res).overDueBooks();
})


module.exports = router;