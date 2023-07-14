// const person: {
//     name: string;
//     age: number;
// } = {
var person = {
    name: 'Kinga',
    age: 26,
    hobbies: ['sports', 'cooking']
};
var favouriteActivities;
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
