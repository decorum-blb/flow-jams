Perhaps the greatest feature of JavaScript is dynamic typing.

A variable can be reassigned to any type of value, whether that be a `number`, an `Object`, `undefined`, etc.

However, you may not want that amount of flexibility for the variables you and your team are working with.

Flow allows you to define type assertions for variables, just like it does for parameters and return values.

Let's start with `const` variables.

Flow will make sure that once you assign a value to a `const` that it cannot be re-assigned:
```js
// @flow

const constVariable = 42;

constVariable = false; // Error!
```

With all variables (`var`, `let`, and `const`) you can define a type assertion when you define the variable.
```js
// @flow

var varVariable: number;
let letVariable: string;
const constVariable: boolean;

varVariable = 42; // Works!
varVariable = "42"; // Error!

letVariable = "hello"; // Works!
letVariable = false; // Error!

constVariable = true; // Works!
constVariable = false; // Error! (We've already assigned a value to this const)
```

Somethings to keep in mind with variables in Flow:
- When you re-assign a variable, Flow will give it the type of _all possible type assignments_
- Flow cannot protect you from mutating blocks of code. Meaning, if you re-assign a variable's value in an _if/else_ block or a _function_, then you cannot assert what the type will be of that variable, even if you've declared what type it should be.

`re-assignment`
```js
// @flow
let foo = 42;

if (Math.random()) {
  foo = true;
}

if (Math.random()) {
  foo = "hello";
}

let isOneOf: number | boolean | string = foo; // Works!
```
`mutation`
```js
// @flow
let foo = 42;

function mutate() {
  foo = true;
  foo = "hello";
}

mutate();

let isString: string = foo; // Error!
```

There is no test for this module. Feel free to play with Variables and create a file called `src/variables.js` where you play around with variables in Flow.

Don't forget to transpile your code with Babel by running:
```bash
npm run build
```

To see if your code works, test your solution by running:

```bash
flow-jams verify lib/variables.js
```
