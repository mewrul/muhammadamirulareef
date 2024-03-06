let display = document.getElementById('display');
let operator = '';
let operand1 = 0;
let operand2 = null;

function clearDisplay() {
    display.value = '';
    operator = '';
    operand1 = 0;
    operand2 = null;
}

function appendNumber(number) {
    display.value += number;
}

function appendOperator(op) {
    if (operator === '') {
        operator = op;
        operand1 = parseFloat(display.value);
        display.value = '';
    } else {
        alert('Operator already selected. Please calculate first.');
    }
}

function calculateResult() {
    if (operator !== '') {
        operand2 = parseFloat(display.value);
        switch (operator) {
            case '+':
                display.value = operand1 + operand2;
                break;
            case '-':
                display.value = operand1 - operand2;
                break;
            case '*':
                display.value = operand1 * operand2;
                break;
            case '/':
                display.value = operand1 / operand2;
                break;
            default:
                display.value = 'Error: Invalid operator';
                break;
			
        }
        operator = '';
		window.alert('The Value is = ' + display.value);
    } else {
        alert('Please select an operator and enter a number.');
    }
}