---

# YOU DID IT!

For reference, here is the solution we came up with:
`src/classes.js`
```js
// @flow
class ScrollView {
  x: number;
  y: number;
  items: string[];
  constructor(x: number, y: number, items: string[]) {
    this.x = x;
    this.y = y;
    this.items = items;
  }
}
```

Congratulations!

You've learned about Classes in Flow.

In the next challenge we're going to learn about Interfaces in Flow.

Run `flow-jams` in the console to choose the next challenge.
