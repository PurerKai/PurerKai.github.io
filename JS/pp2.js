var a = $(".commodity");
var number;

$(a).slick({
    dots: true,
    autoplay: true,
    autoplaySpeed: 5000,
    prevArrow: ` <button class='prev'><svg width="1.5em" height="1.5em" viewBox="0 0 16 16" class="bi bi-chevron-left" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                    </svg></button>`,
    nextArrow: ` <button class='next'><svg width="1.5em" height="1.5em" viewBox="0 0 16 16" class="bi bi-chevron-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                    </svg></button>`
});
$(".click").click(function (e) {
    $(".bigimg").removeClass("hide");
    dobig = 'IMG_pp2/'+$(this).data('img')+'.jpeg';
    number = $(this).data('index');
    console.log("現在是"+number);
    $("#bigimg").attr('src',dobig);
});

$(".fork").click(function (e) {
    $(".bigimg").addClass("hide");
});

$(".prevx").click(function (e) {
    console.log("上一張");
    --number;
    if (number == 0) {
        number = 3;
        dobig=$("#down").attr('src');
        $("#bigimg").attr('src',dobig);
    }
    else if (number == 2) {
        dobig=$("#middle").attr('src');
        $("#bigimg").attr('src',dobig);;
    }
    else if (number == 1) {
        dobig=$("#up").attr('src');
        $("#bigimg").attr('src',dobig);
    }
});

$(".nextx").click(function (e) {
    console.log("下一張");
    ++number;
    if (number == 4) {
        number = 1;
        dobig=$("#up").attr('src');
    $("#bigimg").attr('src',dobig);
    }
    if (number == 2) {
        dobig=$("#middle").attr('src');
    $("#bigimg").attr('src',dobig);
    }
    if (number == 3) {
        dobig=$("#down").attr('src');
    $("#bigimg").attr('src',dobig);
    }
});

