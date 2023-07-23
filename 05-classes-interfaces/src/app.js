var user1;
user1 = {
    name: 'Barbie',
    age: 20,
    greeting: function (text) {
        console.log("".concat(text, " ").concat(this.name));
    },
};
