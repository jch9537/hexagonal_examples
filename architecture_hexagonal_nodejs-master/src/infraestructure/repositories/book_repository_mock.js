const BookRepositoryMock = function() {};
BookRepositoryMock.prototype.getName = async function(id_book) {
  return "Crimson Prayer";
};

book_repository= new BookRepositoryMock();
module.exports = book_repository;
