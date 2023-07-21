## What are classes?
### `OOP`
- work with real-life entities in your code
- objects are resembling real-life objects as far as possible
#### e.g. online shop: 
- ProductList object, which has everything we need to manage a product list (method to add products, list), renders a list of products which were fetched from a server (db)
-> so this object holds all the rendering and fetching & management logic
- Product object: responsible for managing a single product, renders details about a product and allows addition to cart, maybe allow us to add it to cart -> object holds rendering + cart-adding logic

- these 2 objects are would kind of related

- ShoppingCart: renders cart products and total and allows user to order them, object holds rendering + ordering (server communication) logic

- split our app into logical pieces, to make sense to us as humans

### Classes & instances 
- when we get these objects and when following this object-oriented approach, we consider split our app into such objects which manage parts of our logic
- OBJECTS are the concrete things we work with in our code: data structures we use to store data, methods to execute methods on
- `CLASSES are "blueprints" for (JS) objects`: classes allow us to define how objects should look like, which data they should hold, which methods they should have =>
- so we can easily build objects based on these classes: we can call this instances of the classes (= based on classes)
- so an object then is an instance of a class, so we can quickly replicate multiple objects with the same structure, same methods based on the same classes
- so classes help us define how objects should look like, which properties and methods they have and so on
- classes exists to speed up the creation of objects - it's simply an alternative to using the object literal notation
- classes make creation of multiple similar objects much easier
- same methods, properties but the values are different
- e.g. person object, name, age property, but the values are different

