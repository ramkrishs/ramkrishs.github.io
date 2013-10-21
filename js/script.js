$('a.menu').click(function () {
	// body...
	$('.section').hide();
	$('#'+$(this).attr('menu-id')).show();
})
$('#home').css("visibility", "visible").addClass('animated bounceInDown');
