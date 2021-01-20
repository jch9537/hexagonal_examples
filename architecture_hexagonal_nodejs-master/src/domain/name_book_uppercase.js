async function name_book_uppercase (book_repository, id_book) {
  var name_book = await book_repository.getName(id_book)
  return await name_book.toUpperCase()
}
module.exports.name_book_uppercase = name_book_uppercase
