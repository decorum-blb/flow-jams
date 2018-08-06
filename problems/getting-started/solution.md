---

# YOU DID IT!

For reference, here is the solution we came up with:
`src/calculator.js`
```json
// @flow
const first = process.argv[2];
const second = process.argv[3];

function addNumbers(x: number, y: number): number {
    return x + y;
}

console.log(addNumbers(parseInt(first, 10), parseInt(second, 10)));
```

Right now, your project structure should look like this:
```
.
├── node_modules/
├── lib/
│   ├── calculator.js
├── src/
│   ├── calculator.js
├── .babelrc
├── .flowconfig
├── package-lock.json
├── package.json      
```

Congratulations! 

You've gotten your first taste for Type Systems, and how Flow helps us to test our code faster with type assertions.

In the next challenge we're going to learn some of the Primitive Types that are provided by JavaScript.

Run `go-with-the-flow` in the console to choose the next challenge.
