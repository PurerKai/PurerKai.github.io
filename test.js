window.onload = function () {

}
let count = 0;
function addAll() {
    for (count = 1; count < 899; count++) {
        create();
    }
}
function add() {
    create();
}
function back() {
    document.querySelector("img:nth-child(1)").innerHTML="";
}
function create() {
    var num = count.toString().padStart(3, "0");
    url = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${num}.png`
    var img = document.createElement("div");
    img.innerHTML = `<img src="${url}" alt="">`
    document.querySelector(".imgbox").append(img);
    count++;
}