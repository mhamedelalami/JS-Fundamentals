const input = process.argv[2];
const number = parseInt(input);



function factorial(n) {
    if (n <= 1) {
        return 1;
    }
    return n * factorial(n - 1);
}



if (isNaN(number)) {
    console.log(1);
} else {
    console.log(factorial(number));
}