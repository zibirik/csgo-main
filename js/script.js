// Hover submenu
$(document).ready(function () { 
	$('.submenu').hover(
		function () {
			$('.nav_sub', this).stop().fadeIn(100);
		}, 
		function () {
			$('.nav_sub', this).stop().fadeOut(100);         
		}
	);

	// CSGO-menu
	$('.map').maphilight({
		fillColor: 'ffffff',
		fillOpacity: 0.2,
		stroke: false,
	});

	$('area').on('click', function() {
		let attr = $(this).attr('data-d');
		let msg = '';

		switch (attr) {
			case 'one':
				msg = 'one';
				break;
			case 'two':
				msg = 'two';
				break;
			case 'three':
				msg = 'three';
				break;
			case 'four':
				msg = 'four';
				break;
			case 'five':
				msg = 'five';
				break;
			case 'six':
				msg = 'six';
				break;
		}

		alert(msg);
	});
});