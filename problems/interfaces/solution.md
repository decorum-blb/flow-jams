---

# YOU DID IT!

For reference, here is the solution we came up with:
`src/interfaces.js`
```js
// @flow
interface MovieModel {
  // anything
}

interface UserModel {
  +movies: MovieModel[];
  getMovies: () => MovieModel[];
}
```

Congratulations!

You've learned about Interfaces in Flow.

In the next challenge we're going to learn about Type Aliases in Flow.

Run `go-with-the-flow` in the console to choose the next challenge.
