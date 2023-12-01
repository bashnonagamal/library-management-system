const db = require('../models/index');
const Controller = require('./Controller');
const Book = db.Book;
const Borrower = db.Borrower;
const BorrowedBook = db.BorrowedBook;

class BorrowProcessController extends Controller {

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
            return super.respondJson({ message: err.message }, false, 500);
        });

        // register book
        BorrowedBook.create(this.req.body)
            .then(res => {
                return super.respondJson(res, true, 200);
            }).catch(err => {
                return super.respondJson({ message: err.message }, false, 500);
            });
    }

    /**
     * Return a book
     * @returns {Promise<void>}
     */
    async returnBook() {
        // return a book by settings
        console.log(this.req.body.book_id);
        BorrowedBook.update({"isReturned" : 1 },{
            where:{
                book_id: this.req.body.book_id,
                borrower_id: this.req.body.borrower_id
            }
        }).then(res => {
            return super.respondJson(res, true, 200);
        }).catch(err => {
            return super.respondJson({ message: err.message }, false, 500);
        });
    }

    /**
     * list Borrower Books
     * @returns {Promise<void>}
     */
    async listBorrowerBooks() {
        Borrower.findAll({
            where: {
                id: this.req.params.borrower_id
            },
            include: [
                {
                    association: 'books',
                }
            ]
        }).then(books => {
            if (!books) {
                return super.respondJson({ message: "No Books exist for this Borrower" }, false, 403);
            }
            return super.respondJson(books, true, 200);
        }).catch(err => {
            return super.respondJson({ message: err.message }, false, 500);
        });
    }

    /**
     * List over Due Books
     * @returns {Promise<void>}
     */
    async overDueBooks(){
       let borrowed_books = new Array();
       await BorrowedBook.findAll().then(res => {
            borrowed_books = res;
            
        }).catch(err => {
            return super.respondJson({ message: err.message }, false, 500);
        });
        
        let dueBooks = new Array();
        for(let i = 0; i < borrowed_books.length; i++){
            let due_date = borrowed_books[i].dataValues.due_date;
            let today = new Date();
            let Difference_In_Time = today.getTime() - due_date.getTime(); 
            // To calculate the no. of days between two dates 
            let Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);         
            // if the difference more than or equal 0 it will be due
            if(Math.floor(Difference_In_Days) >= 0){
                dueBooks.push(borrowed_books[i].dataValues);
            }
        }

        return super.respondJson(dueBooks, true, 200);
        
                    
    }

}

module.exports = BorrowProcessController;