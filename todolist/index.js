let todolist = [];
let count = 1;
function addList() {
    var _message = $q("#message");
    if (_message.value.trim() == "")
        alert("請輸入內容!!")
    else {
        let newtodo = {
            "id": count,
            "message": _message.value,
            "status": false
        };
        todolist.push(newtodo);
        showList(newtodo);
        count++;
        _message.value = ""
    }
}
function clearList() {
    $q(".list-box").innerHTML = "";
}
function showList(data) {
    let content = document.createElement("div");
    content.setAttribute("id", `box${data.id}`);
    content.setAttribute("class", "content col");
    content.innerHTML = `
    <div id="tt${data.id}" class="m-auto card text-dark bg-light mb-3">
        <div class="card-header d-flex justify-content-between align-items-center">
            <div class="card-title m-0">
                <input id="checkbox${data.id}"  type="checkbox" onclick="changeStatus('${data.id}',this)"/>
                <label id="label${data.id}" for="checkbox${data.id}">未完成</label>
                <span id="message${data.id}" class="card-text ms-4">${data.message}</span>
            </div>
            <div class="btn-group">
                <button id="edit${data.id}" type="button" class="btn bg-warning" onclick="edit('${data.id}')">修改</button>
                <button id="doit${data.id}" type="button" class="btn bg-success text-white d-none" onclick="doit('${data.id}')">確認</button>
                <button type="button" class="btn  bg-danger text-white" onclick="removelist('${data.id}')">刪除</button>
            </div>
        </div>
    </div>`
    if (data.status == true) {
        content.innerHTML = `
    <div id="tt${data.id}" class="m-auto card text-dark bg-info mb-3">
        <div class="card-header d-flex justify-content-between align-items-center">
            <div class="card-title m-0">
                <input id="checkbox${data.id}"  type="checkbox" onclick="changeStatus('${data.id}',this)"  checked/>
                <label id="label${data.id}" for="checkbox${data.id}">已完成</label>
                <span id="message${data.id}" class="card-text ms-4 text-decoration-line-through">${data.message}</span>
                </div>
                <div class="btn-group">
                <button id="edit${data.id}" type="button" class="btn bg-warning d-none" onclick="edit('${data.id}')">修改</button>
                <button id="doit${data.id}" type="button" class="btn bg-success text-white d-none" onclick="doit('${data.id}')">確認</button>
                <button type="button" class="btn  bg-danger text-white" onclick="removelist('${data.id}')">刪除</button>
                </div>
                </div>
                </div>`
    }
    $q(".list-box").append(content);
}
function edit(id) {
    show($q("#doit" + id));
    hide($q("#edit" + id));

    var input = document.createElement('input');
    input.type = "text";
    input.id = "edit_message" + id;
    input.value = $q("#message" + id).innerHTML;
    hide($q("#message" + id));
    $q("#message" + id).parentNode.appendChild(input);
}
function doit(id) {
    $q("#message" + id).innerHTML = $q("#edit_message" + id).value;
    $q("#edit_message" + id).remove();
    show($q("#message" + id));

    var index = todolist.findIndex(i => i.id == id);
    todolist[index].message = $q("#message" + id).innerHTML;

    hide($q("#doit" + id))
    show($q("#edit" + id))
}
function removelist(id) {
    var index = todolist.findIndex(i => i.id == id);
    var sure = window.confirm(`你確定要刪除嗎?`);
    if (sure == true) {
        $q("#box" + id).remove();
        todolist.splice(index, 1);
    }
    else alert("取消刪除。")
}
function sent() {
    console.log(JSON.stringify(todolist));
    alert(JSON.stringify(todolist))
}
function changeStatus(id, btnstatus) {
    console.log(id);
    var index = todolist.findIndex(i => i.id == id);
    todolist[index].status = btnstatus.checked;
    if (btnstatus.checked == true) {
        $q("#tt" + id).classList.add('bg-info');
        $q("#tt" + id).classList.remove('bg-light');
        hide($q('#edit' + id));
        hide($q('#doit' + id));
        if ($q("#edit_message" + id) != null) {
            $q("#edit_message" + id).remove();
            show($q("#message" + id));
        }
        $q("#message" + id).classList.add('text-decoration-line-through');
        $q("#label" + id).innerText = "已完成";
    } else {
        $q("#tt" + id).classList.remove('bg-info');
        $q("#tt" + id).classList.add('bg-light');
        show($q('#edit' + id));
        $q("#message" + id).classList.remove('text-decoration-line-through');
        $q("#label" + id).innerText = "未完成";
    }
}
function $q(node) {
    let nodelist = document.querySelectorAll(node);
    if (nodelist.length == 0)
        return null;
    return nodelist.length == 1 ? nodelist[0] : nodelist;
}
function show(dom) {
    dom.classList.remove('d-none')
}
function hide(dom) {
    dom.classList.add('d-none');
}
function saveData() {
    var c = JSON.stringify(todolist)
    localStorage.setItem('note', c);
    console.log(localStorage.getItem("note"));
    alert("保存成功")
}
function loadData() {
    let json = JSON.parse(localStorage.getItem('note'));
    if (json == null || json.length == 0) {
        alert("目前沒有儲存的資料")
        return;
    }
    console.log(json);
    todolist = json;
    count = (todolist[todolist.length - 1].id) + 1;
    clearList();
    for (const item of todolist) {
        showList(item)
    }
}
function delData() {
    localStorage.clear()
    todolist = [];
    count = 1;
    alert("已刪除資料");
    clearList();
}