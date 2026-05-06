// Problme 1

const filterEvenNumbers = (numbers: number[]) => {
  const evenNumbers = numbers.filter(num => num % 2 === 0)
  return evenNumbers
}

// console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6]));

// Problem 2

const reverseString = (input: string) => {
  const reverseString = input.split("").reverse().join("");
  return reverseString
}

// console.log(reverseString("typescript"));

// Problem - 3
type StringOrNumber = string | number;

const checkType = (input: StringOrNumber) => {
  if (typeof input === "string") {
    return "String"
  } else if (typeof input === "number") {
    return "Number"
  }
}

// console.log(checkType("Hello"));
// console.log(checkType(42));

// Problem 4

const getProperty = <T>(obj: T, key: keyof T) => {
  return obj[key];
}

const user = { id: 1, name: "John Doe", age: 21 };
// console.log(getProperty(user, "name"));


// Problem 5

interface Book {
  title: string;
  author: string;
  publishedYear: number;
}

const toggleReadStatus = (obj: Book) => {
  return { ...obj, isRead: true }
}

const myBook = { title: "TypeScript Guide", author: "Jane Doe", publishedYear: 2024 };
// console.log(toggleReadStatus(myBook));

// Problem 6
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }
}

class Student extends Person {
  grade: string;

  constructor(name: string, age: number, grade: string) {
    super(name, age)
    this.grade = grade
  }
  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`
  }
}

const student = new Student("Alice", 20, "A");
// console.log(student.getDetails());

// Problem 7
const getIntersection = (array1: number[], array2: number[]) => {
 const newArray = array1.filter(num => array2.includes(num))
 return newArray;
}

console.log(getIntersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]));