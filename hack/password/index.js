let h2 = document.querySelector("h2");
var aaa=123,bbb=456
h2.innerHTML+=`${aaa} ~~~ ${bbb}`;
aaa=222
h2.innerHTML=`${aaa} ~~~ ${bbb}`;

let btn = document.querySelectorAll(".num");
let input = document.querySelector("input");
let h1 = document.querySelector("h1");
let min = 0, max = 100;
let anser
window.onload = function () {
    replay();
    document.querySelector(".btn-danger").addEventListener("click", function (event) {
        clear()
    })
}

for (var i of btn) {
    i.value = i.innerHTML;
    i.addEventListener("click", function (event) {
        input.value += event.target.value;
        // container.removeChild(event.target);
    });
}
function replay() {
    clear();
    min = 0;
    max = 100;
    anser = Math.floor(Math.random() * 99) + 1;
    show();
    console.log(anser);
};
function clear() {
    input.value = "";
    console.log("clear");
}
function check() {
    let i = parseInt(input.value);
    if (i >= max || i <= min){
        alert("輸入值超出範圍請重新輸入。")
        clear();
        return;
    }
    else if(i == anser){
        alert("恭喜答對 遊戲結束")
        replay();
        return;
    }    
    if(anser>i){
        min=i;
    }
    if(anser<i){
        max=i;
    }
    show();
}
function show() {
    h1.innerHTML = `${min}~${max}`
    input.value = "";
}
