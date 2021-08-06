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
      let args = Array.from(arguments).slice(1);
      // let ctx = arguments[0]
      
      
      return function innerFunc() {
            
            return that.apply(context, args.concat(Array.from(arguments)));
    };
};



Function.prototype.myBind2 = function (context, ...args) {
     
    let that = this;
    let arrrrgs = args

      return function (...arr) {
          
            return that.apply(context, arrrrgs.concat(arr))
      };
};



// class Cat {
//     constructor(name) {
//       this.name = name;
//     }
  
//     says(sound, person) {
//       console.log(`${this.name} says ${sound} to ${person}!`);
//       return true;
//     }
//   }
  
//   class Dog {
//     constructor(name) {
//       this.name = name;
//     }
//   }
  
//   const markov = new Cat("Markov");
//   const pavlov = new Dog("Pavlov");
  
//   markov.says("meow", "Ned");
//   // Markov says meow to Ned!
//   // true
  
//   // bind time args are "meow" and "Kush", no call time args
//   markov.says.myBind2(pavlov, "meow", "Kush")();
//   // Pavlov says meow to Kush!
//   // true
  
//   // no bind time args (other than context), call time args are "meow" and "a tree"
//   markov.says.myBind2(pavlov)("meow", "a tree");
//   // Pavlov says meow to a tree!
//   // true
  
//   // bind time arg is "meow", call time arg is "Markov"
//   markov.says.myBind2(pavlov, "meow")("Markov");
//   // Pavlov says meow to Markov!
//   // true
  
//   // no bind time args (other than context), call time args are "meow" and "me"
//   const notMarkovSays = markov.says.myBind2(pavlov);
// //   notMarkovSays("meow", "me");

// function curriedSum(numArgs) {
//       const numbers = [];
//       return function _curriedSum(num) {
//             numbers.push(num);
//             if (numbers.length === numArgs) {
//                 return numbers.reduce((acc, el) => acc + el);
//             } else {
//                   return _curriedSum;
//             }
//       }; 
// }

// const sum = curriedSum(4);
// console.log(sum(5)(30)(20)(1));


// Function.prototype.curry = function (numArgs) {
//     let arr = []
//     let that = this
//     // debugger
//     return function _curried(arg) {
//         // debugger
//         arr.push(arg);
//         if ( arr.length === numArgs ) {
//             return that.apply(null, arr);
//             // debugger
//         } else {
//             return _curried;
//         }
//     }
// }

Function.prototype.curry = function (numArgs) {
    let arr = []
    let that = this
    // debugger
    return function _curried(arg) {
        // debugger
        arr.push(arg);
        if ( arr.length === numArgs ) {
            console.log(this);
            return that.call(null, ...arr);
            // debugger
        } else {
            return _curried;
        }
    }
}


function sumThree(num1, num2, num3) {
    return num1 + num2 + num3;
  }
  
  sumThree(4, 20, 6); // == 30
  
  // you'll write `Function#curry`!
  let f1 = sumThree.curry(3); // tells `f1` to wait until 3 arguments are given before running `sumThree`
  f1 = f1(4); // [Function]
  f1 = f1(20); // [Function]
  f1 = f1(6); // = 30
  
  // or more briefly:
  console.log(sumThree.curry(3)(4)(20)(6)); // == 30