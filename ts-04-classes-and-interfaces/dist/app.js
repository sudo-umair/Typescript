"use strict";
// type Fn = (n: number, n2: number) => number;
let add;
add = (n1, n2) => {
    return n1 + n2;
};
class Person {
    constructor(name) {
        this.age = 22;
        if (name) {
            this.name = name;
        }
    }
    greet(phrase) {
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
