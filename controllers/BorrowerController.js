const db = require('../models/index');
const Controller = require('./Controller');
const Borrower = db.Borrower;

class BorrowerController extends Controller {

    constructor(req, res) {
        super(req, res);
    }

    /**
     * Get all Borrowers
     * @returns {Promise<void>}
     */
    async getBorrowers() {
        Borrower.findAll()
            .then(borrowers => {
                if (!borrowers) {
                    return super.respondJson({ message: "No borrowers exit" }, false, 403);
                }
                return super.respondJson(
                    borrowers
                    , true, 200);

            }).catch(err => {
                return super.respondJson({ message: err.message }, false, 500);
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