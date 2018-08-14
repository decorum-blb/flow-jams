Interface Types

Classes in Flow are nominally typed. This means that when you have two separate classes you cannot use one in place of the other even when they have the same exact properties and methods.

```js
// @flow
class Foo {
  serialize() { return '[Foo]'; }
}

class Bar {
  serialize() { return '[Bar]'; }
}

// $ExpectError
const foo: Foo = new Bar(); // Error!
```

To solve this problem, we can use `interface`.  Allowing us to define the structure of a class that we are expecting.

```js
// @flow
interface Serializable {
  serialize(): string;
}

class Foo {
  serialize() { return '[Foo]'; }
}

class Bar {
  serialize() { return '[Bar]'; }
}

const foo: Serializable = new Foo(); // Works!
const bar: Serializable = new Bar(); // Works!
```

You can also use `implements` to tell Flow that you want the class to match an interface. This prevents you from making incompatible changes when editing the class, ensuring all your classes remain adherent to the interface to which you expect.

```js
// @flow
interface Serializable {
  serialize(): string;
}

class Foo implements Serializable {
  serialize() { return '[Foo]'; } // Works!
}

class Bar implements Serializable {
  // $ExpectError
  serialize() { return 42; } // Error!
}
```

Interface Syntax
Interfaces are created using the keyword interface followed by its name and a block which contains the body of the type definition.

Properties and methods are defined as you might expect, similarly to how we define them on classes.

```js
interface MyInterface {
  method(value: string): number;
  property: string;
  property2?: string;
}
```

Interface property variance
You can add modifiers to your property definitions to make them read-only or write-only. For example,

```js
interface MyInterface {
  +covariant: number;     // read-only
  -contravariant: number; // write-only
}
```

Create a file called `src/interfaces.js` where we will play around with interfaces in Flow.  Create an interface `UserModel`, with a property `movies`.  Create another interface called `MovieModel`, and make the property `movies` on the `UserModel` an array of `MovieModel`s.  (Although it has no effect on the syntax of your code, imagine that the `movies` property is populated through a relationship between separate user and movies tables.  Perhaps we do not want the `movies` property to be writable through the `UserModel`.)  Mark the `movies` property as covariant, so it is read-only.  Give the `UserModel` interface a method, `getMovies`, that returns the movies property.

Don't forget to transpile your code with Babel by running:
```bash
npm run build
```

To see if your code works, test your solution by running:

```bash
go-with-the-flow verify src/interfaces.js
```
