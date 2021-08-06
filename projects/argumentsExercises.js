// function sum () {
//     let total = 0

//     for (let i = 0; i < arguments.length; i++) {
//         total += arguments[i]
//     }
//     return total
// }

// console.log(sum(1, 2, 3, 4));


// function sum (...nums) {
//     let total = 0
//     for (let i = 0; i < nums.length; i++) {
//         total += nums[i]
//     };
//     return total
// }

// console.log(sum(1, 2, 3, 4, 5));

Function.prototype.myBind = function (context) {
    let that = this;
    let args = arguments;
    return function () {
        return that.apply(context, args);
    };
};

Function.prototype.myBind2 = function (context, ...args) {
    let that = this;
    let arrrrgs = args

    return function () {
        return that.apply(context, arrrrgs)
    };
};



class Cat {
    constructor(name) {
      this.name = name;
    }
  
    says(sound, person) {
      console.log(`${this.name} says ${sound} to ${person}!`);
      return true;
    }
  }
  
  class Dog {
    constructor(name) {
      this.name = name;
    }
  }
  
  const markov = new Cat("Markov");
  const pavlov = new Dog("Pavlov");
  
  markov.says("meow", "Ned");
  // Markov says meow to Ned!
  // true
  
  // bind time args are "meow" and "Kush", no call time args
  markov.says.myBind(pavlov, "meow", "Kush")();
  // Pavlov says meow to Kush!
  // true
  
  // no bind time args (other than context), call time args are "meow" and "a tree"
  markov.says.myBind(pavlov)("meow", "a tree");
  // Pavlov says meow to a tree!
  // true
  
  // bind time arg is "meow", call time arg is "Markov"
  markov.says.myBind2(pavlov, "meow")("Markov");
  // Pavlov says meow to Markov!
  // true
  
  // no bind time args (other than context), call time args are "meow" and "me"
  const notMarkovSays = markov.says.myBind(pavlov);
  notMarkovSays("meow", "me");