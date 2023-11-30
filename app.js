const express = require('express');
const dotenv = require('dotenv');
const cors = require("cors");
const bodyParser = require("body-parser");


const app = express();

// Setup environment Variables
dotenv.config();


var corsOptions = {
    origin: "http://localhost:3000"
};


app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

  
// Database Configuration
require('./models/index.js');


// Routes
app.use('/api', require('./routes/book'));
app.use('/api', require('./routes/borrower'));
app.use('/api', require('./routes/borrowProcess'));

app.listen(process.env.PORT, console.log(`Server is listening to port ` + 5000));