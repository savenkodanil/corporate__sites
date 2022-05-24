function body(){
    document.querySelector(body).style.overflow = 'hidden';
  }

$(document).ready(function() {
    $('.nav__menu__why').click(function(event) {
        $('.sub__menu , .arrow').toggleClass('open active');
    });
});

$(document).ready(function() {
    $('.nav__menu__sup').click(function(event) {
        $('.arrow__sup , .sub__menu__sup').toggleClass('open active');
    });
});

$(document).ready(function() {
    $('.nav__menu__res').click(function(event) {
        $('.arrow__res, .sub__menu__res').toggleClass('open active');
    });
});

/******************************
*************БУРГЕР************
******************************/


$(document).ready(function() {
    $('.burger').click(function(event) {
        $('.burger , .header , .header__nav , body , .get__start__button , .log__button ').toggleClass('open');
    });
});


// $(document).ready(function() {
//   $('.nav__menu').click(function(event) {
//       $('body').removeClass('open');
//   });
// });