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