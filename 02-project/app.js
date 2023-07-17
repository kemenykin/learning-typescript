function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log('Result' + num);
}
var combineValues;
combineValues = add;
console.log(combineValues(8, 8));
function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
addAndHandle(20, 10, function (result) {
    console.log(result);
});
