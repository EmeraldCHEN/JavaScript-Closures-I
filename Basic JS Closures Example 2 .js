function Bird(){
    // private property
    let hatchedEgg = 10; 

    /* Creating a variable within the constructor function to change the scope of that variable to be within the constructor function versus available globally. 
    This way, the property can only be accessed and changed by methods also within the constructor function.*/
    
    // publicly available method that a bird object can use
    this.getHatchedEggCount = function(){ /* a privileged method, because it has access to the private variable hatchedEgg 
                                             which is declared in the same context as getHachedEggCount   */
        return hatchedEgg;
    };
}

let ducky = new Bird();

// ducky.hatchedEgg(); -> TypeError: ducky.hatchedEgg is not a function

console.log(ducky.getHatchedEggCount()); // 10



/********  Another example    ****************************************************************************************************/

 function init() {
    let name = 'Mozilla'; // name is a local variable created by init
     
    // Nested functions have access to variables declared in their outer scope.
     
    function displayName() { // displayName() is the inner function, a closure
      console.log(name);  // displayName() uses variable declared in the parent function 
    }
    return displayName;
 }
 let myFunc = init();
 // when myFunc is invoked, the variable name remains available for use and "Mozilla" is passed to console
 myFunc(); // "Mozilla"

 init()(); // get the same result as above 


/************************  Another slightly more interesting example  ***********************************************/

function makeAdder(x){
    return function(y){
        return x * y;
    };
}
/* add5 and add10 are both closures. 
   They share the same function body definition, 
   but store different lexical environments. 
   In add5's lexical environment, x is 5, 
   while in the lexical environment for add10, x is 10      */
let add5 = makeAdder(5);
let add10 = makeAdder(10);

console.log(add5(2)); // 10
console.log(add10(2)); // 20








// Retrieved from https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/object-oriented-programming/use-closure-to-protect-properties-within-an-object-from-being-modified-externally/

// Retrieved from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures


