function add(n1: number, n2: number) {
    return n1 + n2;
}

function printResult(num: number) {
    console.log('Result' + num);
}

let combineValues: (a: number, b: number) => number;
combineValues = add;

console.log(combineValues(8, 8));

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
    const result = n1 + n2;
    cb(result);
}

addAndHandle(20, 10, (result) => {
    console.log(result);
})
