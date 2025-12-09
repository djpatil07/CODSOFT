// Get display and all buttons
const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');

// Store input and result
let currentInput = '';
let result = '';

// Loop through buttons
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.getAttribute('data-value');

        if (button.id === 'clear') {
            // Clear display
            currentInput = '';
            display.value = '';
        } else if (button.id === 'equals') {
            // Calculate result
            try {
                result = eval(currentInput);
                display.value = result;
                currentInput = result.toString();
            } catch {
                display.value = 'Error';
                currentInput = '';
            }
        } else {
            // Add value to input
            currentInput += value;
            display.value = currentInput;
        }
    });
});

// Keyboard support

document.addEventListener('keydown', (e) => {
    const key = e.key;

    // Numbers and operators
    if (!isNaN(key) || ['+', '-', '*', '/', '.'].includes(key)) {
        currentInput += key;
        display.value = currentInput;

    // Enter key acts as equals
    } else if (key === 'Enter') {
        try {
            result = eval(currentInput);
            display.value = result;
            currentInput = result.toString();
        } catch {
            display.value = 'Error';
            currentInput = '';
        }

    // Backspace removes last character
    } else if (key === 'Backspace') {
        currentInput = currentInput.slice(0, -1);
        display.value = currentInput;

    // 'C' clears the display
    } else if (key.toLowerCase() === 'c') {
        currentInput = '';
        display.value = '';
    }
});
