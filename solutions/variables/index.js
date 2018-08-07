let foo = 42;

if (Math.random()) {
    foo = true;
}

if (Math.random()) {
    foo = "hello";
}

let isOneOf = foo; // Works!

console.log(isOneOf);