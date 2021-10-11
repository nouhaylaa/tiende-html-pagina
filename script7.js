//Checking if a number is big
const calculate = function (number) {
    const sum = number;
    if (sum > 100) {
        return "true";
    }
    return "false";
};

const result = calculate(103);
console.log(result);

//Bouncer at a club
const ageRestriction = function (number) {
    const age = number;
    if (age > 17) {
        return "Come in";
    }
    return "This is a club for adults";
};

const myAge = ageRestriction(18);
console.log(myAge);

const maximumCapacity = function (number) {
    const amount = number;
    if (amount > 500) {
        return "It's too busy now, come back later";
    }
    return "There is enough space";
};

const amountOfpeople = maximumCapacity(505);
console.log(amountOfpeople);

//Calculating the average
const averageArray = function (numbers) {
    const average = numbers.reduce((total, n) => total + n) / numbers.length;
    return average;
};
const grades = averageArray([5, 8, 9, 7, 3]);
console.log(grades);