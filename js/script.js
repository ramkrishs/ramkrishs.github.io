$('a.menu').click(function () {
	// body...
	$('.section').hide();
	$('#'+$(this).attr('menu-id')).show();
})
$('#home').css("visibility", "visible").addClass('animated bounceInDown');
$('#about').css("visibility", "visible").addClass('animated bounceInDown');
$('#world').css("visibility", "visible").addClass('animated bounceInDown');
$('#contact').css("visibility", "visible").addClass('animated bounceInDown');
