$(document).ready(function() {
	$('nav a').on('click', function() {

		//Current Class Assignment
		$('nav li.current').removeClass('current');
		$(this).parent().addClass('current');

		//Set Heading Text
		$('h1#heading').text($(this).text());

		//Get & Filter link text
		var category = $(this).text().toLowerCase().replace(' ', '-');

		//Remove hidden class if 'all-projects' is selected
		if(category == 'all-projects') {
			$('ul#gallery li:hidden').fadeIn('slow').removeClass('hidden');
		} else {
			$('ul#gallery li').each(function(){
				if(!$(this).hasClass(category)) {
					$(this).hide().addClass('hidden')
				} else {
					$(this).fadeIn('slow').removeClass('hidden');
				}
			});
		}
		//Stop Link Behavior
		return false;
	});
});