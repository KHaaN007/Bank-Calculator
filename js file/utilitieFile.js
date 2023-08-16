function getInputValueById(inputValue) {
    const inputFiled = document.getElementById(inputValue);
    const inputFiledValueString = inputFiled.value;
    const inputFiledValue = parseFloat(inputFiledValueString);

    inputFiled.value = '';

    return inputFiledValue
}

function getElementValueById(elementValue) {
    const elementText = document.getElementById(elementValue);
    const elementTextValueString = elementText.innerText;
    const elementTextValue = parseFloat(elementTextValueString);

    return elementTextValue;
}


function getTotalValue(id, value) {
    const idText = document.getElementById(id);
    idText.innerText = value;
}

