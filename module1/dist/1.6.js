"use strict";
// learning function
// normal function
function addTwoNumber(num1, num2 = 10) {
  return num1 + num2;
}
addTwoNumber(10, 20);
// arrow function
const addTwoNumArr = (num1, num2) => num1 + num2;
addTwoNumArr(40, 50);
// object => function => method
const poorUser = {
  name: "rokib",
  lastName: "hasan",
  balance: 0,
  addBalance(balance) {
    return `My total balance is ${this.balance + balance}`;
  },
  fullName: function (first, last) {
    return `my full name is ${this.name + this.lastName}`;
  },
};
// mapping through an array
let newNumbers = [2, 4, 6, 8, 20];
const newArray = newNumbers.map((number) => number * number);
// filter
const filteredArray = newNumbers.filter((number) => number % 2 == 0);
// find
const singleElement = newNumbers.find((number) => number % 5 == 0);
/**
 * !Understanding TypeScript is like understanding your ex in a better way!
 */
