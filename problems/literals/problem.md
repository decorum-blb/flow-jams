In addition to type definitions for the JavaScript Primitives, Flow also allows for `Literal` assertions.

For example:
```js
//@flow
function acceptsTwo(value: 2) {}

acceptsTwo(2);   // Works!
acceptsTwo(3);   // Error!
acceptsTwo("2"); // Error!
```

Flow also allows you to have multiple-type assertions on a parameter, which is particularly useful for Literals.
```js
// @flow
function getColor(name: "success" | "warning" | "danger") {
  switch (name) {
    case "success" : return "green";
    case "warning" : return "yellow";
    case "danger"  : return "red";
  }
}

getColor("success"); // Works!
getColor("danger");  // Works!
getColor("error");   // Error!
```

Let's make a change detector to explore this further!

Make a new file called `literals.js`

Create a function `getValueOf` that takes in one of four string literals:
- `"penny"`
- `"nickel"`
- `"dime"`
- `"quarter"`

This function should return the corresponding value to each denomination of change.

For validation purposes, simply log out the return value for each coin denomination:
```js
console.log(getValueOf("penny"));
// ...
```

Don't forget to transpile your code with Babel by running:
```bash
npm run build
```

To see if your code works, test your solution by running:

```bash
go-with-the-flow verify lib/literals.js
```
