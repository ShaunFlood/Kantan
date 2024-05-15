const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');


const app = express();

//middlesware

app.use(express.json());
app.use(cors());

//connecting to the db

//check for valid token


//routes for the backend

//error handling


//Server start

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})

module.exports = server;