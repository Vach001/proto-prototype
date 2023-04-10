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

let pagination = {};

Object.defineProperties(pagination, {
  _currentPage: {
    value: 0,
    writable: true,
  },
  array: {
    value: [],
    writable: true,
    // enumerable: false,
    // configurable: false,
  },
  init: {
    value: (pageItems, pageItemsCount) => {
      const arr = pagination.array;

      for (let i = 0; i < pageItems.length; i++) {
        if (i % pageItemsCount === 0) {
          arr.push([]);
        }
        arr[arr.length - 1].push(pageItems[i]);
      }
      return arr;
    },
  },
  prevPage: {
    value: () => {
      return (pagination._currentPage -= 1);
    },
  },
  nextPage: {
    value: () => {
      pagination._currentPage += 1;
      return pagination;
    },
  },
  firstPage: {
    value: () => {
      return pagination.array[0];
    },
  },
  lastPage: {
    value: () => {
      return pagination.array[pagination._currentPage.length - 1];
    },
  },
  goToPage: {
    value: (page) => {
      return (pagination._currentPage = page);
    },
  },
  getPageItems: {
    value: () => {
      return pagination.array[pagination._currentPage];
    },
  },
});

const alphabetArray = "abcdefghijklmnopqrstuvwxyz".split("");
pagination.init(alphabetArray, 4);
console.log(pagination.getPageItems()); // ["a", "b", "c", "d"]
console.log(pagination.nextPage()); // add the current page by one
console.log(pagination.getPageItems()); // ["e", "f", "g", "h"]
console.log(pagination.nextPage().nextPage()); // the ability to call chainable
console.log(pagination.goToPage(3)); // current page must be set to 3
console.log(pagination._currentPage); // 3
console.log(pagination.getPageItems()); // ['m', 'n', 'o', 'p']
