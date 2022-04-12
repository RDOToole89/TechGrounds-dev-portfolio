// JavaScript Proxies

// The Proxy object enables you to create a proxy for another object, which can intercept and redefine fundamental operations for that object.

const target = {
  messageOne: 'hello',
  messageTwo: 'everyone',
};

// The Proxy object allows you to create an object that can be used in place of the original object, but which may redefine fundamental Object operations like getting, setting, and defining properties. Proxy objects are commonly used to log property accesses, validate, format, or sanitize inputs, and so on.

// You create a Proxy with two parameters:
// target: the original object which you want to proxy
// handler: an object that defines which operations will be intercepted and how to redefine intercepted operations.

const handlerOne = {};

const proxyOne = new Proxy(target, handlerOne);

console.log(proxyOne.messageOne);
console.log(proxyOne.messageTwo);

// To customize the proxy, we define functions on the handler object:

const handlerTwo = {
  get(target, prop, receiver) {
    return 'world';
  },
};

const proxyTwo = new Proxy(target, handlerTwo);

console.log(proxyTwo.messageOne);
