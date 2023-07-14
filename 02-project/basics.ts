function add(n1: number, n2: number, showResult: boolean) {
    showResult ? console.log(n1 + n2) : n1 + n2;
}

const number1 = 10;
const number2 = 3.5;
const printResult = true;

add(number1, number2, printResult);