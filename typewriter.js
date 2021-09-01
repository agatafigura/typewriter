"use strict";
let maxNumberOfIterations;
let iterator;
let character;
let typewriter = document.querySelector("#typewriter").textContent;
document.querySelector("#typewriter").textContent = "";
console.log(typewriter);

init();

function init() {
    maxNumberOfIterations = typewriter.length;
    console.log(maxNumberOfIterations);
    iterator = 0;
    loop();
}

function loop() {
    console.log("loop", iterator);
    character = typewriter[iterator];
    document.querySelector("#typewriter").textContent += character;
    iterator++;
    if(iterator <= maxNumberOfIterations) {
        setTimeout(loop,500);
    }
}