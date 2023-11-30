const db = require('../models/index');
const Controller = require('./Controller');
const Book = db.Book;

class BookController extends Controller {

    constructor(req, res) {
        super(req, res);
    }

    /**
     * Get all Books
     * @returns {Promise<void>}
     */
    async getBooks() {
        Book.findAll()
            .then(books => {
                if (!books) {
                    return super.respondJson({ message: "No books exit" }, false, 403);
                }
                return super.respondJson(
                    books
                    , true, 200);

            }).catch(err => {
                return super.respondJson({ message: err.message }, false, 500);
            });
    }

    /**
     * Filter Books
     * @returns {Promise<void>}
     */
    async filterBooks(searchBy) {

        var whereStatement = {};
        if (searchBy == "title")
            whereStatement.title = this.req.params.title;
        if (searchBy == "author")
            whereStatement.author = this.req.params.author;
        if (searchBy == "ISBN")
            whereStatement.ISBN = this.req.params.ISBN;


        Book.findAll({
            where: whereStatement
        }).then((books) => {
            if (!books) {
                return super.respondJson({ message: "No books exist" }, false, 403);
            }
            return super.respondJson(
                books
                , true, 200);
        }).catch((err => {
            return super.respondJson({ message: err.message }, false, 500);
        }));
    }

    /**
     * Add Book
     * @returns {Promise<void>}
     */
    async addBook() {
        Book.create(this.req.body)
            .then(res => {
                return super.respondJson(res, true, 200);
            }).catch(err => {
                return super.respondJson({ message: err.message }, false, 500);s
            });
    }

    /**
     * Update Book
     * @returns {Promise<void>}
     */
    async updateBook() {
        Book.update(this.req.body,{
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
     * Delete Book
     * @returns {Promise<void>}
     */
    async deleteBook(){
        Book.destroy({
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

module.exports = BookController;