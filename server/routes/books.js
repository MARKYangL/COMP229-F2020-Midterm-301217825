/**
    Filename: /routes/books.js
    Author's name: Yang li
    StudentID: 301217825
    Web App name: COMP229-F2020-Midterm-301217825
*/
// modules required for routing
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// define the book model
let book = require('../models/books');

/* GET books List page. READ */
router.get('/', (req, res, next) => {
  // find all books in the books collection
  book.find((err, books) => {
    if (err) {
      return console.error(err);
    }
    else {
      res.render('books/index', {
        title: 'Books',
        books: books
      });
    }
  });

});

//  GET the Book Details page in order to add a new Book
/* 
  GET the Book Details page in order to add a new Book
  Filename: /routes/books.js
  Author's name: Yang li
  StudentID: 301217825
  Web App name: COMP229-F2020-Midterm-301217825
*/
router.get('/add', (req, res, next) => {

  /*****************
   * ADD CODE HERE *
   *****************/
  res.render('books/details', {
    title: "Books",
    books: {},
  })
});

// POST process the Book Details page and create a new Book - CREATE
/* 
  POST process the Book Details page and create a new Book - CREATE
  Filename: /routes/books.js
  Author's name: Yang li
  StudentID: 301217825
  Web App name: COMP229-F2020-Midterm-301217825
*/
router.post('/add', (req, res, next) => {

  /*****************
   * ADD CODE HERE *
   *****************/
  book.create(req.body).then(() => {
    res.redirect("/books")
  })

});

// GET the Book Details page in order to edit an existing Book
/* 
  GET the Book Details page in order to edit an existing Book
  Filename: /routes/books.js
  Author's name: Yang li
  StudentID: 301217825
  Web App name: COMP229-F2020-Midterm-301217825
*/
router.get('/:id', (req, res, next) => {

  /*****************
   * ADD CODE HERE *
   *****************/
  book.findById(req.params.id).then(books => {
    res.render('books/details', {
      title: "Books",
      books,
    })
  })
});

// POST - process the information passed from the details form and update the document
/* 
  POST - process the information passed from the details form and update the document
  Filename: /routes/books.js
  Author's name: Yang li
  StudentID: 301217825
  Web App name: COMP229-F2020-Midterm-301217825
*/
router.post('/:id', (req, res, next) => {

  /*****************
   * ADD CODE HERE *
   *****************/

  book.update({
    _id: req.params.id
  }, req.body).then(() => {
    res.redirect("/books")
  })

});

// GET - process the delete by user id
/* 
  GET - process the delete by book id
  Filename: /routes/books.js
  Author's name: Yang li
  StudentID: 301217825
  Web App name: COMP229-F2020-Midterm-301217825
*/
router.get('/delete/:id', (req, res, next) => {

  /*****************
   * ADD CODE HERE *
   *****************/
  book.remove({
    _id: req.params.id
  }).then(() => {
    res.redirect("/books")
  })
});


module.exports = router;
