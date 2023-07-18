"use strict";
// function add(n1: number, n2: number) {
//     return n1 + n2;
// }
let combineValues;
combineValues = add;
console.log(combineValues(8, 8));
function addAndHandle(n1, n2, cb) {
    const result = n1 + n2;
    cb(result);
}
addAndHandle(20, 10, (result) => {
    console.log(result);
});
