Let's explore why Type Systems can be particularly useful when writing code.

In your `src/` directory, create a new file called `calculator.js`

In `calculator.js`, let's make a new function called `addNumbers(x, y)`

```js
function addNumbers(x, y) {
  return x + y;
}
```

This seems innocent enough... 

Let's see if it works!

Add the following code to `calculator.js`

```js
const first = process.argv[2];
const second = process.argv[3];

function addNumbers(x, y) {
    return x + y;
}

console.log(addNumbers(first, second));
```

```bash
node src/calculator.js 1 2
```

Huh?! But `1 + 2` is `3`... Why did the code print `12`?

It's like our code is interpreting `x` and `y` as if they were string values.

We want to add numbers though - we don't care about strings!

So how can we protect ourselves from receiving values we're not expecting?

What happens if we receive arrays? Or objects? Or other functions? Or null values?

Obviously, this line of questioning is starting to go down a bunny hole - by the time we sanitize our parameters within our `addNumbers` function, it will be so bloated it will be virtually un-readable.

How about we just assert what types of parameters we're willing to deal with, instead!

We're going add a marker comment to the top of the `calculator.js` file so that Flow knows to look for types throughout the file. 

Then we're going to add some types to our `x` and `y` parameters, and specify a `return type` for our `addNumbers` function. 

```js
// @flow
const first = process.argv[2];
const second = process.argv[3];

function addNumbers(x: number, y: number): number {
    return x + y;
}

console.log(addNumbers(first, second));

```

Save the file.

Back in your terminal, let's run a check on our code with Flow:

```bash
npm run flow
```

You should see some error messages like:
```bash
Cannot call addNumbers with first bound to x because string [1] is incompatible with number [2].
```

Try to figure out a way to convert `first` and `second` into numbers, and see if you can make those errors go away.

When you're done, use Babel to transpile your `calculator.js` file to universally valid JavaScript.

```bash
npm run build
```

This will create a copy of a universally valid version of `calculator.js` in a `lib` folder.

To see if your code works, test your solution by running:

```bash
go-with-the-flow verify lib/calculator.js
```
