## CLASSES - what are classes?
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
- you can force all classes based on our basic class to add and override a method
- you can do so by adding the `abstract` keyword here
- error: "Abstract methods can only appear within an abstract class."
- if you have 1 method or more with abstract in front of the method, you have to add `abstract` in front of class Department as well
```
abstract class Department {
    ...
}
```
- we can rewrite the method as well, add a `void` returning type:
```
abstract describe(this: Department): void;
```
- error in the instantiated class (ITDepartment):
- we don't offer the describe methods here, it is abstract like the Department class
- this abstract method has to be implemented by any class based on this Department class
- abstract can be useful if you want to enforce that all classes based on some other class share some common method or property
- abstract classes can't instantiated with themselves (nem példányosíthatók)
- ha van egy abstract method, az csak abstract osztályban lehet, de egy abstract osztálynak nem csak abstract methodjai lehetnek

- az abstract osztály gyerekosztályának muszáj implementálnia az abstract osztály abstract methodját
- kikötöm, hogy a belőlem (Department) öröklődő osztálynak kötelessége felülírnia az abstract methodjaimat annak érdekében, hogy egységes működési felület biztosítsak minden gyerekosztályomnak

- interface-nek hívjuk azt az abstract osztályt, amelynek minden methodja abstract method és nincs fieldje
- egy osztály bármennyi interface-t implementálhat
- `static method:` a method you call directly on a class, not on an object created based on it
- `inheritance:` allows you to share some common functionality and yet create more specialized blueprints
- `abstract class`: a class that can't be instantiated but has to be extended

### Singletons & Private Constructors
#### Private constructors
- there is a pattern in OOP: Singleton pattern
- it ensures that you always only have exactly one instance of a certain class
- this can be useful where you somehow can't use static methods or props or you don't want to BUT you want to make sure that you can't create multiple objects based on a class
- but that you always have exactly one object based on a class
- e.g. if we have only one accounting department in our company, we can use it (but if we have more IT Departments, that is already another case)
- set constructor private, so it ensures that we can't call new on this
- it's only accessible from inside the class
- a static method can be called on the class itself so you don't have instantiate it for that
- after the private constructor, we add a static method:
```
static getInstance () {     // name is totally up to you
    // it will check if we already have an instance of this class, and if not, return a new one 
}
```
- plus a new private static property to the field:
```
private static instance: AccountingDepartment;
```
- so we have a static method which is accessible on the class itself, but only from inside the class and the value we store in there will be of type AccountingDepartment, so of the class itself
- now we can use this instance prop here in getInstance
```
getInstance() {
    if (this.instance) {   // or AccountingDepartment.instance
    return this.instance;
    }
    this.instance = new AccountingDepartment();
    return this.instance;
}
```
- the keyword `this` will refer the class itself and we can access all other static properties on that
- `.this` inside of a static method works, it gives us access to the class itself
- unlike if this would be a non-static method (getInstance) it woudl gives us access to the instance with which we're trying to work 
- we are inside of this method, so we can access the private constructor, and pass in our id and string[] as arguments
- so we either returning the one instance we might already have or if we don't have it yet we create a new one
- this part of the code only can run once:
```
    this.instance = new AccountingDepartment();
    return this.instance;
```
- because once we have an instance we make it into `if` block and returning the existing instance
- if we want to work with the `AccountingDepartment`, instead of creating with instantiating, we could call the `getInstance` method
```
const accounting = AccountingDepartment.getInstance();
```
- and this returns with a new instance of the AccountingDepartment
- if I do it again, I will get the same instance, the same object (because of the conditions, with this singleton pattern - `private keyword in front of the constructor`)
- Singleton can be useful, but you don't need to use all the time
#### Summary
- `singleton classes`: a singleton class is configured such that you don't create it with "new" but by calling a method which then ensures that only one instance of the class exists at any given time
- so you only ever have one instance of a singleton class


