const person: {
  name: string;
  age: number & 22;
  hobbies: string[];
  role: [number, string];
} = {
  name: "Muhammad Umair",
  age: 22,
  hobbies: ["Sports", "Gaming"],
  role: [2, "author"], //Tuple
};

// person.role[1] = 10;
person.role.push("admin");
person.role = [0, "admin"];

let favoriteActivities: string[];
favoriteActivities = ["Sports"];

console.log(person.name);
console.log(person.age);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}
