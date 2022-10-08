// type Fn = (n: number, n2: number) => number;

interface Fn {
  (n1: number, n2: number): number;
}

let add: Fn;

add = (n1: number, n2: number) => {
  return n1 + n2;
};

interface Named {
  readonly name?: string;
  outputName?: string;
}

interface Greetable extends Named {
  greet(phrase: string): void;
}

class Person implements Greetable {
  name?: string;
  age: number = 22;

  constructor(name?: string) {
    if (name) {
      this.name = name;
    }
  }

  greet(phrase: string) {
    if (this.name) {
      console.log(`${phrase} ${this.name}`);
    }
  }
}

// let umair: Greetable;
// umair = {
//   name: "Muhammad Umair",
//   greet(phrase: string) {
//     console.log(`${phrase} ${this.name}`);
//   },
// };
// umair.greet("Hello");

const user1 = new Person("Muhammad Ali");
console.log(user1);
// user1.name = "Muhammad Umair";
user1.name = "Haris";
user1.greet("Hello");
