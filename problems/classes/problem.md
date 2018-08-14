Class Types
Typing classes and using classes as types

JavaScript classes in Flow operate both as a value and a type.  You write classes the same way you would without Flow, but then you can use the name of the class as a type.

```js
class MyClass {
  // ...
}

let myInstance: MyClass = new MyClass();
```

Class Methods
Just like in functions, class methods can have annotations for both parameters (input) and returns (output).

```js
class MyClass {
  method(value: string): number { /* ... */ }
}
```

Class Fields (Properties)
Whenever you want to use a class field in Flow you must first give it an annotation.

```js
// @flow
class MyClass {
  method() {
    // $ExpectError
    this.prop = 42; // Error!
  }
}
```

Fields are annotated within the body of the class with the field name followed by a colon : and the type.

```js
// @flow
class MyClass {
  prop: number;
  method() {
    this.prop = 42;
  }
}
```

Class Generics
Classes can also have their own generics.

```js
class MyClass<A, B, C> {
  property: A;
  method(val: B): C {
    // ...
  }
}
```

Class generics are parameterized. When you use a class as a type you need to pass parameters for each of its generics.

```js
// @flow
class MyClass<A, B, C> {
  constructor(arg1: A, arg2: B, arg3: C) {
    // ...
  }
}

var val: MyClass<number, boolean, string> = new MyClass(1, true, 'three');
```

Create a file called `src/classes.js` where we will play around with classes in Flow.  Create a class `ScrollView`, that accepts three arguments in its constructor.  `x`, `y`, and `items`; a `number`, a `number`, and an `array` of `string`s, respectively.  In the constructor, set the class property values `x`, `y`, and `items` equal to the arguments given in the constructor.

Don't forget to transpile your code with Babel by running:
```bash
npm run build
```

To see if your code works, test your solution by running:

```bash
flow-jams verify src/classes.js
```
