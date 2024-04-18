//Custom types and type alias
function combine(input1, input2, result) {
    var res;
    if (typeof input1 === "number" && typeof input2 === "number" || result === "as-number") {
        res = +input1 + +input2;
    }
    else {
        res = input1.toString() + input2.toString();
    }
    return res;
}
function greet(user) {
    console.log('Hi, I am ' + user.name);
}
function isOlder(user, checkAge) {
    return checkAge > user.age;
}
greet({ name: "Berk", age: 25 });
