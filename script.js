// Base Person class
class Person {
  constructor(name, age) {
    this._name = name;
    this._age = age;
  }

  // getter for name
  get name() {
    return this._name;
  }

  // optional setter for name (not strictly needed by tests)
  set name(newName) {
    this._name = newName;
  }

  // getter for age
  get age() {
    return this._age;
  }

  // setter for age
  set age(newAge) {
    this._age = newAge;
  }
}

// Student class extending Person
class Student extends Person {
  study() {
    console.log(${this.name} is studying);
  }
}

// Teacher class extending Person
class Teacher extends Person {
  teach() {
    console.log(${this.name} is teaching);
  }
}

// Make classes available on window for Cypress
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
