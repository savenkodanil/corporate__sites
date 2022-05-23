/******************************
*************БУРГЕР************
******************************/
$(document).ready(function() {
    $('.close').click(function(event) {
        $('.protected__bg , .menu , .wrapper__post').toggleClass('close');
    });
});


// $(document).ready(function() {
//   $('.nav__menu').click(function(event) {
//       $('body , .nav-icon2 , .header__nav , .header__logo , .header__bg , .header__content , .wrapper__text__modal__wimdow , .button__connection__with__me').removeClass('open');
//   });
// });