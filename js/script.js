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

	// Mouseenter overlay
	$('ul#gallery li').on('mouseenter', function (){
		//Get data attribute values
		var title = $(this).children().data('title');
		var desc = $(this).children().data('desc');

		// Validation
		if(desc == null) {
			desc = 'click to Enlarge';
		}

		if(title == null) {
			title = '';
		}

		// Create overlay div
		$(this).append('<div class="overlay"></div>');

		//Get the overlay div
		var overlay = $(this).children('.overlay');

		// Add HTML to overlay
		overlay.html('<h3>'+ title + '</h3><p>'+ desc + '</p>');

		// Fade in overlay
		overlay.fadeIn(800);
	});

	// Mouseleave Overlay
	$('ul#gallery li').on('mouseleave', function() {
		// Create overlay div
		$(this).append('<div class="overlay"></div>');

		//Get the overlay div
		var overlay = $(this).children('.overlay');

		//Fade out overlay
		overlay.fadeOut(500);
	});;
});