/* Write Pagination object that will get an array and pageSize, then will return the following.
prevPage
nextPage
firstPage
lastPage
goToPage
getPageItems
const alphabetArray = "abcdefghijklmnopqrstuvwxyz".split("");
Pagination.init(alphabetArray, 4);
Pagination.getPageItems(); // ["a", "b", "c", "d"]
Pagination.nextPage(); // add the current page by one
Pagination.getPageItems(); // ["e", "f", "g", "h"]
Pagination.nextPage().nextPage(); // the ability to call chainable
Pagination.goToPage(3); // current page must be set to 3 
*/
function Pagination() {
  this.book = [];
  this.currentPage = 0;
}
Pagination.prototype.init = function (bookLines = [], pageSize = 1) {
  if (pageSize < 1) {
    throw new Error("Your page size is invalid!!!");
  }
  this.book = bookLines.reduce((acc, item, idx) => {
    if (idx % pageSize === 0) {
      acc = [...acc, [item]];
    } else {
      acc[acc.length - 1].push(item);
    }
    return acc;
  }, this.book);
  return this;
};
Pagination.prototype.prevPage = function () {
  const prevPage = this.currentPage - 1;
  if (prevPage > 0) {
    this.currentPage = prevPage - 1;
  }
  return Pagination.prototype;
};
Pagination.prototype.nextPage = function () {
  const nextPage = this.currentPage + 1;
  if (nextPage < this.book.length) {
    this.currentPage = nextPage;
  }
  return Pagination.prototype;
};
Pagination.prototype.firstPage = function () {
  const firstPage = (this.currentPage = 0);
  return this.book[firstPage];
};
Pagination.prototype.lastPage = function () {
  this.currentPage = this.book.length - 1;
  const lastPage = this.currentPage;
  return this.book[lastPage];
};
Pagination.prototype.goToPage = function (page) {
  this.currentPage = page;
  return this.book[this.currentPage - 1];
};
Pagination.prototype.getCurrentPage = function () {
  this.currentPage += 1;
  return this.book[this.currentPage - 1];
};
const alphabetArray = "abcdefghijklmnopqrstuvwxyz".split("");
const pages = new Pagination().init(alphabetArray, 5);
console.log(pages.getCurrentPage());
pages.nextPage().nextPage;
console.log(pages.getCurrentPage());
pages.prevPage();
console.log(pages.getCurrentPage());
console.log(pages.goToPage(4));
console.log(pages.lastPage());
console.log(pages.firstPage());
