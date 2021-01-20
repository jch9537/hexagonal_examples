var path = require('path');
var sequelize = require(path.join(__dirname, 'models', 'load.js'));
var Sequelize = require('sequelize');
var book = require(path.join(__dirname, 'models', 'book.js'));
var Book = book(sequelize.sequelize, Sequelize);
var book = Book.build({
  name: 'Phantom of Death',
  cost: 112000
})

book.save().catch(function(error) {
  // mhhh, wth!
})
