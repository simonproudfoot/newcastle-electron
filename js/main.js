$(document).ready(function () {
  var attractor = true;
  $(".loader").fadeOut();
  $(".attractor").click(function () {
    attractor = false;
    $(this).fadeOut();
    //remove vid after one sec to remove system load
    var remover = function () {
      $(".attractor").fadeOut();
    };
    setTimeout(remover, 1000);
  })
  $(".owl-carousel").owlCarousel({
    items: 3,
    autoplay: false,
    autoplayTimeout: 9000,
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
  $(".back").on("click", function (event) {
    $(event.target).closest("div").fadeOut();
  });
  //home btn
  $(".home").click(function () {
    $(".bg,.bg-grey").fadeOut();
  })
  //Dynamic page loader based on data name
  $("[class*='btn-']").on("click", function () {
    $(".page-" + $(this).attr("data-name")).fadeIn(500);
  });

  //Lucky Dip Button
  //var allLinks = ['localexplorer:C:/scripts/wiwtk.vbs','localexplorer:C:/scripts/aiadw.vbs','localexplorer:C:/scripts/tabaconist.vbs','localexplorer:C:/scripts/apothecary.vbs'];
  var allLinks = ['1', '2', '3', '4', '5', '6', '7a', '7b', '7c', '8', '9a', '9b', '10', '11', '12a', '12b', '13', '14a', '14b', '16', '17b', '18a', '18b', '19', '20a', '20b', '20c']
  $(".btn-lucky").click(function () {
    var randomizer = Math.floor(Math.random() * allLinks.length);
    $('.page-' + allLinks[randomizer]).fadeIn(500);
    const clean = allLinks[randomizer].replace(/\D/g, '')
    let newString = clean.toString()
    const difference = Math.abs(clean.length - 4)
    let xes = ''
    let n = 0;
    while (n < difference) {
      newString += 'X'
      n++;
    }
    sendPacket(newString)
  })
  //Idle timeout
  $(function () {
    $(document).idleTimer(120000); //set to 2 minutes
    $(document).on("idle.idleTimer", function (event, elem, obj) {
      if (attractor == false) {
        //send UDP reset
        $(".attractor").trigger("click");
        //fade loader in
        $(".loader").fadeIn(500);
        //refresh
        var ice = function () {
          location.reload();
          console.log('reseting')
          sendPacket('RESET')
        };


        setTimeout(ice, 1000);
      }
    });
  });
});
