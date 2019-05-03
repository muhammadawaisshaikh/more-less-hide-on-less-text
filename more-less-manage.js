$(document).ready(function () {

  if( ($(" .summary span ").text()).length < 352 ) {
    $(".less-more").css("display", "none");
  }

  $(".more").click(function() {
    $(".summary").toggleClass('expand');
    $(".less").toggleClass('active');
    $(this).toggleClass('hide');
  });

  $(".less").click(function() {
    $(".summary").toggleClass('expand');
    $(this).toggleClass('active');
    $(".more").toggleClass('hide');
  });

});
