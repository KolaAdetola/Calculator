document.addEventListener('DOMContentLoaded', function () {
    const display = document.querySelector('.calc-display-value');
    let firstOperand = '';
    let secondOperand = '';
    let currentOperation = null;
    let shouldResetDisplay = false;

    function updateDisplay(value) {
        display.textContent = value;
    }

    function appendNumber(number) {
        if (shouldResetDisplay) {
            display.textContent = number;
            shouldResetDisplay = false;
        } else {
            display.textContent === '0' ? display.textContent = number : display.textContent += number;
        }
    }

    function chooseOperation(operation) {
        if (currentOperation !== null) evaluate();
        firstOperand = display.textContent;
        currentOperation = operation;
        shouldResetDisplay = true;
    }

    function evaluate() {
        if (currentOperation === null || shouldResetDisplay) return;

        secondOperand = display.textContent;
        let computation;
        const prev = parseFloat(firstOperand);
        const current = parseFloat(secondOperand);
        if (isNaN(prev) || isNaN(current)) return;

        switch (currentOperation) {
            case '+':
                computation = prev + current;
                break;
            case '-':
                computation = prev - current;
                break;
            case '×':
                computation = prev * current;
                break;
            case '÷':
                computation = prev / current;
                break;
                default:
                    return;
            }
    
            display.textContent = computation;
            firstOperand = computation.toString();
            currentOperation = null;
            shouldResetDisplay = true;
        }
    
        function clear() {
            display.textContent = '0';
            firstOperand = '';
            secondOperand = '';
            currentOperation = null;
            shouldResetDisplay = false;
        }
    
        function handleButtonClick(event) {
            const { target } = event;
    
            if (target.classList.contains('operations')) {
                if (target.textContent === '=') {
                    evaluate();
                } else {
                    chooseOperation(target.textContent);
                }
            } else if (target.classList.contains('opps')) {
                if (target.textContent === 'AC') {
                    clear();
                } else if (target.textContent === '%') {
                    // Implement percentage functionality if needed
                } else if (target.textContent === '+/-') {
                    // Implement toggle sign functionality if needed
                }
            } else {
                appendNumber(target.textContent);
            }
        }
    
        const buttons = document.querySelectorAll('button');
        buttons.forEach(button => button.addEventListener('click', handleButtonClick));
    
        // Initialize display
        clear();
    });
    
           
