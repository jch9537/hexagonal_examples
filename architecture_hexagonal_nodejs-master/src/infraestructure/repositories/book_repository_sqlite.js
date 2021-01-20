var path = require('path');
var Sequelize = require('sequelize');
var sequelize = require(path.join(__dirname, '..', 'sqlite', 'models', 'load.js'));
var book = require(path.join(__dirname, '..', 'sqlite', 'models', 'book.js'));
Book = book(sequelize.sequelize, Sequelize);

const BookRepositorySQLite = function() {};
BookRepositorySQLite.prototype.getName = async function(id_book) {
  book = await Book.findOne({where: {id: id_book}}).then(book => {
    return book;
  });
  return await book.dataValues.name;
};

book_repository = new BookRepositorySQLite();
module.exports = book_repository;
