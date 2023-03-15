$(document).ready(function () {
    //handle navbar responsive
    $(".nav-mobile, .nav-item, .btn-login, .btn-startnow").click(function () {
        $(".nav, .user-btn").toggleClass("show-menu show-btn")
    });

    $(".logo").click(function () {
        $("html, body").animate({ scrollTop: 0 }, 1000);
    });
    $(".nav-features").click(function () {
        var offset = -45; //Offset of -10px
        $('html, body').animate({
            scrollTop: $("#features").offset().top + offset
        }, 1000);
    });

    //handle hover
    $(".btn-startnow, .btn-trial").hover(function () {
        $(this).css("background-color", "#365ca2");
    }, function () {
        $(this).css("background-color", "#3C64B1");
    });
    $(".btn-login").hover(function () {
        $(this).css("border", "1px solid #3C64B1");
        $(this).css("background-color", "#d1deff");
    }, function () {
        $(this).css("border", "1px solid #EFF3FF");
        $(this).css("background", "none");
    });
    $(".btn-more").hover(function () {
        $(this).css("background-color", "#d1deff");
    }, function () {
        $(this).css("background", "none");
    });
    $("img").hover(function () {
        $(this).css("transform", "scale(1.125)");
    }, function () {
        $(this).css("transform", "scale(1)");
    });

});