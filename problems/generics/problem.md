`Generics` are one of those _interesting_ topics in any Type System. They can get fairly complicated pretty quickly. 

We're going to focus on some real-world applications of `Generics`, and explain why they are useful to us when writing our code.

For starters, you're probably very familiar with a basic type that uses `Generics` already:
```js
// @flow
var arr: Array<number> = [1, 2, 3];
```

That's right, in Flow you can define a type definition for Arrays of a particular type. 

To further explore this point, notice how Flow will throw an error if you try to add objects to this array if they don't match the type for the Array:
```js
// @flow
var arr: Array<number>;

arr = [1, 2, 3];          // Works!
arr = ["1", "2", "3"];    // Error!
arr = [1, "hello", true]; // Error!
```

So what exactly is this syntax though? What are those `<>` for? 

`Generics` are a way for developers to write code that is agnostic about what types it allows or can work with, while also forcing any implementation to only use whatever type is passed into the generic declaration. 

That's a bit of a mouthful, so let's try to understand this through examples.

We can define Generics on classes, or as parameter arguments for functions.

As you can probably guess, the implementation of Array in Flow looks like this:
```js
type Array<T>; // where `T` is a "generic" placeholder for any type
```

With this definition, we can assert that we can only create Arrays of a particular type, like what we demonstrated above.

For functions, we can do something similar. 

Imagine we had a function called `identity` where we just want to return whatever value is passed into it.
```js
function identity(value) {
  return value;
}
```

In order to assert that the return type is always the same as the passed in type, we can use `Generics` to confine our `identity` function to a particular type, that we'll define later.

```js
// @flow

function identity<T> (value: T): T {
  return value;
}
```

Now we can add implementations of this `identity` function that are specific to particular types:
```js
// @flow

function stringIdentity = identity<string>;
function numberIdentity = identity<number>;
function arrayIdentity = identity<Array<T>>;
```

What's great about this is that we don't ever have to change the underlying code of `identity`. 

It will always behave the same way, whether we're using it as `identity<string>` or `identity<number>`. 

`Generics` are a great way to help us stay [`DRY`](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself) while being future-proof to new changes in our codebase. 

To practice, let's create a class called `Box` that has a property called `item`.

I should be able to import your `Box` class and create implementations of it such as:
```js
// @flow
import Box from 'yourCode.js';

class PuppyBox extends Box<Puppy>;

const puppyBox = new PuppyBox(new Puppy('Shiba', 'Doge'));

val puppy: Puppy = puppyBox.item; // this should work
```

Make a file `src/generics.js` that has `export Box`.

Don't forget to transpile your code with Babel by running:
```bash
npm run build
```

To see if your code works, test your solution by running:

```bash
flow-jams verify lib/generics.js
```
