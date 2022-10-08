enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

// enum Role {
//   ADMIN = 1,
//   READ_ONLY = "READ_ONLY",
//   AUTHOR = 2,
// }

const person: {
  name: string;
  age: number & 22;
  hobbies: string[];
  role: Role;
} = {
  name: "Muhammad Umair",
  age: 22,
  hobbies: ["Sports", "Gaming"],
  role: Role.ADMIN,
};

console.log(person.role);
