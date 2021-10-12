// Hey kiddo
const ageRestriction = function (number) {
    const age = number;
    if (age >= 18) {
        return "true";
    }
    return "false";
};
const adult = function (number) {
    ageRestriction();
    if (number >= 18) {
        return "Hello there";
    }
    return "Hey kiddo";
};

const myAge = adult(7);
console.log(myAge);

// VAT exercise 1
const VATNumber1 = function (number) {
    console.log(number * 1.21);
};
VATNumber1(12);

// VAT exercise 2
const VATNumber2 = function (number) {
    console.log(number * 0.21);
};
VATNumber2(12);