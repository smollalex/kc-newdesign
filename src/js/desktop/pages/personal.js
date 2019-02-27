$(document).ready(function(){
  $('#orders-table tr').on('click', function(e){
    if ($(e.target).prop("tagName") == 'TD') {
      $('#order').modal('show');
    }
  });
});