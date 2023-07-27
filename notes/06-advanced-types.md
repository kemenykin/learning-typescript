### Intersection types
- allow us to combine other types
- we have a type Admin - which is an object type and a type Emplyee
- combination of these two types from above - has a name, a startDate, and privileges
- the result is a new object type which must have both
- so if we create 
- if I would store an object in a new variable which has ElevatedEmployee type:
```
const e1: ElevatedEmployee = {
    name: 'Kyle',
    privileges: ['create-servers'],
    startDate: new Date()
}
```
- simple way to combine 2 types
- intersection types are closely related to interface inheritance
- we can use alternatively interfaces:
```
interface Admin {
    ...
}

interface Employee {
    ...
}

interface ElevatedEmployee extends Employee, Admin {

}
```
- but it is a bit more, we prefer to use  intersection types 
- we can do it more types:
```
type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;  
// the type Universal is of type number, because that is the only intersection
// if we would have more, that would be the type that is assigned to Universal
```
- intersection operator (&) can be used with any types, and builds the intersection of these types what we have
- in case of union types, that is basically the types they have in common
- in case of object types it is simply the combination of these object properties

### More on type guards
```
function add(a: Combinable, b: Combinable) {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }
  return a + b;
}
```
- the `typeof` in if conditional is called type guard (1.)
- bc it allows us to utilize the flexibility union types gives us and still ensure that our code runs correctly at runtime
- what we do with the values depend on the type (concatenate or add mathematically)
```
type UnknownEmployee = Employee | Admin;
```
- UnknownEmployee is either of the two types
- ha van egy printEmployeeInformation függvényünk, ami vár egy paramétert - a típusa pedig UnknownEmployee
- azt a propertit ami nem biztos hogy benne közös, nem fogjuk tudni kiíratni - TYPEGUARD
- itt a typeof sem segít, mert az objektum propertijét nem tudjuk vizsgálni
- más mód kell = `IN` (typeguard no2.)
- JS code that allows to check if this exists as a property on employee
```
function printEmployeeInformation(emp: UnknownEmployee) {
    console.log(`Name: ${emp.name}`);
    if ('privileges' in emp) {
    console.log(`Privileges: ${emp.privileges}`);
    }
     if ('startDate' in emp) {
    console.log(`Start Date: ${emp.startDate}`);
    }
}

function printEmployeeInformation({name: 'Manu', startDate: new Date()});

function printEmployeeInformation(e1);
```

- `INSTANCEOF` typeguard (no3.):
```
type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();  // both of them knows this method
  // vehicle.loadCargo(); error - only the Truck has this
}
```
- we can use `in` keyword to check
- another, more elegant way to solve the problem: (eliminate the risk that typo the prop name, etc.)
```
function useVehicle(vehicle: Vehicle) {
  vehicle.drive();  // both of them knows this method
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
  }
}
```
- it is also a JS code, executes at runtime
- we can't use interfaces here because of they are not making JS code, and we need to runtime check (instanceof is a runtime check)

### Discriminated unions
- special type of typeguards
- it is a pattern, makes implementing type guards easier
- available when you work with object types
- we have objects with different props or methods
- we can't use the familiar type guards bc of the different objects
- we can build a discriminated union by giving every interface
```
interface Bird {
  type: 'bird'
  flyingspeed: number;
}

interface Horse {
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  let speed;
  switch (animal.type) {
    case 'bird':
      speed = animal.flyingspeed;
      break;
    case 'horse':
      speed = animal.runningSpeed;  
  }
  console.log(`Moving speed ${speed}`);
}
```
- type assignment, where we narrow down the value that may be stored in type
- we put a value in the interface that we can check
#### SO we have one common prop in every object that makes up our union, which describes that object - so we can use this prop that describes this object - 100% type safe

### Type casting
- helps us to tell TS that some value is of a specific type where TS is not able to detect it on its own
- we can work with DOM elements
- TS knows the elements, but if we add an ID to our element, TS doesn't dive deep in our HTML, it doesn't know if it belongs to a p element
- 2 ways of type casting - 2 syntax:
1. before element: `<HTMLInputElement>`document.getElementById('user-input');
- In React, there is <> syntax so another version for this solution:
2. after element: document.getElementById('user-input') `as HTMLInputElement`;

! - allows us to tell TS that the expression in front of it will never yield
- we use it when select something from the DOM that might return null

```
HTML document:
const userInput = document.getElementById('user-input);

if (userInputElement) {
  (userInputElement as HTMLInputElement).value = 'Hi there!';
}
```
- we can check in runtime as well, like above (not in the HTML code with !, <> or as)

#### Index properties

- a feature that allows us to create objects which are more flexible regarding the props they might hold
- e.g. validations on input fields
```
interface ErrorContainer {
  [prop: string]: string;
}
```
- I want an object that have a prop which is a string, and its values is a string
- We can make an object 
```
const errorBag: ErrorContainer = {
  email: 'Not a valid email'; // we can assign only string type value (prop name)
}
```
- we can use number type prop, bc it can be converted to string
- but the opposite not [prop: number]: string;
- because the string is not convertable to number

- this errorBag gives us this extra flexibility that we don't know in advance which prop names we want to use and how many props we need

### Function overloads
- a feature that allows us to define multiple function signatures 
- we can have multiple possible ways of calling a function with different parameters for example, to then do something inside of that function
- functions with the same name as our original function
```
function add(a: number, n: number): number;
function add(a: string, b: string): string;
function add(a: Combinable, b: Combinable) {}
```
- overloads: potential return types, how can we call the function (with different param types, different output types)

- it is useful when TS not be able to correctly infer the return type on its own

### Optional chaining
- e.g. fetching user data from db
- maybe not all data is available, which we want to work with
```
console.log(fetchedUserData?.job?.title);
```
- if something is undefined before the ?, it doesn't continue

### Nullish coalescing
- conditional display alternative
- ?? operator
- if the value before that is NULL or UNDEFINED (not falsy), use the fallback (second value)
- if falsy, it prints the falsy value

QUIZ
- What's a "Type Guard"?
- - A code pattern where you check for a certain type before you try to do something with it at runtime
- Which of the following type guards would ensure that you get NO runtime error?
```
function size(input: string | number) {
  if (typeof input === 'string') {
    return input.length;
  }
  return input;
}
```
- In which cases is type casting helpful?
- - You want to inform TS that a certain value is of a specific type