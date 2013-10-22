$('a.menu').click(function () {
	// body...
	$('.section').hide();
	$('#'+$(this).attr('menu-id')).show();
})
$('#home').css("visibility", "visible").addClass('animated bounceInDown');
$('#about').css("visibility", "visible").addClass('animated bounceInDown');
$('#world').css("visibility", "visible").addClass('animated bounceInDown');
$('#contact .email').css("visibility", "visible").addClass('animated bounceIn');
$('#contact .phone').css("visibility", "visible").addClass('animated bounceIn');
