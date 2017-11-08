function Books(board) {
  this.bookList = []

  this.addBook = function(book) {
    this.bookList.push({
      title: book
    })
  }

  this.findBooks = function() {
    return this.bookList
  }
}

module.exports = Books;
