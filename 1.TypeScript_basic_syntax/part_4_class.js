var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.great = function () {
        return "Hello, my name is ".concat(this.name, " and i am ").concat(this.age, " years old.");
    };
    return Person;
}());
var person = new Person("Alice", 30);
console.log(person.great());
