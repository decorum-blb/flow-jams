JavaScript comes with many data types, and you're probably already familiar with all of them.

For reference, you can take a look at the data types that are provided by JavaScript on [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)

The Primitive Types include:
- Booleans
- Strings
- Numbers
- `null`
- `undefined` (referred to as `void` in Flow)
- Symbols (unsupported by Flow, also not that important for most developer work)

These Primitive Types come in two flavors:
- literal types
- wrapper objects

The big difference is just how you invoke them, but Flow treats literals as entirely different to wrappers.

For example:
```js
function takesThreeParams(x: number, y: string, z: boolean) {
    // ...
}
```

`takesThreeParams` takes three literal types of `number`, `string`, and `boolean`

You could invoke `takesThreeParams` with:
```js
takesThreeParams(3.14, "hello", true);
```

However, you could NOT invoke it with wrapper objects, like so:
```js
// this would fail to build in Flow
takesThreeParams(new Number(42), new String("world"), new Boolean(false));
```

A good rule of thumb for determining when to use one or the other is asking yourself, "would I ever say `new Number()` in my code?"

If the answer is no, then just use the literal types. 

Otherwise, use wrapper object assertions. 

Typically, however, you'll never use wrapper objects for these very simple types.

Let's try playing with some primitives.

Create a new file called `primitives.js` that has two functions:
```js
function convertStringToNumber(param: string) :number

function isParam42(param: number) :boolean
```

Where `convertStringToNumber` takes in a `string` parameter and returns its `number` value as an integer, and `isParam42` simply returns `true` if the passed parameter is the number `42`.

Make sure that you can pass a value into your program through `process.argv[2]`.

Don't forget to transpile your code with Babel by running:
```bash
npm run build
```

To see if your code works, test your solution by running:

```bash
flow-jams verify lib/primitives.js
```
