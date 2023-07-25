var add;
add = function (n1, n2) { return n1 + n2; };
var user1;
user1 = {
    name: 'Barbie',
    greeting: function (text) {
        console.log("".concat(text, " ").concat(this.name));
    },
};
console.log(add(3, 4));
