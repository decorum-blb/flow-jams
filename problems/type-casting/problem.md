Type Casting Expressions
Asserting and casting values to different types

Sometimes it is useful to assert a type without using something like a function or a variable to do so. For this Flow supports an inline type cast expression syntax which can be used in a number of different ways.

In order to create a type cast expression around a value, add a colon : with the Type and wrap the expression with parentheses ( )

```js
(value: Type)
```

Type Assertions

Using type cast expressions you can assert that values are certain types.

```js
// @flow
let value = 42;

(value: 42);     // Works!
(value: number); // Works!
(value: string); // Error!
```

Type Casting

When you write a type cast expression, the result of that expression is the value with the provided type. If you hold onto the resulting value, it will have the new type.

```js
// @flow
let value = 42;

(value: 42);     // Works!
(value: number); // Works!

let newValue = (value: number);

(newValue: 42);     // Error!
(newValue: number); // Works!
```

Create a file called `src/type-casting.js`.  Define a variable `name` with the value of "John".  Use type assertion to assert the type of `name` as both the exact string "John" and as a `string` type.  Next, use type casting to create a new variable, `castedName`, and cast the type of `name` to `string`.  Use type assertion to assert the type of `castedName` as both the exact string "John" and as a `string`.  What is the result?

Don't forget to transpile your code with Babel by running:
```bash
npm run build
```

To see if your code works, test your solution by running:

```bash
go-with-the-flow verify src/type-casting.js
```
