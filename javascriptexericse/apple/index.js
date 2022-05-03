var globel_item = {
    network: "0",
    storage: "0"
}
window.onload = function () {
    getJson("./data.json");
    // https://purerkai.github.io/javascriptexericse/apple/ipadair.json    
}
function createTitle(data) {
    var pills = $q("#pills-tab1");
    for (const type of Object.keys(data)) {
        let cloneNav = $q('#temp-pills-tab1').content.cloneNode(true);
        let btn = cloneNav.querySelector("button");
        btn.setAttribute("data-type", type);
        btn.innerHTML = type;
        btn.addEventListener("click", () => {
            let Main = $q(".item-content");
            Main.innerHTML = "";
            $q(`#pills-tab2`).innerHTML = "";
            for (const item in data[type]) {
                let cloneNav2 = $q('#temp-pills-tab1').content.cloneNode(true);
                let btn2 = cloneNav2.querySelector("button");
                btn2.setAttribute("data-item", item);
                btn2.innerHTML = item;
                btn2.addEventListener("click", () => {
                    createContent(data[type], item)
                })
                $q(`#pills-tab2`).append(cloneNav2)
            }
        })
        pills.append(cloneNav);
    }
}
function createContent(data, id) {
    setBanner("./img/all-" + id + ".jpg")
    let Main = $q(".item-content");
    Main.innerHTML = "";
    for (const x of Object.keys(data[id])) {
        let clist = $q('#temp-list').content.cloneNode(true).querySelector("div");
        clist.setAttribute("id", `${id}-${x}-list`)
        for (const attr of Object.keys(data[id][x])) {
            let citem = $q('#temp-list-item').content.cloneNode(true);
            citem.addEventListener("click", () => {
                banner.setAttribute("src", "./img/" + id + "-" + color + ".png");
            })
            citem.querySelector(".col").setAttribute("id", `${attr}`);
            var img = citem.querySelector("img");
            img.setAttribute("src", "./img/color-" + attr + ".jfif");
            img.setAttribute("alt", `color-${attr}`);
            var p = citem.querySelector("p");
            p.innerHTML = data[id][x][attr];
            clist.appendChild(citem);
        }
        Main.append(clist);
        if (Object.keys(data[id]).indexOf("size")!=-1)
            clickColorImg(Main,id,x,`./img/${id}-11`);
        else
            clickColorImg(Main,id,x,`./img/${id}`);
    }
}
function clickColorImg(m,id,x,url) {
    let ul = m.querySelectorAll(`#${id}-${x}-list>div`);
    for (const li of ul) {
        li.addEventListener("click", e => {
            for (const i of ul) {
                i.querySelector("div").classList.remove("border-primary");
            }
            li.querySelector("div").classList.add("border-primary");
            if (x == "color")
                setBanner(url+`-${li.id}.png`);
        })
    }
}
function setBanner(url) {
    let banner = $q("#banner-img");
    banner.setAttribute("src", url);
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