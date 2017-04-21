$(window).load(
    function() {
        document.getElementById("hotend").style.animationPlayState = "running";
        document.getElementById("layer1").style.animationPlayState = "running";
        document.getElementById("layer2").style.animationPlayState = "running";
        document.getElementById("layer3").style.animationPlayState = "running";
        $(".loadcss").animate({
            "opacity": 1
        }, 750);
        $(".print").animate({
            "opacity": 1
        }, 750);
        $(".assist").animate({
            "opacity": 1
        }, 750);
        setTimeout(function() {
            $(".loadcss").animate({
                "opacity": 0
            }, 1100);
            $(".print").animate({
                "opacity": 0
            }, 1100);
            $(".assist").animate({
                "opacity": 0
            }, 1100);
        }, 1100);
        setTimeout(function() {
            $(".welcomeScreen").animate({
                "height": "0px"
            }, 900);
        }, 2300);
        setTimeout(function() {
            jQuery('.header').css({
                position: 'fixed'
            });
            $(".main").css("margin-top", "40px");
            $(".welcomeScreen").hide();
        }, 3400);
    });

jQuery(document).ready(function($) {

    var slideCount = $('.aboutSlide ul li').length;
    var slideWidth = $('.aboutSlide ul li').width();
    var slideHeight = $('.aboutSlide ul li').height();
    var sliderUlWidth = slideCount * slideWidth;


    $('.aboutSlide').css({
        width: slideWidth,
        height: slideHeight
    });

    $('.aboutSlide ul').css({
        width: sliderUlWidth,
        marginLeft: -slideWidth
    });

    $('.aboutSlide ul li:last-child').prependTo('.aboutSlide ul');

    function moveLeft() {
        $('.aboutSlide ul').animate({
            left: +slideWidth
        }, 1000, function() {
            $('.aboutSlide ul li:last-child').prependTo('.aboutSlide ul');
            $('.aboutSlide ul').css('left', '');
        });
    };

    function moveRight() {
        $('.aboutSlide ul').animate({
            left: -slideWidth
        }, 1000, function() {
            $('.aboutSlide ul li:first-child').appendTo('.aboutSlide ul');
            $('.aboutSlide ul').css('left', '');
        });
    };

    $('.leftSelector').click(function() {
        moveLeft();
    });

    $('.rightSelector').click(function() {
        moveRight();
    });

});
