var globel_item = {
    network: "0",
    storage: "0"
}
window.onload = function () {

    getJson("./data.json");
    // https://purerkai.github.io/javascriptexericse/apple/ipadair.json    
}
function createTitle(data) {
    var ul = $q(".nav-pills");
    for (const i in Object.keys(data)) {
        var id = Object.keys(data)[i];
        let cloneNav = $q('#pill-links').content.cloneNode(true);
        let btn = cloneNav.querySelector("button");
        btn.setAttribute("data-bs-toggle", "pill");
        btn.innerHTML = id;
        if (i == 0) {
            btn.classList.add("active");
        }
        ul.append(cloneNav);
        btn.addEventListener("click", (e) => {
            $q(`#price-span`).innerHTML = "";
            createContent(data, e.target.innerHTML);
            globel_item.storage= "0";
            globel_item.network= "0";
        })
    }
}
function createContent(data, id) {
    let banner = $q("#banner-img");
    banner.setAttribute("src", "./img/" + id + "-all.jpg");

    let color_list = $q("#color-list");
    color_list.innerHTML = "";
    for (const color of Object.keys(data[id].color)) {
        let cloneContent = $q('#temp-color').content.cloneNode(true);
        var box = cloneContent.querySelector("li");
        box.addEventListener("click", () => {
            banner.setAttribute("src", "./img/"+id+"-"+ color + ".png");
        })
        box.setAttribute("id", `color-${color}`);
        var img = cloneContent.querySelector("img");
        img.setAttribute("src", "./img/" + color + ".jfif");
        img.setAttribute("alt", color);
        var p = cloneContent.querySelector("p");
        p.innerHTML = data[id].color[color];
        color_list.append(cloneContent);
    }
    let color_li = color_list.querySelectorAll("li");
    for (const node of color_li) {
        node.addEventListener("click", e => {
            var id = node.id;
            for (const n of color_li) {
                n.classList.remove("border")
            }
            $q(`#${id}`).classList.add("border");
        })
    }

    let storage_list = $q("#storage-list");
    storage_list.innerHTML = "";
    for (const storage of Object.keys(data[id].storage)) {
        let cloneContent = $q('#temp-storage').content.cloneNode(true);
        var box = cloneContent.querySelector("li");
        box.setAttribute("id", `storage-${storage}`);
        box.addEventListener("click", () => {
            globel_item.storage = data[id].storage[storage]
            showPrice();
        })
        var p = cloneContent.querySelector("p");
        p.innerHTML = storage;
        storage_list.append(cloneContent);
    }
    let storage_li = storage_list.querySelectorAll("li");
    for (const node of storage_li) {
        node.addEventListener("click", e => {
            var id = node.id;
            for (const n of storage_li) {
                n.classList.remove("border")
            }
            $q(`#${id}`).classList.add("border");
        })
    }

    let network_list = $q("#network-list");
    network_list.innerHTML = "";
    if(data[id].network != undefined){
        for (const network of Object.keys(data[id].network)) {
            let cloneContent = $q('#temp-network').content.cloneNode(true);
            var box = cloneContent.querySelector("li");
            box.setAttribute("id", `network-${network}`);
            box.addEventListener("click", () => {
                globel_item.network = data[id].network[network]
                showPrice();
            })
            var p = cloneContent.querySelector("p");
            p.innerHTML = network;
            network_list.append(cloneContent);
        }
        let network_li = network_list.querySelectorAll("li");
        for (const node of network_li) {
            node.addEventListener("click", e => {
                var id = node.id;
                for (const n of network_li) {
                    n.classList.remove("border")
                }
                $q(`#${id}`).classList.add("border");
            })
        }
    }

}
function getJson(url) {
    fetch(url)
        .then(response => {
            return response.json();
        })
        .then(data => {
            createTitle(data);
        });
}

function $q(node) {
    let nodelist = document.querySelectorAll(node);
    if (nodelist.length == 0)
        return null;
    return nodelist.length == 1 ? nodelist[0] : nodelist;
}
function showPrice() {
    $q(`#price-span`).innerHTML = parseInt(globel_item.storage) + parseInt(globel_item.network);
}