/**
    Filename: /routes/index.js
    Author's name: Yang li
    StudentID: 301217825
    Web App name: COMP229-F2020-Midterm-301217825
*/
// modules required for routing
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// define the game model
let book = require('../models/books');

/* GET home page. wildcard */
router.get('/', (req, res, next) => {
  res.render('content/index', {
    title: 'Home',
    books: ''
   });
});

module.exports = router;
