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
 * @route DELETE api/deleteBorrower
 */
router.delete('/returnBook', async (req, res) => {
    return await new BorrowProcessController(req, res).returnBook();
})

/**
 * Check Borrower books
 * @route POST api/addBorrower
 */
router.post('/listBorrowerBooks', async (req, res) => {
    return await new BorrowProcessController(req, res).listBorrowerBooks();
})

/**
 * List over due books
 * @route PUT api/addBorrower
 */
router.put('/overDueBooks', async (req, res) => {
    return await new BorrowProcessController(req, res).overDueBooks();
})


module.exports = router;