let input = document.querySelector("input")
let btn = document.querySelectorAll(".num")
let num1 = null, dowhy, total = null;
let doo = document.querySelector(".doo");
let span = document.querySelector("#basic-addon1")
for (var i of btn) {
    i.value = i.innerHTML;
    i.addEventListener("click", function (event) {
        input.value += event.target.value;
    });
}
doo.addEventListener("click", function (event) {
    this.value = this.innerHTML;
    if (input.value == "")
        input.value += 0;
    if (input.value.indexOf(".") != -1)
        alert("已經是小數");
    else
        input.value += event.target.value;
    this.disabled = true
});

function back() {
    if (input.value != null) {
        input.value = input.value.slice(0, -1)
    }
    doo.disabled = false
}
function del() {
    input.value = ""
    dowhy = "";
    num1 = null;
    total = null;
    doo.disabled = false
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
    doo.disabled = false
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
    doo.disabled = false
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
    doo.disabled = false
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
    doo.disabled = false
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
    doo.disabled = false
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
    else
        total = parseFloat(input.value);
    input.value = total;
    doo.disabled = false
}