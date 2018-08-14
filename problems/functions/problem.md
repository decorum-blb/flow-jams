Function Types

Functions have two places where types are applied: Parameters (input) and the return value (output).

For example,

```js
// @flow
function concat(a: string, b: string): string {
  return a + b;
}

concat("foo", "bar"); // Works!
concat(true, false);  // Error!
```

There are three forms of functions that each have their own slightly different syntax.

Function Declarations
```js
// without types
function method(str, bool, ...nums) {
  // ...
}

// with types
function method(str: string, bool?: boolean, ...nums: Array<number>): void {
  // ...
}
```

Arrow functions
```js
// without types
let method = (str, bool, ...nums) => {
  // ...
};

// with types
let method = (str: string, bool?: boolean, ...nums: Array<number>): void => {
  // ...
};
```

Function Types - This is for defining a function as a type

```js
(str: string, bool?: boolean, ...nums: Array<number>) => void
```

Function Parameters

Function parameters can have types by adding a colon : followed by the type after the name of the parameter.

```js
function method(param1: string, param2: boolean) {
  // ...
}
```

Optional Parameters

You can also have optional parameters by adding a question mark `?` after the name of the parameter and before the colon `:`

```js
// @flow
function method(optionalValue?: string) {
  // ...
}

method();          // Works.
method(undefined); // Works.
method("string");  // Works.
method(null);      // Error!
```

Function Returns

Function returns can also add a type using a colon : followed by the type after the list of parameters.

```js
function method(): number {
  // ...
}
```


Problem:

Create a file called `src/functions.js`. Define a function called buildList using arrow syntax that takes 2 parameters, listItems and isExpanded.  The parameters are an array of strings, and an optional boolean value, respectively.  Your function should return an array of Objects with two properties, title and imageUrl.  Both of these properties should be strings.

Don't forget to transpile your code with Babel by running:
```bash
npm run build
```

To see if your code works, test your solution by running:

```bash
go-with-the-flow verify src/functions.js
```
