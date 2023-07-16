// const person: {
//     name: string;
//     age: number;
// } = {
//     const person = {
//     name: 'Kinga',
//     age: 26,
//     hobbies: ['sports', 'cooking'],
//     role: [2, 'author']
// }

enum Role { ADMIN, READ_ONLY, AUTHOR};

const person = {
    name: 'Kinga',
    age: 26,
    hobbies: ['sports', 'cooking'],
    role: Role.ADMIN
};

console.log(person.role);