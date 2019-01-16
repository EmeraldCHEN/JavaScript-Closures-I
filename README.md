# JavaScript Closures

In JavaScript, a function always has access to the context in which it was created. This is called closure.


Global variable  VS  Local variable

- JavaScript variables can belong to the local or global scope.

- In a web page, global variables belong to the window object.

- Global variables can be used (and changed) by all scripts in the page (and in the window).

- A local variable can only be used inside the function where it is defined. It is hidden from other functions and other scripting code.

- Global variables can be made local (private) with closures.


Variable Lifetime

- Global variables live as long as your application (your window / your web page) lives.

- Local variables have short lives. They are created when the function is invoked, and deleted when the function is finished.



All functions have access to the global scope.  

In JavaScript, all functions including nested functions have access to the scope "above" them.


https://www.udemy.com/the-complete-javascript-course/learn/v4/content
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures
https://www.w3schools.com/js/js_function_closures.asp
https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/object-oriented-programming/use-closure-to-protect-properties-within-an-object-from-being-modified-externally
https://www.w3schools.com/js/js_function_closures.asp
