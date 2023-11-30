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

    /**
     * Respond with an excel file as attachment
     * @param filename
     * @param workbook
     * @returns {Promise<void>}
     */
    async respondExcel(filename, workbook) {
        this.res.setHeader(
            "Content-Type",
            "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
        );
        this.res.setHeader(
            "Content-Disposition",
            "attachment; filename=" + filename + ".xlsx"
        );
        let controllerInstance = this;
        return workbook.xlsx.write(this.res).then(function () {
            
            controllerInstance.res.status(200).end();
          });
    }
}

module.exports = Controller;