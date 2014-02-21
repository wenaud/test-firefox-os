$(document).ready(function() {
	$('.vacation').on('keyup', '.quantity', function() {
		var price = +$(this).closest('.vacation').data('price');
		var quantity = +$(this).val(); 
		$('#total').text(quantity*price);
	});
});
