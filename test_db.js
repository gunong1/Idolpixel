require('dotenv').config();
const mongoose = require('mongoose');

const uri = process.env.MONGODB_URI;
console.log("Testing Connection to:", uri);

mongoose.connect(uri)
    .then(() => {
        console.log("SUCCESS: Connected to MongoDB!");
        process.exit(0);
    })
    .catch(err => {
        console.error("FAILURE:", err);
        process.exit(1);
    });
