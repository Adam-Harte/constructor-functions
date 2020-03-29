//constructor functions
function Person() {
  this.name = 'Adam';
  this.age = 27;
  this.greet = function() {
    console.log('hi!!!');
  };
}

Person.prototype = {
  logAge() {
    console.log(this.age);
  }
};

const newPerson = new Person();
newPerson.greet();

// prototypes
console.log(newPerson.__proto__);
newPerson.logAge();
