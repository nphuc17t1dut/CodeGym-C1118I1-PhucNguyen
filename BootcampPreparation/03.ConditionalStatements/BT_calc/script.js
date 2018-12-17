var firstNumber = 0;
var secondNumber = 0;
var operator ;

function result(){
    secondNumber = document.getElementById('display').value;
    switch(operator){
        case '+':
        document.getElementById('display').value = parseInt(firstNumber) + parseInt(secondNumber);
        break;

        case '-':
        document.getElementById('display').value = parseInt(firstNumber) - parseInt(secondNumber);
        break;

        case 'x':
        document.getElementById('display').value = parseInt(firstNumber) * parseInt(secondNumber);
        break;

        case '/':
        document.getElementById('display').value = parseInt(firstNumber) / parseInt(secondNumber);
        break;
    }   
}

function add(){
    firstNumber = document.getElementById('display').value;
    document.getElementById('display').value = '';
    operator = '+';
}

function sub(){
    firstNumber = document.getElementById('display').value;
    document.getElementById('display').value = '';
    operator = '-';
}

function multi(){
    firstNumber = document.getElementById('display').value;
    document.getElementById('display').value = '';
    operator = 'x';
}

function dev(){
    firstNumber = document.getElementById('display').value;
    document.getElementById('display').value = '';
    operator = '/';
}
