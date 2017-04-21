jQuery(document).ready(function($) {
    var int = setInterval(moveRight, 10000);

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
        clearInterval(int);
        int = setInterval(moveRight, 10000);
        moveLeft();
    });

    $('.rightSelector').click(function() {
        clearInterval(int);
        int = setInterval(moveRight, 10000);
        moveRight();
    });

});
