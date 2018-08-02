---

# YOU DID IT!

Right now, your project structure should look like this:
```
.
├── node_modules/
├── src/
├── .babelrc
├── package-lock.json
├── package.json      
```

Your `.babelrc` should look like this:
```json
{ "presets": ["flow"] }
```

And your `package.json` should look something like this:
```json
{
  "name": "go-with-the-flow",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "build": "babel src/ -d lib/",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "babel-cli": "^6.26.0",
    "babel-preset-flow": "^6.23.0"
  }
}
```

We have a little further to go before we start exploring Flow itself, but wear with me, you're almost there!

In the next challenge we're going to configure Flow for our project.

Run `go-with-the-flow` in the console to choose the next challenge.
