$(document).ready(function () {

  if( ($(" .games-show .summary span ").text()).length < 352 ) {
    $(".less-more").css("display", "none");
  }

  $(".more").click(function() {
    $(".games-show .summary").toggleClass('expand');
    $(".less").toggleClass('active');
    $(this).toggleClass('hide');
  });

  $(".less").click(function() {
    $(".games-show .summary").toggleClass('expand');
    $(this).toggleClass('active');
    $(".more").toggleClass('hide');
  });

});
