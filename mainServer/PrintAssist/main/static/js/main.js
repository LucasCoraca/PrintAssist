jQuery(document).ready(function($) {
  /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
  particlesJS.load('particles-js', 'static/assets/particlesjs-config.json', function() {
    console.log('callback - particles.js config loaded');
  });
  //welcomeScreen animations
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

  var p=document.getElementById("change"),text=["Aways connected", "Smart","Aways on reach","Aways on sight"],x=0,interval=setInterval(function(){
    x++;if(x===text.length)x=0;
    p.classList.add("hide");
    setTimeout(function(){
        p.innerHTML=text[x];
        p.classList.remove("hide");
    },500);
},5000);

});
