Type Aliases
Aliasing types for reuse

When you have complicated types that you want to reuse in multiple places, you can alias them in Flow using a type alias.

```js
// @flow
type MyObject = {
  foo: number,
  bar: boolean,
  baz: string,
};
```

These type aliases can be used anywhere a type can be used.

```js
// @flow
type MyObject = {
  // ...
};

var val: MyObject = { /* ... */ };
function method(val: MyObject) { /* ... */ }
class Foo { constructor(val: MyObject) { /* ... */ } }
```

Any type can appear inside a type alias, including another type alias.

```js
type NumberAlias = number;
type ObjectAlias = {
  property: string,
  method(): NumberAlias,
};
type UnionAlias = 1 | 2 | 3;
type AliasAlias = ObjectAlias;
```

Aliases are one of the most simple to understand features of flow, but they can be very powerful and straightforward to implement.  Create a file called `src/aliases.js`.  Define a type alias `DatabaseConnection`.  This type must have the properties `host`, `port`, `user`, `password`, `connectionHistory` these properties should be of the types `string`, `number`, `string`, `string`, and `ConnectionHistory` respectively.  Define the type `ConnectionHistory`.  This type should have the property `attempts` which is an array of strings.

Don't forget to transpile your code with Babel by running:
```bash
npm run build
```

To see if your code works, test your solution by running:

```bash
go-with-the-flow verify src/aliases.js
```
