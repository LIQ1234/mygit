$(function(){
    $(".menu_open").on("click",function(){
        $(".small_nav").slideDown(1000);
        $(".header").hide();
        $(".banner").hide();
        $(".pic").hide();
        $("footer").hide();
    })
    $(".menu_close").on("click",function(){
        $(".small_nav").slideUp(1000);
        $(".header").show();
        $(".banner").show();
        $(".pic").show();
        $("footer").show();
    })
    $(".footcen label").on("click",function(){
        $(this).siblings(".foot_son").toggle(500);
    })
})