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

let firstNumber = 6;
let secondNumber = 4;
let operator = '+';

const operate = (firstNumber,secondNumber,operator) =>{
    console.log(firstNumber,secondNumber,operator)
    switch(operator){
        case '+':
            console.log(add(firstNumber,secondNumber));
            break;
        case '-':
            console.log(subtract(firstNumber,secondNumber));
            break;
        case '*':
            console.log(multiply(firstNumber,secondNumber));
            break;
        case '/':
            console.log(divide(firstNumber,secondNumber))
    }
} 

operate(firstNumber,secondNumber,operator);