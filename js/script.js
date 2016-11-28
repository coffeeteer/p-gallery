$(document).ready(function() {
	$('nav a').on('click', function() {

		//Current Class Assignment
		$('nav a').removeClass('current');
		$(this).parent().addClass('current');

		//Set Heading Text
		$('h1.heading').text($(this).text());
	});
});