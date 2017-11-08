var assert = require('chai').assert;

module.exports = function() {
  this.Given(/^the book '(.*)' is available$/, function (book) {
    this.books.addBook(book)
  });

  this.When(/^I look for a book$/, function () {
    this.result = this.books.findBooks()
  });

  this.Then(/^I should find '(.*)'$/, function (book) {
    assert(this.result[0].title === book, 'expected ' + book + ', but found ' + this.result[0].title)
  });
};
