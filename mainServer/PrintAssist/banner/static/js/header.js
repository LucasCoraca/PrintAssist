$(window).load(
    function() {
        $(".navBar a").hover(function() {
            $(this).animate({
                color: "#FFFFFF"
            }, "fast");
        }, function() {
            $(this).animate({
                color: "#ecf0f1"
            }, "fast");
        });
        document.getElementById("aboutB").onclick = function fun() {
            $("#main").scrollTo("#about", 700);
        };
        document.getElementById("newsB").onclick = function fun() {
            $("#main").scrollTo("#news", 700);
        };
    }
);

jQuery.fn.scrollTo = function(elem, speed) {
    var $this = jQuery(this);
    var $this_top = $this.offset().top;
    var $this_bottom = $this_top + $this.height();
    var $elem = jQuery(elem);
    var $elem_top = $elem.offset().top;
    var $elem_bottom = $elem_top + $elem.height();

    if ($elem_top > $this_top && $elem_bottom < $this_bottom) {
        // in view so don't do anything
        return;
    }
    var new_scroll_top;
    if ($elem_top < $this_top) {
        new_scroll_top = {scrollTop: $this.scrollTop() - $this_top + $elem_top};
    } else {
        new_scroll_top = {scrollTop: $elem_bottom - $this_bottom + $this.scrollTop()};
    }
    $this.animate(new_scroll_top, speed === undefined ? 100 : speed);
    return this;
};
