// variabili
var bars_btn, hamburger, close_btn;

bars_btn = $('.header-right > a');
hamburger = $('.hamburger-menu');
close_btn = $('.hamburger-menu > a');

// il menu hamburger si apre
bars_btn.click(function() {
  hamburger.addClass('active');
});
// il menu hamburger si chiude
close_btn.click(function() {
  hamburger.removeClass('active');
});