### Summarize
- classes, properties, access modifiers, methods, static methods & props, abstract methods, abstract classes, inheritance, Singleton pattern, private constructors

## INTERFACES
### What is an interface?
- describes the structure of an object
- we can use it to describe how an object should look like
```
interface Person {
    name: string;
    age number;
}
```
- unlike the class, we will not use this as a blueprint, just as a custom type
- we add props or field definitions and their types of the values that'll be stored in there
- what we `don't have` here are the concrete values
- just like in classes btw - there we also separate properties via semi-colons
- an interface cannot have an initializer
- we can just define the structure, not the concrete values
- we can add method too (greet), not just as with props, we don't add the actual method, but just the structure the description: 
##### name(anyArgument: string): return type
```
interface Person {
    name: string;
    age number;

    greet(phrase: string): void;
}
```
- we can use interfaces e.g. to type check an object 
- if we have a variable, but we don't initialize immediately, we can do it like this:
```
let user1 = Person;
```
- we can use our interface as a type
- when I assign a value to user1, it has to be an object (bc interfaces are used to define objects)
- and it has to be the same structure as the Person interface!
- when we assign the object to our variable, we can define the values for the properties, separated by comma (not semicolon) 

### Interfaces vs. Types
- when you define something as an interface, it's super clear that you want to define the structure of an object with that
- when defining object types, you see custom types
- type is more flexible, interface is cleaner
- you can do with interfaces, but 
you would only be able to do with custom type is `you can implement an interface in a class` 
- an interface can be used as a contract a class can implement and a class then has to adhere to:
- e.g. we have an `interface Greetable`
- -   it says any object that should be treated as Greetable has to be object with a name and with a greet method
```
interface Greetable {
    name: string;

    greeting(text: string): void;
}
```
- user1 holds a Greetable object, it will throw an error because we have more than a name and a greet method (age is assigned in the field too)
- but we could you this interface to share it amongst possibly multiple classes we have to ensure that every class that adhere to this interface has to have a name property and has to have a greet method
=> 

### Using interfaces with classes
- create a new class (Person)  
- this class should basically adhere to this interface (from Greetable), it should implement this interface
- it should follow that contract setup by this interface!
- `implements` keyword after the class name, and the name of our interface 
```
class Person implements Greetable {}
```
- you can implement more than one interface, that is the difference compared to inheritance: you can inherit only from one class, you can implement multiple interfaces by separating them with a comma
- we got an error: "our class incorrectlx implements the interface", if we doesn't have the name property and the greet method
- we have set them in the Person class:
```
class Person implements Greetable {
    name: string;

    constructor(n: string) {
        this.name = n;
    }

    greet() {
        console.log(`${text} ${this.name}`);
    }
}
```
- if we have more fields in our class or more methods, but we're forced to implement this method correctly to have this name property bc we're implementing this Greetable interface
- interfaces are often used to share functionality amongst different classes not regarding their concrete implementation
- you can't have implementation or values inside of the interfaces
- but regarding the structure and the features a class should have
- it's a bit like working with abstract classes: difference is that an interface has no implementation details at all, whereas abstract classes can be a mixture of you have to overwrite these parts (abstract describe (this: Department): void) and have a concrete implementation parts (addEmployee(employee: string) {} and printEmployeeInformation method) 
- user1 can be created by using new Person
- so we create an object that is based on a class which implements an interface
- you can use an interface as a type on some constant or variable which will then actually store another class of another type which in turn is based on the interface type because it implements it

### Why interfaces?
- it is useful, when we:
- know we want to have a certain set of functionalities (e.g. a greet method) and we want to ensure that a class has such a greet method and another class has it maybe as well 
- then we can implement an interface which forces the existence of this method
- then we can easily share functionalities amongst classes and every class has to add its own implementation
- this can be useful if we don'T have other parts of our code which rely on that structure 
- we don'T care what is in the variable user1, but it has to be a greet method, we know that it has to be in there bc whatever we store in user1 - has to be Greetable

