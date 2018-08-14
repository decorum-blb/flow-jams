Its hard to imagine JavaScript without `Objects`, and Flow allows you to be able to specify Object definitions as types.

For example:
```js
// @flow
var obj: { foo: boolean };

obj = { foo: true }                       // Works!
obj = { foo: false, otherField: "hello" } // Works!
obj = { foo: 42 }                         // Error!
obj = { foo: "hello" }                    // Error!
```

Perhaps most importantly, Flow will warn you when you try to access a property that doesn't exist in an Object.
```js
// @flow
var obj = { foo: "bar" };

obj.foo; // Works!
obj.bar; // Error!
```

Another great _nice-to-have_ that Flow provides is the idea of being able to specify optional parameters for Objects.
```js
// @flow
var obj: { foo?: boolean };

obj = {};          // Works!
obj.foo = true;    // Works!
obj.foo = "hello"; // Error!
```

Of course, just like we can define these Object types for variables, we can for function parameters as well.
```js
function acceptsObject(value: { foo: string }) {
  // ...
}

acceptsObject({ foo: "bar" });          // Works!
acceptsObject({ foo: "bar", bar: 42 }); // Works!
acceptsObject({});                      // Error!
```

If we want to make sure that someone is not giving us any properties we're not going to use, we can declare an `Exact Object` type.
```js
function method(obj: {| foo: string |}) {
  // ...
}

method({ foo: "hello" });          // Works!
method({ foo: "hello", bar: 42 }); // Error!
```

Let's imagine that you were building a server where you wanted to allow someone to create a User.

A User must have the following:
```js
{
  firstName: "Bruce",
  lastName: "Wayne",
  age: 32
}
```

Make a file `src/objects.js` that has a function which accepts a User Object and logs to the console all of the information that said Object contains.

Don't be too strict with this Object. You should be able to accept a User that has a `middleInitial`, for example.

Don't forget to transpile your code with Babel by running:
```bash
npm run build
```

To see if your code works, test your solution by running:

```bash
go-with-the-flow verify lib/objects.js
```
