let container;
let i = 1;
const max = 898;
window.onload = function () {
    container = document.getElementById("container");
}
function displayAll() {
    console.log("aaa");
    resetPokemon()
    for (i = i; i < max; i++) {
        addPokemon();
    }
}

function AddPokemon() {
    if (i > 898) {
        alert("已载入完毕")
        return;
    }
    else{
        addPokemon();
        i++;
    }
}
function addPokemon() {
    let filename = i.toString().padStart(3, "0");
    let pathFile = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${filename}.png`;
    let img = document.createElement("img");
    img.setAttribute("src", pathFile);
    img.addEventListener("click", function (event) {
        container.removeChild(event.target);
    });
    container.appendChild(img);
}
function removePokemon() {
    container.removeChild(container.lastChild);
    i--;
}
function resetPokemon() {
    container.innerHTML = "";
    i=1;
}
