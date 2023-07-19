}

const copiedPerson = { ...person }
```
- in the code above, the copiedPerson variable points the same object as person, so it technically is not a copy
- we added the key-value pairs to the new object
- so with this we created of a real copy of our object, not just the pointer that points to the object in the memory

## Rest parameters
- I want to flexible function parameters
- in the place where you expect a list of values (so not where you want to pass it, but where you want to accept it as incoming values), you can also use the ...
operator
- it will merge all incoming parameters / generally the incoming (comma separated) list of values into an array 
- but we have to be explicit: 
```
const add = (...numbers: number[]) => {
    let result = 0;
    numbers.reduce();
};
```
- reduce method is performs an operation on every value in an array, returns a result and then adds these results together
- you have to provide a function to reduce, and then a starting value which is 0
```
return numbers.reduce((currentResult, currentValue) => {
    return currentResult + currentValue;
}, 0)
```
- the function which we pass to reduce itself takes two arguments: the current result, and the current value which we're looking at - which will be each value of the array ones
- we can return the current result + current value
- so we have an add function, which takes a couple of numbers, not an array of numbers, bc of the rest parameters -> a list of numbers!
- which is then merged into an array inside of the function and which returns the number in the end
- we can use tuple type as well:
```
const add = (...numbers: number[number, number, number]) => {
    return numbers.reduce((currentResult, currentValue) => { 
        return currentResult + currentValue
    }, 0)
};
```
- it only takes exactly 3 number type arguments

## Array & object destructuring
- destructure: we pull elements out of the array/object
#### `Array destructuring`
```
const [] = hobbies;
```
- on the left side, we store them in constants/variables (with let)
```
const [hobby1, hobby2] = hobbies;
```
- this syntax does: it goes through the hobbies array, takes the first element, and stores it in a constant with this name (hobby1) and then takes the second and stores with the another name (hobby2)
- we can use spread operator in case we have more elements than two
```
const [hobby1, hobby2, ...remainingHobbies] = hobbies;
```
- and the rest of the hobbies will be stored in a new array called remainingHobbies - so they will be merged together into a new array
- destructuring does NOT change the original array
- elements are pulled out in order, because array is an ordered list
#### `Object destructuring`
```
const {} = person;
```
- on the right side, pointing the person object
- we can pull the values for these keys out and store them in constants of the same name
```
const { firstName, age } = person;
```
- in objects, the order is not always guaranteed, we don't pull elements out by position, but by keyname
- we can override the key name:
```
const { firstName: userName, age: years} = person;
```
- alias rename property  