$('a.menu').click(function () {
	// body...
	$('.section').hide();
	$('#'+$(this).attr('menu-id')).show();
})
$('#home').addClass('animated bounceInDown');
