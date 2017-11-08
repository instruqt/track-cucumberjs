Feature: searching for books
  As a book reader
  I want to be able to search for books
  So that I can find my book

  Scenario: looking for books
    Given the book 'a serious journey' is available
    When I look for a book
    Then I should find 'a serious journey'
