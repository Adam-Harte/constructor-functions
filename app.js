//constructor functions
function Person() {
  this.name = 'Adam';
  this.age = 27;
  this.greet = function() {
    console.log('hi!!!');
  };
}

const newPerson = new Person();
newPerson.greet();
