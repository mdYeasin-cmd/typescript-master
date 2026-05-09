// Problem - 1
const filterEvenNumbers = (arrayOfNumbers: number[]) => {
  return arrayOfNumbers.filter((number) => number % 2 === 0);
};

// Problem - 2
const reverseString = (param: string) => {
  return param.split("").reverse().join("");
};

// Problem - 3
type StringOrNumber = string | number;

const checkType = (param: StringOrNumber) => {
  if (typeof param === "string") {
    return "String";
  } else if (typeof param === "number") {
    return "Number";
  } else {
    return "Invalid argument passed!";
  }
};

// Problem - 4
const getProperty = <T>(object: T, property: keyof T) => {
  return object[property];
};

// Problem - 5
interface Book {
  title: string;
  author: string;
  publishedYear: number;
}

const toggleReadStatus = (book: Book) => {
  return {
    ...book,
    isRead: true,
  };
};

// Problem - 6
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class Student extends Person {
  grade: string;

  constructor(name: string, age: number, grade: string) {
    super(name, age);
    this.grade = grade;
  }

  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
  }
}

// Problem - 7
const getIntersection = (firstArr: number[], secondArr: number[]) => {
  return firstArr.filter((num) => secondArr.includes(num));
};
