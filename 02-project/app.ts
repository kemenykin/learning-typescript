// const person: {
//     name: string;
//     age: number;
// } = {
    const person = {
    name: 'Kinga',
    age: 26,
    hobbies: ['sports', 'cooking']
}

let favouriteActivities: string[];

console.log(person.name);

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}