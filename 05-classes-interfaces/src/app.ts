interface Person {
    name: string;
    age: number;

    greeting(text: string): void;
}

let user1: Person;

user1 = {
    name: 'Barbie',
    age: 20,
    greeting(text: string) {
        console.log(`${text} ${this.name}`);
    },
}