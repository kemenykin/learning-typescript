interface AddFn {
    (a: number, b: number): number;     // like anonymus fn
}

let add: AddFn;

add = (n1: number, n2: number) => n1 + n2;

interface Greetable {
    name: string;

    greeting(text: string): void;
}

let user1: Greetable;

user1 = {
    name: 'Barbie',
    greeting(text: string) {
        console.log(`${text} ${this.name}`);
    },
}

console.log(add(3, 4));