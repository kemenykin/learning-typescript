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
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
;
var person = {
    name: 'Kinga',
    age: 26,
    hobbies: ['sports', 'cooking'],
    role: Role.ADMIN
};
console.log(person.role);
