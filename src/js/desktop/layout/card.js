$(document).ready(function(){
  $(".card").on('mouseover', function(){
    $(this).find('.card-img').attr('src', $(this).find('.card-img').data('second-src'));
  }).on('mouseout', function(){
    $(this).find('.card-img').attr('src', $(this).find('.card-img').data('first-src'));
  });
});