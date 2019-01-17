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
    function displayName() { // displayName() is the inner function, a closure
      console.log(name);  // displayName() uses variable declared in the parent function 
    }
    return displayName;
 }
  
 let myFunc = init();
 myFunc(); // "Mozilla"

 init()(); // get the same result as above 


// Retrieved from https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/object-oriented-programming/use-closure-to-protect-properties-within-an-object-from-being-modified-externally/

// Retrieved from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures


