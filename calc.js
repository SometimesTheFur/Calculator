class Calculator {
    constructor(previousMath, currentMath) {
        this.previousMath = currentMath
        this.currentMath = previousMath
        this.clear()
    }
    clear() {
        this.currentMath = ''
        this.previousMath = ''
        this.operation = undefined
    }
    delete() {

    }
    appendNumber(number) {
        this.currentMath = number
    }
    chooseOperation(operation) {

    }
    compute() {

    }
    updateDisplay() {
        this.currentMathTextElement.innerText = this.currentMath
    }
}

const numberBtns = document.querySelectorAll('[data-number]');
const operationBtns = document.querySelectorAll('[data-operation]');
const equalsBtn = document.querySelector('[data-equals]');
const clearBtn = document.querySelector('[data-clear]');
const deleteBtn = document.querySelector('[data-delete]');
const previousMathTextElement = document.querySelector('[data-previous-math]');
const currentMathTextElement = document.querySelector('[data-current-math]');

const calculator = new Calculator(previousMathTextElement, currentMathTextElement)

numberBtns.forEach(button => {
    button.addEventListener("click", () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
    
})

// const screen = document.getElementById("screen");
//Button Variables v1
// const one = document.getElementById("one");
// one.addEventListener("click", () => screen.innerHTML += 1);
// const two = document.getElementById("two");
// two.addEventListener("click", () => screen.innerHTML += 2);
// const three = document.getElementById("three");
// three.addEventListener("click", () => screen.innerHTML += 3);
// const four = document.getElementById("four");
// four.addEventListener("click", () => screen.innerHTML += 4);
// const five = document.getElementById("five");
// five.addEventListener("click", () => screen.innerHTML += 5);
// const six = document.getElementById("six");
// six.addEventListener("click", () => screen.innerHTML += 6);
// const seven = document.getElementById("seven");
// seven.addEventListener("click", () => screen.innerHTML += 7);
// const eight = document.getElementById("eight");
// eight.addEventListener("click", () => screen.innerHTML += 8);
// const nine = document.getElementById("nine");
// nine.addEventListener("click", () => screen.innerHTML += 9);
// const zero = document.getElementById("zero");
// zero.addEventListener("click", () => screen.innerHTML += 0);
// const clear = document.getElementById("clr");
// clear.addEventListener("click", () => screen.innerHTML = "");
// const percent = document.getElementById("percent");
// percent.addEventListener("click", () => screen.innerHTML += "%");
// const divide = document.getElementById("div");
// divide.addEventListener("click", () => screen.innerHTML += "÷");
// const multiply = document.getElementById("multiply");
// multiply.addEventListener("click", () => screen.innerHTML += "×");
// const subtract = document.getElementById("subtract");
// subtract.addEventListener("click", () => screen.innerHTML += "−");
// const add = document.getElementById("add");
// add.addEventListener("click", () => screen.innerHTML += "+");