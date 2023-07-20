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
- CLASSES are "blueprints" for objects: classes allow us to define how objects should look like, which data they should hold, which methods they should have =>
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