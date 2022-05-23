
/******************************
**********all posts***********
******************************/
$(document).ready(function() {
    $('.btn__all__posts').click(function(event) {
        $('.block__all__posts , .btn__all__posts , .btn__close__posts').toggleClass('open');
    });
});

$(document).ready(function() {
  $('.btn__close__posts').click(function(event) {
      $('.block__all__posts , .btn__all__posts , .btn__close__posts').removeClass('open');
  });
});