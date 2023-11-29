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
// app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: true }));

// app.use(express.json())


  
// Database Configuration
// require('./database/connection.js');

// Routes
// app.use('/api', require('./routes/user'));
// app.use('/api', require('./routes/releaseRequests'));
// app.use('/api', require('./routes/resourceRequests'));
// app.use('/api', require('./routes/employee'));
// app.use('/api', require('./routes/skills'));
// app.use('/api', require('./routes/certificates'));
// app.use('/api', require('./routes/trainings'));

app.listen(process.env.PORT, console.log(`Server is listening to port ` + 5000));