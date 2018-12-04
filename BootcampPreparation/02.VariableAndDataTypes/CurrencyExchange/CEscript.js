function exchange() {
    var amount = parseInt(document.getElementById("amountId").value);
    var fromCurrency = document.getElementById("fromCurrency").value;
    var toCurrency = document.getElementById("toCurrency").value;
    var examount;
    if (fromCurrency === toCurrency) {
        examount = amount;
    } else {
        if (fromCurrency === "VND" && toCurrency === "USD") {
            examount = amount / 23000;
        } else if (fromCurrency === "USD" && toCurrency === "VND"){
            examount = amount * 23000;
        }
    }
    document.getElementById("showResult").innerHTML = "Result is " + examount;

}