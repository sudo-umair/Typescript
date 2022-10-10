console.log("Generics in TypeScript");

// const names: Array<string> = ["Muhammad", "Umair"];
// const numbers = [1, 2, 3];
// const arr = [1, "Max", true];

/* 
// generics in promises
const promise: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("This is done");
  }, 2000);
});

promise
  .then((message) => console.log(message))
  .catch((err) => console.log(err));
*/

// generics in functions
/*
function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergedObj = merge(
  { name: "Umair", hobbies: ["Gaming, Programming"] },
  { age: 11 }
);
console.log(mergedObj.name);

// const mergedObj2 = merge({ name: "Ali" }, { age: 11, student: false });
// console.log(mergedObj2.student);

type Lengthy = {
  length: number;
};

// interface Lengthy {
//   length: number;
// }

function countAndPrint<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = "Got no value";
  if (element.length >= 1) {
    descriptionText = "Got " + element.length + " elements";
  }
  return [element, descriptionText];
}

console.log(countAndPrint("Hi there!"));
console.log(countAndPrint(["Sports", "Cooking"]));
console.log(
  countAndPrint({
    length: 10,
  })
);
// console.log(countAndPrint(10));

function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return "Value: " + obj[key];
}

console.log(extractAndConvert({ name: "Muhammad Umair" }, "name"));
// console.log(extractAndConvert({ name: "Muhammad Umair" }, "age")); //error
*/

//generic classes
/*
class DataStorage<T extends number | string | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    // to fix the bug with objects
    if (this.data.indexOf(item)) {
      return;
    }
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [this.data];
  }
}

const textStorage = new DataStorage<string | number>();
textStorage.addItem("Hello");
textStorage.addItem(11);
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();
numberStorage.addItem(22);
// numberStorage.addItem("string"); //error
console.log(numberStorage.getItems());

// const objectStorage = new DataStorage<object>(); //error
// const dummyobj = { name: "Muhammad" };
// objectStorage.addItem(dummyobj);
// objectStorage.addItem({ name: "Umair" });
// objectStorage.removeItem(dummyobj);
// console.log(objectStorage.getItems());
*/

//generic utility types

// Partial
interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

function createCourseGoal(
  title: string,
  description: string,
  date: Date
): CourseGoal {
  const courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;

  return courseGoal as CourseGoal;
}

console.log(createCourseGoal("task1", "des", new Date()));

// Readonly - doesnot allows to modify data
const names: Readonly<string[]> = ["Ali", "Hassan"];
// names.push("Umair") //error
