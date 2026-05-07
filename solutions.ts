
const filterEvenNumbers = (numbers: number[]) : number[] => {
  const evenNumbers = numbers.filter(num => num % 2 === 0)
  return evenNumbers
}

const reverseString = (input: string) => {
  const reverseString = input.split("").reverse().join("");
  return reverseString
}


const checkType = (input: string | number) => {
  if (typeof input === "string") {
    return "String"
  } else if (typeof input === "number") {
    return "Number"
  }
}


const getProperty = <T>(obj: T, key: keyof T) => {
  return obj[key];
}

const user = { id: 1, name: "John Doe", age: 21 };


interface Book {
  title: string;
  author: string;
  publishedYear: number;
}

const toggleReadStatus = (obj: Book) => {
  return { ...obj, isRead: true }
}

const myBook = { title: "TypeScript Guide", author: "Jane Doe", publishedYear: 2024 };

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

const getIntersection = (array1: number[], array2: number[]) : number[] => {
 const newArray = array1.filter(num => array2.includes(num))
 return newArray;
}

console.log(getIntersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]));