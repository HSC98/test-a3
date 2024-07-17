$(function(){
    $(".main > li").hover(function(){
        $(this).find(".sub").stop().slideDown();
    },function(){
        $(".main > li").find(".sub").stop().slideUp();
    })


    $(".fade li").eq(0).siblings().hide();
    
    var i = 0;

    setInterval(function(){
        i = (i + 1) % 3;
        console.log(i)

        $(".fade li").eq(i).fadeIn().siblings().fadeOut();


    }, 3000)
})