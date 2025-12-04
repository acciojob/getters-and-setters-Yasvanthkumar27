// Person class
class Person {
  constructor(name, age) {
    this._name = name;
    this._age = age;
  }

  // getter & setter for name
  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = newName;
  }

  // getter & setter for age
  get age() {
    return this._age;
  }

  set age(newAge) {
    this._age = newAge;
  }
}

// Student class inheriting from Person
class Student extends Person {
  study() {
    console.log(${this.name} is studying);
  }
}

// Teacher class inheriting from Person
class Teacher extends Person {
  teach() {
    console.log(${this.name} is teaching);
  }
}
