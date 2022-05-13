$(".enter").click(function() {
let searchInput= $(".input").val();
    console.log(searchInput);
    });

$(".enter").hover(function() {
   $(".enter").css("background-color","white");
    });

$(".pic").click(function() {
   $(".pic") .hide();
     $(".newpic") .show();
    });