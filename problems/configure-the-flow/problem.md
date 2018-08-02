Now that we have the Babel preset for Flow installed and we have Babel configured to use Flow, we need to install the Flow library itself!

Install Flow as a dev dependency with NPM by running this command:

```bash
npm install --save-dev flow-bin
```

This will install the Flow library to our project and add it to our `package.json`.

Let's add a little script to our `package.json` to make calling Flow a little easier.

Add the following to the `"scripts"` section of your `package.json` file:

```json
{
  "scripts": {
    "flow": "flow"
  }
}
```

With Flow installed and easily accessible, let's initialize our project so that we can write code that uses Flow!

Run the following command:

```bash
npm run flow init
```

This will create a `.flowconfig` file in your directory with some configuration properties that we'll get into later.

Before we get to that though, let's make sure we can start Flow!

```bash
npm run flow
```

You should see something like this:

```bash
> flow

#<some garble-de-gook about log files>

No errors!
```

Finally! We're ready to start playing with Flow!

Let's make sure that your workspace/directory is all set by running this command:

```bash
go-with-the-flow verify package.json
```
