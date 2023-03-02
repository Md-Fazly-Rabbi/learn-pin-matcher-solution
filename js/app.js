function generatePin() {
    const random = Math.round(Math.random() * 10000)
    return random;
}

function getPin() {
    const pin = generatePin();
    const pinString = pin + '';
    if (pinString.length === 4) {
        return pin;
    }
    else {
        return getPin();
    }
}

document.getElementById('generate-pin').addEventListener('click', function () {
    const pin = getPin();
    console.log(pin)
    const displayPinField = document.getElementById('display-pin');
    displayPinField.value = pin;
})

document.getElementById('calculator').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const typeNumberField = document.getElementById('typed-numbers');
    const previousTypeNumber = typeNumberField.value;
    if (isNaN(number)) {
        if (number === 'C') {
            typeNumberField.value = '' ;
        }
        else if(number === '<'){
const digits = previousTypeNumber.split('')
digits.pop();
const reminderDigit = digits.join('')
typeNumberField.value = reminderDigit;

        }
    }
    else {
        const newTypeNumber = previousTypeNumber + number;
        typeNumberField.value = newTypeNumber;
    }
})

document.getElementById('verify-pin').addEventListener('click' ,function(){
    const displayPinFiled = document.getElementById('display-pin');
    const displayPin = displayPinFiled.value;
    const typeNumbersField = document.getElementById('typed-numbers');
    const TypeNumber = typeNumbersField.value ;

    const pinSuccessMassage =  document.getElementById('pin-success')
    const pinFailureMassage = document.getElementById('pin-failure')
    if(displayPin === TypeNumber){
pinSuccessMassage.style.display = 'block'
pinFailureMassage.style.display = 'none'

}
else{
    pinFailureMassage.style.display = 'block'
    pinSuccessMassage.style.display = 'none'
    }
})

