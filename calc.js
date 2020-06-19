class Calculator {
    constructor(previousMathTextElement, currentMathTextElement) {
        this.previousMathTextElement = previousMathTextElement
        this.currentMathTextElement = currentMathTextElement
        this.clear()
    }
    clear() {
        this.currentMath = ''
        this.previousMath = ''
        this.operation = undefined
    }
    delete() {
        this.currentMath = this.currentMath.toString().slice(0, -1)
    }
    appendNumber(number) {
        if(number === '.' && this.currentMath.includes('.')) return;
        this.currentMath = this.currentMath.toString() + number.toString();
    }
    chooseOperation(operation) {
        if(this.currentMath === '') return
        if(this.previousMath !== '') {
            this.compute()
        }
        this.operation = operation
        this.previousMath = this.currentMath
        this.currentMath = ''
    }
    compute() {
        let computation
        const prev = parseFloat(this.previousMath)
        const current = parseFloat(this.currentMath)
        if(isNaN(prev) || isNaN(current)) return;
        switch (this.operation) {
            case '+':
                computation = prev + current
                break;
            case '−':
                computation = prev - current
                break;
            case '×':
                computation = prev * current
                break;
            case '÷':
                computation = prev / current
                break;
            default:
                break;
        }
        this.currentMath = computation
        this.operation = undefined
        this.previousMath = ''
    }
    getDisplayNumber(number) {
        const stringNumber = number.toString()
        const integerDigits = parseFloat(stringNumber.split('.')[0])
        const decimalDigits = stringNumber.split('.')[1]
        let integerDisplay
        if(isNaN(integerDigits)) {
            integerDisplay = ''
        } else {
            integerDisplay = integerDigits.toLocaleString('en', {
                maximumFractionDigits: 0
            });
        }
        if(decimalDigits != null) {
            return `${integerDisplay}.${decimalDigits}`
        } else {
            return integerDisplay
        }
    }
    updateDisplay() {
        this.currentMathTextElement.innerText = this.getDisplayNumber(this.currentMath)
        if(this.operation != null) {
            this.previousMathTextElement.innerText = `${this.getDisplayNumber(this.previousMath)} ${this.operation}`
        }
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
operationBtns.forEach(button => {
    button.addEventListener("click", () => {
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()
    })
})
equalsBtn.addEventListener("click", () => {
    calculator.compute()
    calculator.updateDisplay()
})
clearBtn.addEventListener("click", () => {
    calculator.clear()
    calculator.updateDisplay()
})
deleteBtn.addEventListener("click", () => {
    calculator.delete()
    calculator.updateDisplay()
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