const e = require("express");

class Controller {

    constructor(req, res) {
        this.req = req;
        this.res = res;
    }

    /**
     * echo the response back as json
     * @param data
     * @param success
     * @param status
     * @returns {Promise<*>}
     */
    async respondJson(data, success, status) {
        this.res.setHeader('Content-Type', 'application/json');
        this.res.status(status).send(JSON.stringify({ data }));
        return this.res;
    }

}

module.exports = Controller;