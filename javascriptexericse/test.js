let headimg = "img/img0.jpg";
let imgArray = [
    "img/img1.jpg",
    "img/img2.jpg",
    "img/img3.jpg"
];
let person = {
    "姓名": "凱凱",
    "Email": "kaikai@gmail.com",
    "學校": "chu university",
    "興趣": "game"
}
const body = document.querySelector('body');

body.innerHTML += `<img src="${headimg}"><br>`;
for (var i in person) {
    body.innerHTML += `${i} :${person[i]}<br>`;
}
for (var i of imgArray) {
    body.innerHTML += `<img src="${i}" >`;
}
