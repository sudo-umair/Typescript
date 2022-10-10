"use strict";
console.log("Generics in TypeScript");
function createCourseGoal(title, description, date) {
    const courseGoal = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;
    return courseGoal;
}
console.log(createCourseGoal("task1", "des", new Date()));
// Readonly - doesnot allows to modify data
const names = ["Ali", "Hassan"];
// names.push("Umair") //error
