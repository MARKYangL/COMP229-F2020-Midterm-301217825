/**
    Filename: /models/books.js
    Author's name: Yang li
    StudentID: 301217825
    Web App name: COMP229-F2020-Midterm-301217825
*/
let mongoose = require('mongoose');

// create a model class
let Book = mongoose.Schema({
    Title: String,
    Description: String,
    Price: Number,
    Author: String,
    Genre: String
},
{
  collection: "books"
});

module.exports = mongoose.model('Book', Book);
