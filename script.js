//generating random pin
function getPin(){
    const pin = Math.round(Math.random() * 100000)
    const pinString = pin + ''
    if( pinString.length == 5 ){
        return pin
    }else{
        return getPin()
    }
}
function generatePin(){
    const pin = getPin()
    document.getElementById('display-pin').value = pin
}

//taking input to a calculator body
document.getElementById('key-pad').addEventListener('click',function(event){
    const number = event.target.innerText
    const calcInput = document.getElementById('typed-numbers')
    if(isNaN(number)){
         if(number == 'C'){
            calcInput.value = ''
         }
    }else{
        const previousNumber = calcInput.value
        const newNumber = previousNumber + number
        calcInput.value = newNumber
    }
    
})
//verifying  the pin
function verifyPin(){
    const pin = document.getElementById('display-pin').value
    const typedNumbers = document.getElementById('typed-numbers').value
    const succesNotification = document.getElementById('notify-success')
    const failNotification = document.getElementById('notify-fail')
    if( pin == typedNumbers){
        succesNotification.style.display ='block'
        failNotification.style.display ='none'
       
    } else{
        failNotification.style.display ='block'
        succesNotification.style.display='none'
    }
}