## Creating a first class
- theoretically: we could use objects to manage the data for the different departments - department objects
- to simplify this process, we create a class Department
- uppercase letter!
```
class Department = {
    name: string;       // this is a field of a class

    constructor() {}
}
```
- the field is not a key-value pair, this just defines the name of a key you will have in the object, which you will create based on the class & define the value type that key will hold in the end
- (you can also set an initial value here with the = 'DEFAULT' - but you don't need to do that)
- functions in objects are simply called methods which is the `constructor` method
- this is esentially a function tied to this class & tied to any object you create based on the class which is executed when the object is being created
- this allows you to basically do some initialization work for the object you're building
- we have an argument (type string) and we would store it as a value in the name field:
```
class Department = {
    name: string;       // this is a field of a class

    constructor(n: string) {
        this.name = n;
    }
}
```
- it sets the value of the name field (property) - so of the name prop to the value you're getting on n - when a department object is created

### Creating an object
- outside of the class, `new` keyword 
```
new Department();
```
- but the constructor is called at this point of time when you execute this class like this with `new` keyword
- we have to pass argument
```
const accounting = new Department('Accounting');
```
- this will create a new JS object based on this blueprint (class Department)
- we can store it in a constant
- it is a regular JS object (with Department type)

## Compiling to JS
- we can choose which way the js compiled (es5, es6)
- different syntax, different browser support

## Constructor functions & "this" keyword
- constructor method is a utility function, which is called when you do instantiate the class
- we can add more methods (functions) to our Department class
```
describe() { // define the logic of your method

console.log('Department: ' + this.name);

}
```
- `this` typically refers back to the concrete instance of this class that was created
- with the dot (.) notation we can access all the props and methods of this instance
- the `this` keyword when this (describe method) executes, will refer to this concrete accounting object, that was based in this class
- `this` keyword can be tricky

``This parameter``
- it is a special instruction understood by TS
- it's a hint regarding what this should be referred to
```
describe(this: Department)  // class type: Department
    {
    console.log('Department: ' + this.name);
}
```
- when it is executes, it should always refer to an instance that's based on the department class

### "private" and "public" access modifiers
- new property of our class:
```
...
name: string;
employees: string[] = [];   // string[] type, initial value []
...
```
- we can push employee to the employees array - by directly accessing the employees property (like the name prop as well)
- one way of using your class: one uniform way of doing this
- we don't want to be accessible like this from outside of the class
- we can turn `employees` into a private property, a private field by adding a `private` keyword (modifier)
- FYI: besides props, you can also mark methods as "private"
=> employees is now a prop which is only accessible from inside the class, from inside the created object - with the `this` keyword!- so if we want to add more employees, we have to use addEmployee method (maybe with some validation process), and not simply with accounting.employees[2] = "Anna"
- it will throw an error
- we also have `public` next to `private` - public is default, we don't need to add 
- public props are accessible from outside
- JS doesn't know public and private props - TS introduces this
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Public_class_fields
- You ensure that a "private" property is only accessible from inside a class (e.g. from inside a class method).

## Shorthand initialization
- double initialization (field definition & constructor definition as well):
```
class Department {
    private name: string;
    private id: string; 
    private employees: string[] = [];

    constructor(n: string, id: string) {
        this.name = n;
        this.id = id;
    }
}
```
- we can get rid of field definition, and the constructor's this.id, this.name definition =>
- add `access modifier` in front of the parameters:
```
class Department {
    private employees: string[] = [];

    constructor(public name: string, private id: string) {

    }
}
``` 
- define easily which arguments the constructor takes, and then for every argument which has such an access modifier in front of it
- in the describe method's body:
```
describe(this: Department) {
    console.log(`Department ${this.id}: ${this.name}`);
}
```

### Readonly modifier
- fields that are not public or private, but they also shouldn't change after their initialization
```
constructor(public name: string, private readonly id: string) {
    }
```
- we can write it `readonly` to the fields before the constructor, but it is shorter this way
- it only exists in TS

We can shorten this code:
```
class Product {
  title: string;
  price: number;
  private isListed: boolean;
 
  constructor(name: string, pr: number) {
    this.title = name;
    this.price = pr;
    this.isListed = true;
  }
}
```
Like this:
```
class Product {
    private isListed: boolean;

    constructor(public title: string, public price: number) {
        this.isListed = true;
    }
}
```

### Inheritance
- we can implement specialized departments from the Department class
- important: you can only inherit from one class, can't inherit from multiple classes
- the new class (ITDepartment) inherits, automatically gets everything the base class, Department has - including its constructor
- as long as we don't add a dedicated constructor for this inherited class
```
class ITDepartment extends Department {

}

const accounting = new ITDepartment('Accounting', 'mo45');
```
- we can add our own constructor though
- whenever we add our own constructor, in a class that inherits from another class, you have to add `super` in the inheriting class and we have executing it like a function:
```
class ITDepartment extends Department {
    constructor(id: string) {
        super()
    }
}
```
- `super` calls the constructor of the base class (Department's constructor in this case)
- it takes the arguments of the parent class constructor (id, name)
- we have to call super() first in your constructor before we do anything with the `this` keyword - if you would add your special props, you can do that after the super()
```
class ITDepartment extends Department {
    admins: string[];
    constructor( id: string, admins: string[]) {
        super(id, 'IT');
        this.admins = admins;
    }
}
```
- another special Department: AccountingDepartment

### Overriding Props & the "protected" modifier
- we can also overide methods or props of our class
- we can add a new method with the same name, but different logic
- BUT if we have a private property, we cannot work with that - they are accessible in the class where it defined, not classes that inherit from that class
- if we want to grant that access, we can switch the basic propetry from `private` to `protected`
- so it is not just available in this class, but also in any class that extends this class
So:
- `you can override methods of your base class` and you can `add your own implementation`
- `you also have control access to properties with` protected

### Getters & setters
- lastReport is private property, we can access it from inside that method addReport(), but not from outside
- we can add a getter to still make it accessible
- `getter` is basically a property where you execute a function or method when you retrieve a value and that allows you (as a developer) to add more complex logic
- `get` keyword + any name of your choice (closely related to the prop you're trying to control the access to) 
- it is a method: it has return to something:
```
class AccountingDepartment extends Department {
    private lastReport: string;
    
    get mostRecentReport() {
        return this.lastReport;
    }

    constructor(id: string, private reports: string[]) {
        super(id, 'Accounting');
        this.lastReport = reports[0];
    }

    addReports(text: string) {
        this.reports.push(text);
        this.lastReport = text;
    }

    printReports() {
        console.log(this.reports);
    }
}
```
- we encapsulate the private lastReport field, with the getter method it is publicly accessible now
- we can call the method like this:
```
console.log(accounting.mostRecentReport);   // no parenthesis here!
```
- no () - don't execute this as a method, just access it like a normal property
```
get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error('No report found.');
    }
```
- with more complex logic above - we can access this method and executes it
- you can also add a `setter`:
- `set` keyword + any name of your choice (typically a name related to the prop)
- we can use the same name as the getter method
- but this needs to take an argument
```
set mostRecentReport(value: string) {
    // you can run any logic you want to store this value
}
```
- setter simply can be an alternative for the addReport method:
```
set mostRecentReport(value: string) {
    if (!value) {
        throw new Error('Please pass in a valid value!')
    }
    this.addReport(value);
}
```
- we can call it like: 
```
accounting.mostRecentReport = 
```
- this will trigger this setter method, bc we don't execute it as a method, but simply access it like a prop
- encapsulating logic and add extra logic that should run when you try to read a prop

### Static properties & methods
- they allow you to add props & methods to classes which are not accessed on an instance of the class
- so where you don't need to call `new Classname` first, but which you access directly on the class
- this is often used for utility functions
- e.g. Math constructor function
- it's globally available in JS, where you can acces PI as a const value, or pow()
- these are methods & props which you don't access on the instance of Math, you don't have to call `new Math` first
- Math acts more like a namespace, as a grouping mechanism here
- so we can make a static method which we can access without instantiating this class:
```
static createEmployee(name: string) {   // static keyword
    return { name : name }              // return an object
}
```
- then we can add employee:
```
const employee1 = Department.createEmployee('Kinga');
console.log(emplyee1);
```
- we call the static method directly on the class (Department)
- without the `new` keyword
- if we would like to add a static property as a new field:
```
static fiscalYear = 2020;
```
- we don't need to instatiating it, we can access it with console.log(Department.fiscalYear);
`Important:`
- when you add static methods or props to your class, you can't access them from inside your non-static parts
- we can't access e.g. after the constructor because the constructor, and basically anything in there, all the methods as well which are not marked with static will NOT be able to access static props =>
- because `.this` refers to the instance created based on the class, while the static prop is not available on instance
- because the whole idea behind the static properties & static methods is that they're detached from instances 
- we can't access them with `this` keyword!
- if you would like to use the static prop or method inside the class, you would have to use the class name here to access it

### Abstract classes