// we have a type Admin - which is an object type

type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;  // it is a supported type by TS
}

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

// combination of these two types from above - has a name, a startDate, and privileges

type ElevatedEmployee = Admin & Employee;

function add(a: Combinable, b: Combinable) {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }
  return a + b;
}

type UnknownEmployee = Employee | Admin;

// instanceof

class Car {
  drive() {
    console.log('Driving');
  }
}

class Truck {
  drive() {
    console.log('Driving');
  }
  loadCargo(amount: number) {
    console.log('Loading cargo ' + amount);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();  // both of them knows this method
  // vehicle.loadCargo(); error - only the Truck has this
}
