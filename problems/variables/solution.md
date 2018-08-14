---

# YOU DID IT!

For reference, here is the solution we came up with:
`src/variables.js`
```js
// @flow
let foo = 42;

if (Math.random()) {
    foo = true;
}

if (Math.random()) {
    foo = "hello";
}

let isOneOf: number | boolean | string = foo; // Works!

console.log(isOneOf);
```

Congratulations! 

You've learned about Variables in Flow.

In the next challenge we're going to learn about Objects in Flow.

Run `flow-jams` in the console to choose the next challenge.
