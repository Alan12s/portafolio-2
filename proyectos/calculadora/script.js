function clearScreen() {
    document.getElementById("result").value = "";
}

function deleteLast() {
    var value = document.getElementById("result").value;
    document.getElementById("result").value = value.substring(0, value.length - 1);
}

function appendValue(value) {
    document.getElementById("result").value += value;
}

function calculateResult() {
    var result = document.getElementById("result").value;
    if (result) {
        document.getElementById("result").value = eval(result);
    }
}
