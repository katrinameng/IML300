$('document').ready(function () {
    $('.proj').hover(function () {
        $('.euphoria').toggle();
    });
    
     $('.cup').hover(function () {
        $('.quote').toggle();
    });
    
    $(function () {
        $('.pixel').draggable();
    });
    
     $(function () {
        $('.text1').draggable();
    });
    
     $(function () {
        $('.text2').draggable();
    });
    
 $('.lamp1').click(function () {
        $('.text1').toggle();
    });
    
     $('.lamp2').click(function () {
        $('.text2').toggle();
    });
    
      $(function () {
        $('.text3').draggable();
    });
    
      $(function () {
        $('.text4').draggable();
    });
      
     $('.pet').click(function () {
        $('.text3').toggle();
    });
    
    
     $('.curtain').click(function () {
        $('.text4').toggle();
    });
    
     $(function () {
        $('.text5').draggable();
    });
    
    $('.van').click(function () {
        $('.text5').toggle();
    });
});