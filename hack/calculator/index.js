let input = document.querySelector("input")
let btn = document.querySelectorAll(".num")
let num1 = null,dowhy,total=null;
let span = document.querySelector("#basic-addon1")
for (var i of btn) {
    i.value = i.innerHTML;
    i.addEventListener("click", function (event) {
        if (input.value == "")
            input.value += 0;
        input.value += event.target.value;
    });
}

function back() {
    if (input.value != null) {
        input.value = input.value.slice(0, -1)
    }
}
function del() {
    input.value = ""
    dowhy = "";
    num1 = null;
    total = null;
}
function add() {
    span.innerHTML = "+";
    if (num1 == null)
        num1 = parseFloat(input.value);
    else
        num1 = num1 + parseFloat(input.value);
    dowhy = "+"
    console.log(num1);
    input.value = ""
}
function reduce() {
    span.innerHTML = "-";
    if (num1 == null)
        num1 = parseFloat(input.value);
    else
        num1 = num1 - parseFloat(input.value);
    dowhy = "-"
    console.log(num1);
    input.value = ""
}
function take() {
    span.innerHTML = "*";
    if (num1 == null)
        num1 = parseFloat(input.value);
    else
        num1 = num1 * parseFloat(input.value);
    dowhy = "*"
    console.log(num1);
    input.value = ""
}
function divide() {
    span.innerHTML = "/";
    if (num1 == null)
        num1 = parseFloat(input.value);
    else
        num1 = num1 / parseFloat(input.value);
    dowhy = "/"
    console.log(num1);
    input.value = ""
}
function percentage() {
    span.innerHTML = "%";
    if (num1 == null)
        num1 = parseFloat(input.value);
    else
        num1 = num1 / 100 * parseFloat(input.value);
    dowhy = "%"
    console.log(num1);
    input.value = ""
}
function doMath() {
    span.innerHTML = "=";
    if (dowhy == "+")
        total = num1 + parseFloat(input.value);
    else if (dowhy == "-")
        total = num1 - parseFloat(input.value);
    else if (dowhy == "*")
        total = num1 * parseFloat(input.value);
    else if (dowhy == "/")
        total = num1 / parseFloat(input.value);
    else if (dowhy == "%")
        total = num1 / 100 * parseFloat(input.value);
    input.value = total;
}