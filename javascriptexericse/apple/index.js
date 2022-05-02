window.onload = ()=>{
    var json=
    let pills=$q("button");
    for (const i of pills) {
        i.innerHTML = i.id
    }

    console.log(pills);
}
function $q(node) {
    console.log(node);
    let nodelist = document.querySelectorAll(node);
    if (nodelist.length == 0)
        return null;
    return nodelist.length == 1 ? nodelist[0] : nodelist;
}