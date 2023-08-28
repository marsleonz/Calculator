console.log('calculator');
const add = (first,second) =>{
    return first + second;
}

const subtract = (first,second) =>{
    return first - second;
}
const multiply = (first,second) =>{
    return first * second;
}
const divide = (first,second) =>{
    return first / second;
}

let firstNumber = 0;
let secondNumber = 0;
let operator = '+';
let delimiter;
const operate = (firstNumber,secondNumber,operator) =>{
    switch(operator){
        case '+':
            return (add(firstNumber,secondNumber));
        case '-':
            return (subtract(firstNumber,secondNumber));
        case '*':
            return (multiply(firstNumber,secondNumber));
        case '/':
            return (divide(firstNumber,secondNumber))
    }
} 

operate(firstNumber,secondNumber,operator);

const buttons = document.querySelectorAll('button');
const display = document.querySelector('.display');

buttons.forEach((button) =>{
    button.addEventListener('click',()=>{
        let newArray = display.textContent.split( delimiter);
        console.log(newArray)
        if (button.textContent == '+' || button.textContent == '-' || button.textContent == '*' || button.textContent == '/'){
           
            if (newArray.length ==2){
                firstNumber = +newArray[0];
                secondNumber = +newArray[1];
                operator = delimiter;
                console.log('1',operator);
                display.textContent = operate(firstNumber,secondNumber,operator);
            }

            delimiter = button.textContent;
        }
        
        if (newArray.length == 2){
            firstNumber = +newArray[0];
            secondNumber = +newArray[1];
            operator = delimiter;
            console.log('2',operator);
        }
        
        if (button.textContent == '='){
            display.textContent = operate(firstNumber,secondNumber,operator);
            firstNumber = 0;
            secondNumber = 0;
        }
        else if(button.textContent == 'CLEAR'){
            display.textContent = '0';
        }else if (button.textContent =='DELETE'){
            display.textContent = display.textContent.slice(0,-1);
        }
        else
        {
            display.textContent = display.textContent + button.textContent;
        }
        
    })
})