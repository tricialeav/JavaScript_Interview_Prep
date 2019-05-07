/* 

https://www.youtube.com/watch?v=TlB_eWDSMt4

Node is a JavaScript Runtime Environment (not a framework or language) that uses the Google V8 engine under the hood.

Node is asynchronous (non-blocking). Single thread is used to handle multiple requests.

When a request returns a result, the result is placed in the event queue. Node continuoously monitors in the background, and will process when available. 

This is why Node is ideal for I/O (input/output) apps and are highly scalable. 

Node should not be used for CPU-intensive apps. 

-------- Modules: -------- 

All functions and objects are accessible via the global object (versus window in browser). 

Variables are not added to the global object, so you cannot access them using the 'global.' prefix. This is due to Node's modular system. 

Every file in a Node application is considered a Module, meaning that they are only available in that module's scope. To use varaibles outside of their scope, the variable must be exported/imported.

Node wraps all files inside of an IIFE function to provide modularization (it doesn't execute the code directly). This is called the Module Wrapper Function.

-------- Events --------

Signal that indicates that something has happened in the application.

-------- HTTP --------

Can create a server that listens to events sent via http. This will often not be used in production code as much of the API setup will be done with Express.

*/