var num1 = parseInt(prompt("Please enter a number."));
var opFunction = prompt("Please enter an operation symbol such as +, -, *, and /.");
var num2 = parseInt(prompt("Please enter another number."));

if (opFunction === '+') {
    console.log('Your answer to ' + num1 + ' + ' + num2 + ' = ' + (num1 + num2))
}
else if (opFunction === '-') {
    console.log('Your answer to ' + num1 + ' - ' + num2 + ' = ' + (num1 - num2))
}
else if (opFunction === '*') {
    console.log('Your answer to ' + num1 + ' * ' + num2 + ' = ' + (num1 * num2))
}
else if (opFunction === '/') {
    console.log('Your answer to ' + num1 + ' / ' + num2 + ' = ' + (num1 / num2))
}
else alert('You have either input an invalid operation or number.')



// function add(num1, num2) {
//     return (num1 + num2)
// }

// function subtract(num1, num2) {
//     return (num1 - num2)
// }

// function multiply(num1, num2) {
//     return (num1 * num2)    
// }
// function divide(num1, num2) {
//     return (num1 / num2)
// }