Function.prototype.inherits = function (superClass) {
      const Surrogate = function () {};
      Surrogate.prototype = superClass.prototype;
      this.prototype = new Surrogate();
      this.prototype.constructor = this;
};

Function.prototype.inherits = function (superClass) {
      this.prototype = Object.create(superClass.prototype);
      this.prototype.constructor = this;
}

// function Animal(name) {
//       this.name = name;
// }

// Animal.prototype.eat = function () {
//       console.log(this.name + 'eating');
// }

// function Cat(name) {
//       this.name = name;
// }
// Cat.inherits(Animal);

// Cat.prototype.meow = function () {
//       console.log('meow');
// }
// function Dog(name) {
//       this.name = name;
// }
// Dog.inherits(Animal);
// Dog.prototype.bark = function () {
//       console.log('bark');
// }





