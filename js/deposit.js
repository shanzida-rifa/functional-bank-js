function getInputFieldValueById(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    const inputFieldValueString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldValueString);
    inputField.value = '';
    return inputFieldValue;
}

function getTextElementById(elementId) {
    const textElement = document.getElementById(elementId);
    const textElementValueString = textElement.innerText;
    const textElementValue = parseFloat(textElementValueString);
    return textElementValue;
}

// function getElementValueById(elementId) {
//     const element = document.getElementById(elementId);
//     const elementValueString = element.innerText;
//     const value = parseFloat(elementValueString);
//     return value;
// }

document.getElementById('btn-deposit').addEventListener('click', function () {
    const newDepositAmount = getInputFieldValueById('deposit-field');
    const previousDepositTotal = getTextElementById('deposit-total');
    console.log(newDepositAmount);

})