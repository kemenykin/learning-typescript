interface Greetable {
    name: string;

    greeting(text: string): void;
}

let user1: Greetable;

user1 = {
    name: 'Barbie',
    age: 20,
    greeting(text: string) {
        console.log(`${text} ${this.name}`);
    },
}