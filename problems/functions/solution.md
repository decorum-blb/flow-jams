---

# YOU DID IT!

For reference, here is the solution we came up with:
`src/variables.js`
```js
// @flow
const buildList = (
  listItems: string[],
  isExpanded?: boolean,
): { title: string, imageUrl: string }[] => {
  if (isExpanded) {
    // extra logic
  }
  return listItems.map(item => ({
    title: item,
    imageUrl: 'http://cats.com/image.jpg',
  }));
}
```

Congratulations!

You've learned about Functions in Flow.

In the next challenge we're going to learn about Classes in Flow.

Run `go-with-the-flow` in the console to choose the next challenge.
