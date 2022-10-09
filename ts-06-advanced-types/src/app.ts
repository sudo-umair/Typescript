type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: "Muhammad Umair",
  startDate: new Date(),
  privileges: ["create-server"],
};

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

const aa: Universal = 22;
// const bb: Universal = "22";

function add(a: number, b: number): number; //function overloading
function add(a: string, b: string): string; //function overloading
function add(a: number, b: string): string; //function overloading
function add(a: string, b: number): string; //function overloading
function add(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

const result = add(2, "Hello World");
console.log(result.split(" "));

const fetchedUserData = {
  id: 1,
  name: "Ali Hassan",
  jobs: {
    title: "CEO",
    description: "lorem ipsum",
  },
};

// optional chaining
console.log(fetchedUserData?.jobs?.title);

// nullish coalescing
const userData = null; //either null or undefined
const resultData = userData ?? "Default";
console.log(resultData);

/*
type UnknownEmployee = Employee | Admin;

function printEmployee(emp: UnknownEmployee) {
  console.log("Name " + emp.name);
  if ("privileges" in emp) {
    console.log("Privileges " + emp?.privileges);
  }
  if ("startDate" in emp) {
    console.log("start-date " + emp?.startDate);
  }
}

printEmployee(e1);

printEmployee({
  name: "Ali Hassan",
  startDate: new Date(),
});

class Car {
  drive() {
    console.log("Driving...");
  }
}

class Truck {
  drive() {
    console.log("Driving...");
  }

  loadCargo(amount: number) {
    console.log("Loading Cargo" + amount);
  }
}

type Vehicle = Car | Truck;

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  // if ("loadCargo" in vehicle) {
  //   vehicle.loadCargo(200);
  // }
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(200);
  }
}

const v1 = new Car();
const v2 = new Truck();

useVehicle(v1);
useVehicle(v2);

interface Bird {
  type: "bird";
  flyingSpeed: number;
}

interface Horse {
  type: "horse";
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  // if ("flyingSpeed" in animal) {
  //   console.log("Moving with Speed of " + animal.flyingSpeed);
  // }

  let speed;
  switch (animal.type) {
    case "bird":
      speed = animal.flyingSpeed;
      break;
    case "horse":
      speed = animal.runningSpeed;
      break;
  }

  console.log("Moving with speed of " + speed);
}

moveAnimal({
  type: "bird",
  flyingSpeed: 220,
});

moveAnimal({
  type: "horse",
  runningSpeed: 110,
});

const p1 = document.querySelector("p");
const p2 = document.getElementById("output");

// const inp1 = <HTMLInputElement>document.getElementById("user-input")!;
// inp1.value = "Hi There";

// const inp2 = document.getElementById("user-input")! as HTMLInputElement;
const inp2 = document.getElementById("user-input");

if (inp2) {
  (inp2 as HTMLInputElement).value = "Hi There, Again";
}


// index types
interface ErrorContainer {
  [prop: string]: string;

  //other types cant be used with index type
}

const errorBag: ErrorContainer = {
  email: "Not a valid email",
  username: "Must start with a Capital Letter",
};

*/
