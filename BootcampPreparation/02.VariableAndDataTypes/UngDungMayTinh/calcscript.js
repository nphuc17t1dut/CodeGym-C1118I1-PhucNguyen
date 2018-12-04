var number1;
var number2;
function addition(){
    number1 = parseInt(document.getElementById("number1").value);
    number2 = parseInt(document.getElementById("number2").value);
    var addition = number1 + number2 ;
    document.getElementById("result").innerHTML = "Result Addition : " + addition; 
}
function subtraction(){
    number1 = parseInt(document.getElementById("number1").value);
    number2 = parseInt(document.getElementById("number2").value);
    var subtraction = number1 - number2;
    document.getElementById("result").innerHTML = "Result Subtraction : " + subtraction;
}
function multiplication(){
    number1 = parseInt(document.getElementById("number1").value);
    number2 = parseInt(document.getElementById("number2").value);
    var multiplication = number1 * number2;
    document.getElementById("result").innerHTML = "Result Multiplication : " + multiplication;
}
function division(){
    number1 = parseInt(document.getElementById("number1").value);
    number2 = parseInt(document.getElementById("number2").value);
    var division = number1 / number2;
    document.getElementById("result").innerHTML = "Result Division : " + division;
}
