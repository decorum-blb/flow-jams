// @flow
let name = "John";
(name: string); // Works!
(name: "John"); // Works!

let castedName = (name: string);
(castedName: string); // Works!
// $ExpectError
(castedName: "John"); // Error!
