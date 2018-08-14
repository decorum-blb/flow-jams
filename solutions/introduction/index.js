const packageJson = {
    "name": "flow-jams",
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
};

console.log(JSON.stringify(packageJson));