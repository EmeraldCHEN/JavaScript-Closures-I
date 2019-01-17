# JavaScript Closures

In JavaScript, a function always has access to the context in which it was created. This is called closure.

A closure is a function having access to the parent scope, even after the parent function has closed.


Global variable  VS  Local variable

- JavaScript variables can belong to the local or global scope.

- In a web page, global variables belong to the window object.

- Global variables can be used (and changed) by all scripts in the page (and in the window).

- All functions have access to the global scope. 

- In JavaScript, all functions including nested functions have access to the scope "above" them.

- A local variable can only be used inside the function where it is defined. It is hidden from other functions and other scripting code.

- Global variables can be made local (private) with closures.


Variable Lifetime

- Global variables live as long as your application (your window / your web page) lives.

- Local variables have short lives. They are created when the function is invoked, and deleted when the function is finished.


 


https://www.udemy.com/the-complete-javascript-course/learn/v4/content



