$(document).ready(function () {
  $('a.scr1').click(function() {
  $('html, body').animate({
    scrollTop: $("div.logodiv").offset().top
  }, 1000)
}), 
  $('a.scr2').click(function (){
    $('html, body').animate({
      scrollTop: $("div.section2").offset().top
    }, 1000)
  }),
  $('a.scr5').click(function (){
    $('html, body').animate({
      scrollTop: $("div.section5").offset().top
    }, 1000)
  }),
  $('a.scr3').click(function (){
    $('html, body').animate({
      scrollTop: $("div.section3").offset().top
    }, 1000)
  }),
    $('a.scr4').click(function() {
  $('html, body').animate({
    scrollTop: $("div.skroluj").offset().top
  }, 1000)
})
});