function exchange() {
    var amount = parseInt(document.getElementById("amountId").value);
    var fromUnit = document.getElementById("fromUnit").value;
    var toUnit = document.getElementById("toUnit").value;
    var examount;
    if (fromUnit === toUnit) {
        examount = amount;
    } else {
        if (fromUnit === "Feet" && toUnit === "Meter") {
            examount = amount * 0.305;
        } else if (fromUnit === "Meter" && toUnit === "Feet") {
            examount = amount * 3.279;
        }
    }
    document.getElementById("showResult").innerHTML = "Result is " + examount;

}