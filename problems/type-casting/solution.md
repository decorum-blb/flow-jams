---

# YOU DID IT!

For reference, here is the solution we came up with:
`src/type-casting.js`
```js
// @flow
let name = "John";
(name: string); // Works!
(name: "John"); // Works!

let castedName = (name: string);
(castedName: string); // Works!
// $ExpectError
(castedName: "John"); // Error!
```

Congratulations!

You've learned about Type Casting in Flow.

In the next challenge we're going to learn about Generics in Flow.

Run `flow-jams` in the console to choose the next challenge.
