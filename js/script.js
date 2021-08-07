
$(".navbar-p").hover(function(){
    $(".navbar-p").css("animation-play-state","running");
    $(".navbar-p2").css("animation-play-state","running");
} , function(){
      $(".navbar-p").css("animation-play-state","paused");
    $(".navbar-p2").css("animation-play-state","paused"); 
})

window.onload=function(){
  document.querySelector(".preloader").classList.toggle("hide")
}





$(".second-scale").height($(".img2").height());

$(".second-part img").hover(function(){
    $(this).addClass("choosen");
} , function(){
   $(this).removeClass("choosen");
});

$("img.feature-img ").height($(".part").height()+160)



$('.icons').slick({
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 6,
    autoplay: true,
  autoplaySpeed: 1500,
    centerMode: true,
    focusOnSelect: true,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 2,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  });



