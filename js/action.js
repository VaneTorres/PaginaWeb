$(function(){
    $("section article div p:first-child").on("click",function(){
        $(this).parent().toggleClass("animar");
        $(this).toggleClass("rotateIcon");
        $(this),parent().parent().children("h1").slideToggle("slow");
    });
})