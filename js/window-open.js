$(document).ready(function(){

  $(".loader").fadeOut();

  $(".attractor").click(function() {
    $(this).fadeOut();
    //remove vid after one sec to remove system load
    var remover = function(){
        $(".attractor").remove();
    };
    setTimeout(remover, 1000);
  })

  $(".owl-carousel").owlCarousel({
  items: 3,
  autoplay:false,
  autoplayTimeout:9000,
  pagination: false,
  nav: true,
  loop: false,
  dots: false,
  mouseDrag: false,
  touchDrag: true,
  pullDrag: false,
  freeDrag: false,
});

  //back btn
  $(".back").on( "click", function( event ) {
    $(event.target).closest("div").fadeOut();
  });

  //home btn
  $(".home").click(function() {
    $(".bg,.bg-grey").fadeOut();
  })

  //Dynamic page loader based on data name
  $("[class*='btn-']").on("click", function () {
    $(".page-"+$(this).attr("data-name")).fadeIn(500);
  });

  
  //Lucky Dip Button
  var allLinks = ['localexplorer:C:/scripts/wiwtk.vbs','localexplorer:C:/scripts/aiadw.vbs','localexplorer:C:/scripts/tabaconist.vbs','localexplorer:C:/scripts/apothecary.vbs'];
  $(".btn-lucky,.random").click(function() {
    console.log("Lucky dip clicked");

    var randomizer = Math.floor(Math.random()*allLinks.length);

    window.open(allLinks[randomizer ], '_blank');
    window.focus();
  })

  //Idle timeout
  $(function() {
    $(document).idleTimer(18000000); //set to 3 minutes 180000

    $(document).on( "idle.idleTimer", function(event, elem, obj){
      $(".loader").fadeIn(500);
      var ice = function(){
        window.location.replace="index.html";
        console.log('reseting')
        sendPacket('RESET')
      };
      setTimeout(ice, 500);
    });
  });


});
