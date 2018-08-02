---

# YOU DID IT!

Right now, your project structure should look like this:
```
.
├── node_modules/
├── src/
├── .babelrc
├── .flowconfig
├── package-lock.json
├── package.json      
```

Your `.flowconfig` should look like this:
```yaml
[ignore]

[include]

[libs]

[lints]

[options]

[strict]

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
        "test": "echo \"Error: no test specified\" && exit 1",
        "flow": "flow"
    },
    "keywords": [],
    "author": "",
    "license": "ISC",
    "devDependencies": {
        "babel-cli": "^6.26.0",
        "babel-preset-flow": "^6.23.0",
        "flow-bin": "^0.77.0"
    }
}
```

Now we're finally ready to start playing with Flow!

In the next challenge we're going to about Type Systems and what it is that Flow does for us as developers.

Run `go-with-the-flow` in the console to choose the next challenge.
