var display = document.getElementById('display'),
    inputs = document.getElementsByClassName('inputs'),
    operators = document.getElementsByClassName('operators'),
    equal = document.getElementById('equal'),
    clear = document.getElementById('clear'),
    backspace = document.getElementById('backspace'),
    currentInputValue,
    currentOperator,
    displayValue,
    result,
    backspaceValue,
    i,
    io;

function dataInput() {
    currentInputValue = this.value;
    display.value += currentInputValue;
}

function operatorInput() {
    currentOperator = this.value;
    display.value += currentOperator;
}

function displayResult() {
    if (display.value === "") {
        display.value = "";
    } else {
        displayValue = display.value;
        displayValue = displayValue.replace(/[\d.]+/g, function (n) {
            return parseFloat(n);
        });
        result = eval(displayValue);
        display.value = result;
    }
}

function deleteSingle() {
    backspaceValue = display.value;
    display.value = backspaceValue.substr(0, backspaceValue.length - 1);
}

function clearAll() {
    display.value = "";
}

function keyboardInput(key) {
    if ((key.which < 0 || key.which > 57) && (key.which !== 13 && key.which !== 99)) {
        return false;
    } else {
        key.preventDefault();
        if (key.which === 48) {
            display.value += "0";
        } else if (key.which === 49) {
            display.value += "1";
        } else if (key.which === 50) {
            display.value += "2";
        } else if (key.which === 51) {
            display.value += "3";
        } else if (key.which === 52) {
            display.value += "4";
        } else if (key.which === 53) {
            display.value += "5";
        } else if (key.which === 54) {
            display.value += "6";
        } else if (key.which === 55) {
            display.value += "7";
        } else if (key.which === 56) {
            display.value += "8";
        } else if (key.which === 57) {
            display.value += "9";
        } else if (key.which === 46) {
            display.value += ".";
        } else if (key.which === 40) {
            display.value += "(";
        } else if (key.which === 41) {
            display.value += ")";
        } else if (key.which === 42) {
            display.value += "*";
        } else if (key.which === 47) {
            display.value += "/";
        } else if (key.which === 43) {
            display.value += "+";
        } else if (key.which === 45) {
            display.value += "-";
        } else if (key.which === 13) {
            displayResult();
        } else if (key.which === 99) {
            clearAll();
        } else {
            display.value = display.value;
        }
        return true;
    }
}

function backspaceKeyEvent (event) {
    if (event.which === 8) {
        deleteSingle();
    }
}

window.onload = function () {
    document.onkeypress = keyboardInput;
    
    document.onkeydown = backspaceKeyEvent;

    for (i = 0; i < inputs.length; i++) {
        inputs[i].onclick = dataInput;
    }

    for (io = 0; io < operators.length; io++) {
        operators[io].onclick = operatorInput;
    }

    equal.onclick = displayResult;

    backspace.onclick = deleteSingle;

    clear.onclick = clearAll;
};