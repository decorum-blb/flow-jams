function getValueOf(coin) {
    switch (coin) {
        case "penny":
            return 1;
        case "nickel":
            return 5;
        case "dime":
            return 10;
        case "quarter":
            return 25;
        default:
            return 0;
    }
}

console.log(getValueOf("penny"));
console.log(getValueOf("nickel"));
console.log(getValueOf("dime"));
console.log(getValueOf("quarter"));