$('a.menu').click(function () {
	// body...
	$('.section').hide();
	$('#'+$(this).attr('menu-id')).show();
})

var minWidth =480;

function contentAnimate () {
		if($(window).width() > minWidth)
		{
		$('#home').removeClass('animated').css("visibility", "visible").addClass('animated bounceIn');
		$('#about .info').removeClass('animated').css("visibility", "visible").addClass('animated bounceInDown');
		$('#world .info').removeClass('animated').css("visibility", "visible").addClass('animated bounceInRight');
		$('#contact .email').removeClass('animated').css("visibility", "visible").addClass('animated bounceIn');
		$('#contact .phone').removeClass('animated').css("visibility", "visible").addClass('animated bounceIn');
		}
		else
		{
			$('#home').removeClass('animated').css("visibility","visible");
			$('#about .info').removeClass('animated');
			$('#world .info').removeClass('animated');
			$('#contact .email').removeClass('animated');
			$('#contact .phone').removeClass('animated');
		}

}
$(document).ready(function() {
		contentAnimate();
		$(window).resize(function() {
		contentAnimate();
		});
});