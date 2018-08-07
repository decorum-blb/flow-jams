---

# YOU DID IT!

For reference, here is the solution we came up with:
`src/literals.js`
```js
// @flow
function getValueOf(coin: "penny" | "nickel" | "dime" | "quarter"): number {
    switch (coin) {
        case "penny":
            return 1;
        case "nickel":
            return 5;
        case "dime":
            return 10;
        case "quarter":
            return 25;
        default:
            return 0;
    }
}

console.log(getValueOf("penny"));
console.log(getValueOf("nickel"));
console.log(getValueOf("dime"));
console.log(getValueOf("quarter"));
```

Congratulations! 

You've learned about Literal types in Flow.

In the next challenge we're going to learn about Variables in Flow.

Run `go-with-the-flow` in the console to choose the next challenge.
