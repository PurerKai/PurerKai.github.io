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
    content.setAttribute("class", "content col");
    content.innerHTML = `
    <div class="m-auto card text-dark bg-light mb-3" style="max-width: 18rem;">
        <div class="card-header">
        <input type="checkbox" onclick="changeStatus('${data._id}',this)"/>
            ${data.title}
            <div class="btn-group" role="group" aria-label="Basic outlined example">
                <button type="button" class="btn btn-outline-primary">修改</button>
                <button type="button" class="btn btn-outline-primary">確認</button>
                <button type="button" class="btn btn-outline-primary">刪除</button>
            </div>
        </div>
        <div class="card-body">
            <p class="card-text">${data.message}</p>
        </div>
    </div>`
    document.querySelector(".list-box").append(content);
}
function changeStatus(e) {
    document.querySelector("#e")

}