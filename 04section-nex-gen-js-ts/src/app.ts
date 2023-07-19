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
