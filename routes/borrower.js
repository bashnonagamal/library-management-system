var express = require('express');
var router = express.Router();

var BorrowerController = require('../controllers/BorrowerController');

/**
 * Get Borrower list
 * @route GET api/getAllBorrowers
 */
router.get('/getBorrowers', async (req, res) => {
    return await new BorrowerController(req, res).getBorrowers();
})

/**
 * Delete Borrower 
 * @route DELETE api/deleteBorrower
 */
router.delete('/deleteBorrower/:id', async (req, res) => {
    return await new BorrowerController(req, res).deleteBorrower();
})

/**
 * Add Borrower
 * @route POST api/addBorrower
 */
router.post('/addBorrower', async (req, res) => {
    return await new BorrowerController(req, res).addBorrower();
})

/**
 * Update Borrower 
 * @route PUT api/addBorrower
 */
router.put('/updateBorrower/:id', async (req, res) => {
    return await new BorrowerController(req, res).updateBorrower();
})


module.exports = router;