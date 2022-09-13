$(function () {
  $('select').selectric({
    maxHeight: 170,
    disableOnMobile: false
  });

  window.onload = function () {
    var $popupOverlay = $('.popup_overlay'),
        $popupWindow = $('.popup_window'),
        $button = $('.button__bonus');
     
    $button.click(function () {
      $popupOverlay.fadeIn();
      $popupWindow.fadeIn();
    });
  };
});