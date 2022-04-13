

$(document).ready(function () {   
    $('.flower').click(function () {
      $('p').toggle();
    });
    

  $('.keyboard').click(function () {
        $(this).toggleClass("smaller");
    });
    

    $(function () {
        $(".flower").draggable();
    });  
});  