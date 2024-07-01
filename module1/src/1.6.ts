// learning function

// normal function
function addTwoNumber(num1: number, num2: number = 10): number {
  return num1 + num2;
}
addTwoNumber(10, 20);

// arrow function
const addTwoNumArr = (num1: number, num2: number): number => num1 + num2;
addTwoNumArr(40, 50);

// object => function => method
const poorUser: {
  name: string;
  lastName: string;
  balance: number;
  addBalance: (balance: number) => string; // Function type definition
  fullName: (first: string, last: string) => string;
} = {
  name: "rokib",
  lastName: "hasan",
  balance: 0,
  addBalance(balance: number): string {
    return `My total balance is ${this.balance + balance}`;
  },
  fullName: function (first: string, last: string): string {
    return `my full name is ${this.name + this.lastName}`;
  },
};

// mapping through an array
let newNumbers: number[] = [2, 4, 6, 8, 20];
const newArray: number[] = newNumbers.map(
  (number: number): number => number * number
);

// filter
const filteredArray: number[] = newNumbers.filter(
  (number: number): boolean => number % 2 == 0
);

// find
const singleElement: number | undefined = newNumbers.find(
  (number: number): boolean => number % 5 == 0
);
