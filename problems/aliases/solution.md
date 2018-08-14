---

# YOU DID IT!

For reference, here is the solution we came up with:
`src/variables.js`
```js
// @flow
type ConnectionHistory = {
  attempts: string[]
}

type DatabaseConnection = {
  host: string,
  port: number,
  user: string,
  password: string,
  connectionHistory: ConnectionHistory,
}
```

Congratulations!

You've learned about Aliases in Flow.

In the next challenge we're going to learn about Type Casting in Flow.

Run `flow-jams` in the console to choose the next challenge.
