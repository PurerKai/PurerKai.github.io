
$(".d456").click(function (e) {
    $(".d456").removeClass("know")
    $(this).addClass("know")
    $('.tab').addClass("fade")
    $(`${$(this).data('look')}`).removeClass("fade")
});
