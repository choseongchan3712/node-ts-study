class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  great():string {
    return `Hello, my name is ${this.name} and i am ${this.age} years old.`;
  }
}

const person = new Person("Alice", 30);
console.log(person.great()); //Hello, my name is Alice and i am 30 years old.