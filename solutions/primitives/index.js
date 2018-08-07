const stringParam = process.argv[2];

function convertStringToNumber(param) {
    return parseInt(param, 10);
}

function isParam42(param) {
    return param === 42;
}

console.log(isParam42(convertStringToNumber(stringParam)));