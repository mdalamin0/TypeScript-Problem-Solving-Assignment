
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


interface Book {
  title: string;
  author: string;
  publishedYear: number;
}

const toggleReadStatus = (obj: Book) => {
  return { ...obj, isRead: true }
}

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


const getIntersection = (array1: number[], array2: number[]) : number[] => {
 const newArray = array1.filter(num => array2.includes(num))
 return newArray;
}
