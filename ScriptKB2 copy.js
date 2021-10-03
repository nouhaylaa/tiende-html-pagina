const age = 18;
const firstName = "Sarah";
const isFemale = true;
const driverStatus = "bob";
const totalAmount = 100;

if (age >= 18) {
    console.log("Je mag naar binnen");
}
else {
    console.log("Je mag niet naar binnen");
}
if (age >= 18 && age <= 25) {
    console.log("Je krijgt 50% korting!");
}
if (firstName === "Sarah" || firstName === "Bram") {
    console.log("Gefeliciteerd! Je krijgt een gratis drankje");
}
if (totalAmount >= 25 && totalAmount < 50) {
    console.log("Je krijgt gratis (vega)bitterballen!");
}
if (totalAmount >= 50 && totalAmount < 100) {
    console.log("Je krijgt gratis een portie nachos!");
}
if (totalAmount >= 100) {
    console.log("Je krijgt gratis een fles sinaasappelsap!");
}
if (isFemale) {
    console.log("Ladies Night!");
}
else {
    console.log("Je mag niet naar binnen");
}

if (driverStatus === "bob") {
    console.log("Je bent Bob!");
}
else {
    console.log("Je bent geen Bob");
}