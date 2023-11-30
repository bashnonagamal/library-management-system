const db = require('../models/index');
const Controller = require('./Controller');
const Book = db.Book;
const Borrower = db.Borrower;
const BorrowedBook = db.BorrowedBook;

class BorrowerController extends Controller {

    constructor(req, res) {
        super(req, res);
    }

    /**
     * Check out a book
     * @returns {Promise<void>}
     */
    async checkOut() {
        var book_available_quantity;
        var checkOutProcess = true;
        // Check if borrower already borrowed this book before
        await BorrowedBook.findOne({ where: { 
        "book_id": this.req.body.book_id,
        "borrower_id": this.req.body.borrower_id,
        "isReturned": null
         }}).then(res => {
            if(res != null){
                checkOutProcess = false;
                return super.respondJson("Borrower already has the book", false, 200);
            }
        }).catch(err => {
            return super.respondJson({ message: err.message }, false, 500);
        });
        if(checkOutProcess != true)
            return;
        // check if user and book do exist.
        await Borrower.findOne({ where: { "id": this.req.body.borrower_id }}).then(res => {
            if(res == null){
                checkOutProcess = false;
                return super.respondJson("Borrower does not exist", false, 200);
            }
        }).catch(err => {
            return super.respondJson({ message: err.message }, false, 500);
        });
        if(checkOutProcess != true)
            return;
        // Check if book does exist and if book quantity available
        await Book.findOne({ where: { "id": this.req.body.book_id }}).then(res => {
            if(res == null){
                checkOutProcess = false;
                return super.respondJson("Book does not exist", false, 200);
            }
            
            book_available_quantity = res.available_quantity;
            if(res.available_quantity == 0){
                checkOutProcess = false;
                return super.respondJson("There are no copies of this book right now.", false, 200);
            }
                
        }).catch(err => {
            return super.respondJson({ message: err.message }, false, 500);
        });
        
        if(checkOutProcess != true)
            return;
        // Update Book available quantity
        Book.update({"available_quantity" : book_available_quantity - 1 },{
            where:{
                id: this.req.body.book_id
            }
        }).catch(err => {
            return super.respondJson({ message: err.message }, false, 500);s
        });

        // register book
        BorrowedBook.create(this.req.body)
            .then(res => {
                return super.respondJson(res, true, 200);
            }).catch(err => {
                return super.respondJson({ message: err.message }, false, 500);s
            });
    }

    /**
     * Add Borrower
     * @returns {Promise<void>}
     */
    async addBorrower() {
        Borrower.create(this.req.body)
            .then(res => {
                return super.respondJson(res, true, 200);
            }).catch(err => {
                return super.respondJson({ message: err.message }, false, 500);s
            });
    }

    /**
     * Update Borrower
     * @returns {Promise<void>}
     */
    async updateBorrower() {
        Borrower.update(this.req.body,{
            where:{
                id: this.req.params.id
            }
        }).then(res => {
            return super.respondJson(res, true, 200);
        }).catch(err => {
            return super.respondJson({ message: err.message }, false, 500);s
        });
    }

    /**
     * Delete Borrower
     * @returns {Promise<void>}
     */
    async deleteBorrower(){
        Borrower.destroy({
            where: {
                id: this.req.params.id
            }
        }).then(res => {
            return super.respondJson(res, true, 200);
        }).catch(err => {
            return super.respondJson({ message: err.message }, false, 500);
        });
    }

}

module.exports = BorrowerController;