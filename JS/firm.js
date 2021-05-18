$(function(){
  $(".flip").click(
    function () {
      $(".panel").toggleClass("fade")
  });
});

$(".hover").mouseleave(
  function () {
    $(this).removeClass("hover");
  }
);