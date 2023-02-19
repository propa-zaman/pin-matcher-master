

function getPin() {
    const pin = generatePin();
    console.log(pin);
    const pinString = pin + '';
    if (pinString.length === 4) {
        return pin;
    }
    else {
        return getPin();
    }
}



function generatePin() {
    const random = Math.round(Math.random() * 10000);
    return random;
}

document.getElementById('generate-pin').addEventListener('click', function () {
    const pin = getPin();

    const displayPin = document.getElementById('display-pin');
    displayPin.value = pin;
})

document.getElementById('calculator').addEventListener('click', function () {
    const number = event.target.innerText;
    const typedNumberField = document.getElementById('typed-numbers');
    const previousTypedNumber = typedNumberField.value;
   
    if (isNaN(number)) {
        console.log(number);
        if (number == 'C') {
            typedNumberField.value = '';
        }
        else if (number == '<')
        console.log();
        const digits = previousTypedNumber.split('');
        digits.pop();
        const remainingDigits = digits.join('');
    
            // split the digits in a array
           
        // pop the last element
       
        // join the digits again
       
        typedNumberField.value = remainingDigits;
    }
    else {
        const newTypedNumber = previousTypedNumber + number;
        typedNumberField.value = newTypedNumber;
    }

})

document.getElementById('verify-pin').addEventListener('click', function(){
    const displayPin = document.getElementById('display-pin');
    const currentPinFiled = displayPin.value;

    const typedNumberField = document.getElementById('typed-numbers');
    const typeNumber = typedNumberField.value;

    const pinSuccessMessage = document.getElementById('pin-success');
    const pinUnsuccessMessage = document.getElementById('pin-unsuccess');
    if(currentPinFiled === typeNumber){
       
        pinSuccessMessage.style.display = 'block';
        pinUnsuccessMessage.style.display = 'none';
    }
    else{
        
        pinUnsuccessMessage.style.display = 'block';
        pinSuccessMessage.style.display = 'none';
    }


})


