jQuery(document).ready(function($) {

    var slideCount = $('.news ul li').length;
    var slideWidth = $('.news ul li').width();
    var slideHeight = $('.news ul li').height();
    var sliderUlWidth = slideCount * slideWidth;

    var autoSlide = setInterval(moveRight, 10000);

    $('.news').css({
        width: slideWidth,
        height: slideHeight
    });

    $('.news ul').css({
        width: sliderUlWidth,
        marginLeft: -slideWidth
    });

    $('.news ul li:last-child').prependTo('.news ul');

    function moveLeft() {
        clearInterval(autoSlide);
        autoSlide = setInterval(moveRight, 10000);
        $('.news ul').animate({
            left: +slideWidth
        }, 1000, function() {
            $('.news ul li:last-child').prependTo('.news ul');
            $('.news ul').css('left', '');
        });
    };

    function moveRight() {
        clearInterval(autoSlide);
        autoSlide = setInterval(moveRight, 10000);
        $('.news ul').animate({
            left: -slideWidth
        }, 1000, function() {
            $('.news ul li:first-child').appendTo('.news ul');
            $('.news ul').css('left', '');
        });
    };

    $('.leftSelector').click(function() {
        moveLeft();
    });

    $('.rightSelector').click(function() {
        moveRight();
    });

});
