const hobbies = ['Sports', 'Cooking'];
const activeHobbies = ['Hiking'];

activeHobbies.push(...hobbies);


const person = {
    name: 'Kinga',
    age: 26
}

const copiedPerson = { ...person };

const add = (...numbers: number[]) => {
    return numbers.reduce((currentResult, currentValue) => { 
        return currentResult + currentValue
    }, 0)
};

const addedNumbers = add(5, 6, 7, 8, 10);

// array without destructuring

// const hobby1 = hobbies[0];
// const hobby2 = hobbies[1];

// destructured

const [hobby1, hobby2] = hobbies;