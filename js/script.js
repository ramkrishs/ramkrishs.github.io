$('a.menu').click(function () {
	// body...
	$('.section').hide();
	$('#'+$(this).attr('menu-id')).show();
})
$('#home').removeClass('animated').css("visibility", "visible").addClass('animated bounceIn');
$('#about .info').removeClass('animated').css("visibility", "visible").addClass('animated bounceInDown');
$('#world .info').removeClass('animated').css("visibility", "visible").addClass('animated bounceInRight');
$('#contact .email').removeClass('animated').css("visibility", "visible").addClass('animated bounceIn');
$('#contact .phone').removeClass('animated').css("visibility", "visible").addClass('animated bounceIn');

