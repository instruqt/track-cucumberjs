/* SHARED OBJECTS */
var Book = require('../../books');

var myHooks = function () {
  this.Before(function (scenario) {
    this.books = new Book()
  });

  this.After(function (scenario) {
    //
  })
};

module.exports = myHooks;

