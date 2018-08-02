_This workshopper assumes that you have NodeJS installed on your machine with a working version of NPM, and that you have a working knowledge of JavaScript._

Before we get started, let's start by creating a new directory to work in.

Run this command to make a directory called `go-with-the-flow` (or something else if you like):

```bash
mkdir go-with-the-flow
```

Change directory into the `go-with-the-flow` directory:

```bash
cd go-with-the-flow
```

Let's start by initializing our directory for NPM:

```bash
npm init -y
```

Next, let's install all of the dependencies we're going to need for this workshopper:

```bash
npm install --save-dev babel-cli babel-preset-flow
```

This is going to install [Babel](https://babeljs.io/docs/en/index.html) and the Babel preset for Flow.

Babel is a tool that converts ECMAScript 2015+ and experimental JavaScript code into something that will work on all browsers, even the older ones.

So we're going to need a Babel configuration file :

```bash
touch .babelrc
```

Add the following configuration to the `.babelrc` file:

```json
{
  "presets": [ "flow" ]
}
```

Lastly we're going to create a directory to put all of our code in, and add a script to our `package.json` to make everything a little easier to work with later.

```bash
mkdir src
```

Add the following to the `package.json`

```json
{
  "scripts": {
    "build": "babel src/ -d lib/"
  }
}
```

Okay - that was a lot! 

Let's make sure that your workspace/directory is all set by running this command:

```bash
go-with-the-flow verify package.json
```
