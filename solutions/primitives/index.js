// @flow
const stringParam = process.argv[2];

function convertStringToNumber(param: string): number {
    return parseInt(param, 10);
}

function isParam42(param: number): boolean {
    return (param === 42);
}

console.log(
    isParam42(
        convertStringToNumber(stringParam)
    )
);