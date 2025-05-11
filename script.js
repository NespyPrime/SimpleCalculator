let display = document.getElementById('display');
let currentInput = '';
let operator = null;
let firstOperand = null;

function appendNumber(number) {
    currentInput += number;
    display.value = currentInput;
}

function appendOperator(op) {
    if (currentInput === '' && firstOperand === null) return; // Prevent starting with an operator

    if (firstOperand !== null && currentInput !== '') {
        calculate(); // Perform previous operation if a new operator is pressed
    }

    firstOperand = (currentInput === '') ? 0 : parseFloat(currentInput); // Use 0 if starting with operator after clear
    operator = op;
    display.value = firstOperand + ' ' + operator; // Display the first operand and the operator
    currentInput = ''; // Reset currentInput for the next number
}

function appendDecimal() {
    if (!currentInput.includes('.')) {
        currentInput += '.';
        display.value = currentInput;
    }
}

function clearDisplay() {
    currentInput = '';
    operator = null;
    firstOperand = null;
    display.value = '';
}

function calculate() {
    if (operator === null || firstOperand === null || currentInput === '') return;
    let secondOperand = parseFloat(currentInput);
    let result;
    switch (operator) {
        case '+':
            result = firstOperand + secondOperand;
            break;
        case '-':
            result = firstOperand - secondOperand;
            break;
        case '*':
            result = firstOperand * secondOperand;
            break;
        case '/':
            if (secondOperand === 0) {
                display.value = 'Error';
                return;
            }
            result = firstOperand / secondOperand;
            break;
    }
    currentInput = String(result);
    operator = null;
    firstOperand = null;
    display.value = currentInput;
}