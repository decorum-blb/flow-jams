---

# YOU DID IT!

For reference, here is the solution we came up with:
`src/literals.js`
```js
// @flow
const userObject = {
    firstName: 'Bruce',
    lastName: 'Wayne',
    age: 32
};

function isValidUser(user: { firstName: string, lastName: string, age: number }): boolean {
    console.log(JSON.stringify(user));

    return true;
}

isValidUser(userObject);
```

Congratulations! 

You've learned about Object types in Flow.

In the next challenge we're going to learn about Function Types in Flow.

Run `flow-jams` in the console to choose the next challenge.
