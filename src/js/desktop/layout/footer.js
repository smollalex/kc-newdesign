$(document).ready(function(){
		
	$('[name="subscribe-gender"], [name="subscribe-confirm"]').on('click', function(){
		$('[name="subscribe-gender"]').removeAttr('checked');
		$(this).attr('checked', 'checked');
	});
	$('[name="subscribe-confirm"]').on('click', function(){
		$(this).attr('checked', !($(this).attr('checked')));
	});
  
});