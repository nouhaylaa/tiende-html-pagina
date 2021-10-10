// 1: no arguments
const paint = function () {
    console.log("The wall has been painted red");
};
paint();
// 2: single argument
const wallpaint = function (color) {
    console.log("The wall has been painted " + color);
};
wallpaint("green");
wallpaint("blue");
// 3: multiple arguments
const wall = function (direction, color) {
    console.log("The " + direction + " wall has been painted " + color);
};
wall("North", "orange");
wall("South-East", "grey");