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
            jQuery('.header').css({position: 'fixed'});
            $(".main").css("margin-top", "40px");
            $(".welcomeScreen").hide();
        }, 3400);
    });
