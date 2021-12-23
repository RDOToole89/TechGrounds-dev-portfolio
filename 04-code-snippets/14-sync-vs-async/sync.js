// Difference between Asynchronous and Synchronous methods:

// Synchrounous Methods:
// 1. Synchronous functions are called blocking functions because they BLOCK
// the execution of a program
// 2. It literally blocks the execution of the program until the file operation
// has finished processing.
// 3. These function take File Descriptors as the last argument.
// 4. Examples in Node: fs.readFileSync(), fs.appendFileSync(), fs.writeFileSync() etc.

// Asynchronous methods
// 1. Asynchronous functions are called non-blocking functions.
// 2. It does not block the execution of a a program.
// 3. These function take a callback function as the last argument.
// 4. Examples in Node: fs.writeFile(), fs.stat() etc.
