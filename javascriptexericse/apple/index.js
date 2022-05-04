let json;
window.onload = function () {
    const main = $q("#main-content");
    const pills = $q("#pills-nav");
    const tab = $q("#pills-tab");
    const banner = $q("#banner-img");


    getJson("./data.json");

    function createTab() {
        for (var model of Object.keys(json)) {
            let li = $q('#temp-pills-item').content.cloneNode(true);
            let btn = li.querySelector("button");
            btn.innerHTML = model;
            btn.addEventListener("click", (e) => {
                createNav(json[e.target.innerHTML]);
            })
            tab.append(li);
        }
    }
    function createNav(data) {
        setBanner("")
        main.innerHTML = "";
        pills.innerHTML = "";
        for (var type of Object.keys(data)) {
            let li = $q('#temp-pills-item').content.cloneNode(true);
            let btn = li.querySelector("button");
            btn.innerHTML = type;
            btn.addEventListener("click", (e) => {
                createMain(data[e.target.innerHTML], e.target.innerHTML)
            })
            pills.append(li)
        }
    }
    function createMain(data, id) {
        main.innerHTML = "";
        setBanner("./img/all-" + id + ".jpg")
        for (var attr of Object.keys(data)) {
            var title = document.createElement("h2");
            title.innerHTML = attr;
            title.classList.add("text-center");
            main.append(title);
            createList(data[attr], id, attr);
        }

        var btn = document.createElement("button");
        btn.innerHTML = "查看價格"
        btn.addEventListener("click", () => {
            let selects = $q(".selected");
            var total = 0;
            if (selects == null)
                return
            if (Array.from(selects).length == 0) {
                number = data[selects.getAttribute("data-attr")][selects.getAttribute("data-value")]
                if (parseInt(number)) {
                    total += parseInt(number);
                }
            } else {
                for (var i of selects) {
                    number = data[i.getAttribute("data-attr")][i.getAttribute("data-value")]
                    if (parseInt(number))
                        total += parseInt(number);
                }
            }
            alert("目前選購最少需要"+total+"元");
        })
        main.append(btn)
    }
    function createList(data, id, attr) {
        let clist = $q('#temp-list').content.cloneNode(true).querySelector("div");
        clist.setAttribute("id", `${id}-${attr}-list`);
        for (var item of Object.keys(data)) {
            let citem = $q('#temp-list-item').content.cloneNode(true);
            citem.querySelector(".list-item>div").setAttribute("data-attr", attr);
            citem.querySelector(".list-item>div").setAttribute("data-value", item);
            let p = citem.querySelector("p");
            if (attr == "color") {
                var img = document.createElement("img");
                img.setAttribute("src", "./img/color-" + item + ".jfif");
                img.setAttribute("alt", `color-${item}`);
                citem.querySelector(".list-item").addEventListener("click", (e) => {
                    color = e.target.parentNode.querySelector("p").innerHTML;
                    setBanner(`./img/${id}-${color}.png`);
                })
                citem.querySelector("p").before(img);
            }
            p.innerHTML = item;
            clist.appendChild(citem);
        }
        main.append(clist);
        setSelected(`#${id}-${attr}-list>div`);
    }
    function setBanner(url) {
        banner.setAttribute("src", url);
    }
    function setSelected(url) {
        let ul = $q(url);
        for (const li of ul) {
            li.addEventListener("click", () => {
                for (var all of ul) {
                    all.querySelector("div").classList.remove("border-primary", "selected");
                }
                li.querySelector("div").classList.add("border-primary", "selected");
            })
        }
    }
    function getJson(url) {
        fetch(url)
            .then(response => {
                return response.json();
            })
            .then(data => {
                json = data;
                createTab();
            });
    }
}

function $q(node) {
    let nodelist = document.querySelectorAll(node);
    if (nodelist.length == 0)
        return null;
    return nodelist.length == 1 ? nodelist[0] : nodelist;
}
