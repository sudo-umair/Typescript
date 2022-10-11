console.log("Decorators in Typescript");

//Decorator Function
// function Logger(constructor: Function) {
//   console.log("Logging......");
//   console.log(constructor);
// }

//Decorator Factory
/*
function Logger(logString: string) {
  console.log("Logger Factory");

  return function (constructor: Function) {
    console.log(logString);
  };
}

function WithTemplate(template: string, hookId: string) {
  console.log("Template Factory");

  return function <T extends { new (...args: any[]): { name: string } }>(
    originalConstructor: T
  ) {
    // console.log(template);
    // const p = new originalConstructor();
    // const hookEl = document.getElementById(hookId);
    // if (hookEl) {
    //   hookEl.innerHTML = template;
    //   hookEl.querySelector("h1")!.textContent = p.name;
    // }
    return class extends originalConstructor {
      constructor(..._args: any[]) {
        super();
        console.log(template);
        const p = new originalConstructor();
        const hookEl = document.getElementById(hookId);
        if (hookEl) {
          hookEl.innerHTML = template;
          hookEl.querySelector("h1")!.textContent = this.name;
        }
      }
    };
  };
}

@Logger("LOGGING - PERSON")
@WithTemplate("<h1>My Person Tag </h1>", "app")
class Person {
  name = "Muhammad Umair";

  constructor() {
    console.log("Creating person object");
  }
}

const person = new Person();
console.log(person);
 */

//types of decorators
/*
function Log(target: any, propertyName: string) {
  console.log("Property decorator");
  console.log(typeof target);
  console.log(target, propertyName);
}

function Log2(target: any, name: string, property: PropertyDescriptor) {
  console.log("Accessor Descriptor");
  console.log(name);
  console.log(target);
  console.log(property);
}

function Log3(
  target: any,
  name: string | Symbol,
  property: PropertyDescriptor
) {
  console.log("Method Decorator");
  console.log(name);
  console.log(target);
  console.log(property);
}

function Log4(target: any, name: string, positionOfArg: number) {
  console.log("Argument Decorator");
  console.log(name);
  console.log(target);
  console.log(positionOfArg);
}

class Product {
  @Log
  title: string;
  private _price: number;

  @Log2
  set Price(value: number) {
    if (value > 0) {
      this._price = value;
    } else {
      throw new Error("Invalid Price - Cant be zero");
    }
  }

  constructor(title: string, price: number) {
    this.title = title;
    this._price = price;
  }

  @Log3
  getPriceWithTax(@Log4 tax: number) {
    return this._price * (1 + tax);
  }
}

const p1 = new Product("Book1", 100);
console.log(p1);
const p2 = new Product("Book2", 200);
console.log(p2);

*/

/*
function AutoBind(
  _target: any,
  _methodName: string | Symbol | number,
  descriptor: PropertyDescriptor
) {
  console.log("ShowMessage Decorator");
  const originalMethod = descriptor.value;
  const adjustedDescriptor: PropertyDescriptor = {
    configurable: true,
    enumerable: false,
    get() {
      const boundFn = originalMethod.bind(this);
      return boundFn;
    },
  };
  return adjustedDescriptor;
}

class Printer {
  message = "This Works";

  @AutoBind
  showMessage() {
    console.log(this.message);
  }
}

const p = new Printer();

const button = document.querySelector("button")!;
button.addEventListener("click", p.showMessage);
*/

interface ValidatorConfig {
  [property: string]: {
    [validatableProp: string]: string[];
  };
}

const registeredValidators: ValidatorConfig = {};

function Required(target: any, propName: string) {
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    [propName]: ["required"],
  };
}

function PositiveNumber(target: any, propName: string) {
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    [propName]: ["positive"],
  };
}

function validate(obj: any) {
  const objValidatorConfig = registeredValidators[obj.constructor.name];
  if (!objValidatorConfig) {
    return true;
  }
  let isValid = true;
  for (const prop in objValidatorConfig) {
    for (const validator of objValidatorConfig[prop]) {
      switch (validator) {
        case "required":
          isValid = isValid && !!obj[prop];
          break;
        case "positive":
          isValid = isValid && obj[prop] > 0;
          break;
      }
    }
  }
  return isValid;
}

class Course {
  @Required title: string;
  @PositiveNumber price: number;

  constructor(t: string, p: number) {
    this.title = t;
    this.price = p;
  }
}

const courseForm = document.querySelector("form")!;
courseForm.addEventListener("submit", (event) => {
  event.preventDefault(); // preventing "No HTTP requests"
  const titleEl = document.getElementById("course-title") as HTMLInputElement;
  const priceEl = document.getElementById("course-price") as HTMLInputElement;

  const titleVal = titleEl.value;
  const priceVal = +priceEl.value;

  const createdCourse = new Course(titleVal, priceVal);

  if (!validate(createdCourse)) {
    alert("Invalid input, please try again!");
    return;
  }
  console.log(createdCourse);
});
