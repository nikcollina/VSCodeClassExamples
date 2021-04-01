//can return any type
function empInfo(id, name, salary) {
    console.log("id is " + id);
    console.log("name is " + name);
    console.log("salary is " + salary);
}
//must return string
empInfo(100, "Nik", 12000);
function sayHello(name) {
    return ("Welcome " + name);
}
console.log(sayHello("Nik"));
//no return type
function add(a, b) {
    var sum = a + b;
    console.log(sum);
}
add(1, 2);
function personDetails(id, name, age) {
    console.log("id is " + id);
    console.log("name is " + name);
    console.log("age is " + age);
}
personDetails(1, "Nik", 23);
personDetails(2, "Kyle");
personDetails(3);
personDetails();
function empDetails(id, name, age) {
    if (id === void 0) { id = 123; }
    if (name === void 0) { name = "unknown"; }
    if (age === void 0) { age = 21; }
    console.log("id is " + id);
    console.log("name is " + name);
    console.log("age is " + age);
}
empDetails(1, "Nik", 23);
empDetails(2, "Kyle");
empDetails(3);
empDetails();
