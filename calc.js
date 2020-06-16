//Number Button Variables
const one = document.getElementById("one");
one.addEventListener("click", () => screen.innerHTML += "1");
const two = document.getElementById("two");
two.addEventListener("click", () => screen.innerHTML += "2");
const three = document.getElementById("three");
three.addEventListener("click", () => screen.innerHTML += "3");
const four = document.getElementById("four");
four.addEventListener("click", () => screen.innerHTML += 4);
const five = document.getElementById("five");
five.addEventListener("click", () => screen.innerHTML += 5);
const six = document.getElementById("six");
six.addEventListener("click", () => screen.innerHTML += 6);
const seven = document.getElementById("seven");
seven.addEventListener("click", () => screen.innerHTML += 7);
const eight = document.getElementById("eight");
eight.addEventListener("click", () => screen.innerHTML += 8);
const nine = document.getElementById("nine");
nine.addEventListener("click", () => screen.innerHTML += 9);
const zero = document.getElementById("zero");
zero.addEventListener("click", () => screen.innerHTML += 0);

const screen = document.getElementById("screen");

//Function Button Variables
const clear = document.getElementById("clr");
clear.addEventListener("click", () => screen.innerHTML = "");

const back = document.getElementById("back");
two.addEventListener("click", () => screen.innerHTML.pop());