### Readonly interface properties
- inside of the interface you can also add the readonly modifier - to make it clear that this property in whatever obeóject you built based on this interface must only be set once so it can't be changed after the object has been initialized
- cannot add public or private modifier
- we don't add readonly modifier in the class, only in the interface
- if I try to reassign the value of the user1.name - it will throw me an error
- interfaces have effect on the class, bc the class what implement an interface knows that implements readable, automatically assumes the prop name (what it is readonly)

### Extending interfaces
- if we have 2 interfaces and we want to all the properties
- this forms a new interface which is in the end the interface that forces us to have a greet method, but not just that, but not just that
- it also forces us to have everything the Name interface defines - in this case, a name property
```
interface Named {
    readonly name: string;
}

interface Greetable extends Name {
    greet(text: string): void;
}
```
```
class Person implements Greetable { 
    name: string;   // ha ezt kitörlöm, hibát fog dobni
    age = 30;
    ...
}
```
- mert a Person class a Greetable-t implementálja, ami pedig kibővül a Name-mel, ahol kell a name prop is
- incorrect implementációja a Greetable-nek
- so we can combine interfaces
- ott hasznos, hogyha vannak objektumaink, ahol csak name propot akarunk, de más objektumoknál akarunk name-et és greet methodot is
- some objects or some classes can just implement Named and others can implement Greetable and forced to have greet an a name
- you can extend more than one
- you can merge multiple interfaces into one single interface
#### Important
- you can't inherit from multiple classes, for interfaces that is different
- you can indeed inherit from multiple interfaces, because in the end, they're all just getting merged together 

### Interfaces as function types
- interfaces can also be used to define the structure of a function
- so basically as a replacement for the function types 
- refresher: we can define the type of a function e.g. with a custom type with the `type` keyword
```
type AddFn = (a: number, b: number) => number;
```
- it should return a number and take 2 args
- now we can create a new function here, which is a type AddFn and we don't initialize it but assign our function later:
```
let add: AddFn;

add = (n1: number, n2: number) => {
    return n1 + n2;
};
```
- you can also use an interface as an alternative to this custom type 
- interfaces are define the structure of an object, but in the end, functions are just objects => therefore this is a little `exeption`
- `you can create function types with interfaces:`
```
interface AddFn {
    (a: number, b: number): number;
}
```
- in the end, like you would define a method (like greet method)
- but we don't add a method name
- we have an anonymus function in the AddFn interface
- TS understands that you want to use this interface as a function type
```
let add: AddFn;

add = (n1: number, n2: number) => n1 + n2;
```
- so if I would try to accept a string as one of the args of the function, I would get an error
- custom type usage is more common, it's a bit shorter 

### Optional parameters & props
- back to interfaces for objects
- you can also define optional properties in interfaces and also in classes 
- I create a prop `outputName`, but I don't want to force every class based on Named to have this prop interface, it should be optional (whether you want to have it or not)
- you can specify an optional property by adding a question mark after the prop name
- this tells TS that this prop is might exists in classes that implement this interface

```
interface Named {
    readonly name: string;
    outputName?: string;
}
```
- you can also mark methods as `optional! => myMethod?() {...}`
- we can set a property optional in the interface and also in the class
it can be useful e.g. when we examine conditionals:
```
class Person implements Greetable {
    name?: string;
    age = 30;
    constructor(n: string) {
        // make sure that this is initialized, otherwise you get an error
        this.name = n;
        if (n) {
            this.n = n;
        }
    }
}
```
- so when we construct a new object we could do this without passing in a name
- we can add default value in the constructor fn, or add `?` to the parameter's name (to be optional), if the default value will be undefined
- you can also have optional parameters in functions and therefore in methods INCLUDING the constructor method
- if the default value is not set is therefore undefined or you can default it like this (but this is optional too):
```
constructor(n: string = '') {}
```
- the default value will be assumed if you don't pass in a more specific value

### Compiling interfaces to JS
