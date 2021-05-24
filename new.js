// Print numbers 1 - 100

for (let i = 1; i <= 100; i++) {

    if(i % 3 == 0 && i % 5 == 0 ) {
        console.log("FizzBuzz")
    } else if (i % 5 == 0) {
        console.log("Buzz")
    } else if (i % 3 == 0) {
        console.log("Fizz")
    } else {
    console.log(i);
    }
}

// if it's divisible by both = FizzBuzz

// If it's divisible by 3 = Fizz

// if it's divisible by 5 = Buzz

