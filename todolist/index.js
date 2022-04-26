var todolist = [];
var id = 1;
function addList() {
    var _title = document.querySelector("#title");
    var _message = document.querySelector("#message");

    if (_message.value == "" || _title.value == "")
        alert("請輸入標題和內容!!")
    else {
        var newtodo = {
            "_id": id,
            "title": _title.value,
            "message": _message.value,
            "status": false
        };
        todolist.push(newtodo);
        newList(newtodo);
        id++;
        _title.value = ""
        _message.value = ""
    }
}
function newList(data) {
    console.log("新增");
    var status = data.status ? "checked" : "";
    var titleClass = data.status ? "finish" : "undone";
    var messageClass = data.status ? "finish" : "undone";
    var editClass = data.status ? "none" : "inline";

    var content = document.createElement("div");
    content.setAttribute("id", data._id);
    content.setAttribute("class", "content");
    content.innerHTML = `
    <div class="card text-dark bg-light mb-3" style="max-width: 18rem;">
        <div class="card-header">${data.title}</div>
        <div class="card-body">
        <p class="card-text">${data.message}</p>
    </div>
</div>`
    // content.innerHTML = `
    // <div class="${titleClass}">
    //     <input type="checkbox" onclick="changeStatus('${data._id}',this)">
    //     <h2 id="title${data._id}">${data.title}</h2>
    //     <button class="i_btn" onclick="removeList('${data._id}')">刪除</button>
    //     <button id="edit${data._id}" class="i_btn" onclick="editList('${data._id}')" style="display:${editClass}">修改</button>
    //     <button id="update${data._id}" class="i_btn" onclick="updateList('${data._id}')" style="display:none">刪除</button>
    // </div>
    // <div class="${messageClass}">
    //     <p id="message${data._id}">${data.message}</p>
    // </div>
    // `
    document.querySelector(".list-box").append(content);
}
function changeStatus(e) {
    document.querySelector("#e")

}