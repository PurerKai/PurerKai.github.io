let input = document.querySelector("input")
let div = document.querySelector(".answerbox")
let arr = [];
let anser;
window.onload = function () {
    replay()
}
function replay() {
    getRan();
    div.innerHTML = ""
    clear();
}
function clear() {
    input.value = ""
}
function answer() {
    alert(`答案是${anser}`)
}
function getRan() {
    arr = [];
    for (i = 0; i < 4; i++) {
        ran = Math.floor(Math.random() * 9) + 1;
        for (j = 0; j < arr.length; j++) {
            if (arr[j] == ran) {
                arr.splice(j, 1);
                i--;
            }
        }
        arr.push(ran);
    }
    anser = arr.toString().replaceAll(",", "");
}
function check() {
    if (input.value.length != 4 || !Number(input.value)) {
        alert("請輸入4個數字")
        clear()
        console.log("請輸入4個數字");
        return;
    }
    else if (repeatS(input.value)) {
        alert("請輸入4個不重複數字")
        clear()
        console.log("重複");
        return;
    }
    look()
    console.log("正常");
    clear()
}
function repeatS(a) {
    arr = Array.from(a);
    result = new Set();
    bool = false
    arr.forEach(item => {
        if (result.has(item)) {
            bool = true
        }
        else {
            result.add(item);
        }
    })
    return bool;
}
function look() {
    var a = 0, b = 0
    arr = Array.from(input.value);
    arr2 = Array.from(anser);
    console.log(arr);
    console.log(arr2);
    for(var z in arr){
        if(arr2.indexOf(arr[z]) != -1){
            b++;
            if (arr2.indexOf(arr[z])==z) {
                a++
                b--
            }
        }
    }
    if (a >= 4) {
        div.innerHTML += `<div><span class="btn btn-success">${a}A${b}B</span>${input.value}</div>`
        alert("恭喜答對")
    }
    else
        div.innerHTML += `<div><span class="btn btn-danger">${a}A${b}B</span>${input.value}</div>`
}