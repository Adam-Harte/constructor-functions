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

// methods in classes vs constructor functions
class Book {
  constructor() {
    this.title = 'Way of Kings';
    this.author = 'Sanderson';
    this.releaseDate = 2014;
  }

  logBook() {
    console.log(this.title);
    console.log(this.author);
    console.log(this.releaseDate);
  }
}

const b1 = new Book();
const b2 = new Book();

console.log(b1.__proto__ === b2.__proto__);

function Movie() {
  this.title = 'Spiderman';
  this.releaseDate = 2007;

  this.logTitle = function() {
    console.log(thus.title);
  };
}

Movie.prototype.logRelease = function() {
  console.log(this.releaseDate);
};

const newMovie = new Movie();

console.log(newMovie.__proto__);
