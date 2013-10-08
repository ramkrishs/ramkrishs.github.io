$('a.menu').click(function () {
	// body...
	$('.section').hide();
	$('.section').removeClass('animated');
	$('#'+$(this).attr('menu-id')).show();
	$('#'+$(this).attr('menu-id')).addClass('animated pulse');
})