---

# YOU DID IT!

For reference, here is the solution we came up with:
`src/primitives.js`
```js
// @flow
const stringParam = process.argv[2];

function convertStringToNumber(param: string): number {
    return parseInt(param, 10);
}

function isParam42(param: number): boolean {
    return (param === 42);
}

console.log(
    isParam42(
        convertStringToNumber(stringParam)
    )
);
```

Congratulations! 

You've gotten your first taste for Type Systems, and how Flow helps us to test our code faster with type assertions.

In the next challenge we're going to learn some of the Primitive Types that are provided by JavaScript.

Run `flow-jams` in the console to choose the next challenge.
