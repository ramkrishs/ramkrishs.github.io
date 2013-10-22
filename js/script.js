$('a.menu').click(function () {
	// body...
	$('.section').hide();
	$('#'+$(this).attr('menu-id')).show();
})
$('#home').css("visibility", "visible").addClass('animated bounceIn');
$('#about .info').css("visibility", "visible").addClass('animated bounceInDown');
$('#world .info').css("visibility", "visible").addClass('animated bounceInRight');
$('#contact .email').css("visibility", "visible").addClass('animated bounceIn');
$('#contact .phone').css("visibility", "visible").addClass('animated bounceIn');


