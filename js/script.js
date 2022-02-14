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
	let allLayer = $('#all-layer');
	let pistolLayer = $('#pistol-layer');
	let hardLayer = $('#hard-layer');
	let ppLayer = $('#pp-layer');
	let rifleLayer = $('#rifle-layer');
	let toolsLayer = $('#tools-layer');
	let granataLayer = $('#granata-layer');


	let resultLayer = $('#result-layer');

	$('.map').maphilight({
		fillColor: 'ffffff',
		fillOpacity: 0.2,
		stroke: false,
	});

	$('area').on('click', function() {
		let attr = $(this).attr('data-d')
		let txt = $(this).attr('data-t')

		resultLayer.html(txt)

		switch (attr) {
			case '0':
				resultLayer.html(attr)
				allLayer.show()
				pistolLayer.hide()
				hardLayer.hide()
				ppLayer.hide()
				rifleLayer.hide()
				toolsLayer.hide()
				granataLayer.hide()
				break;
			case '1':
				allLayer.hide()
				pistolLayer.show()
				hardLayer.hide()
				ppLayer.hide()
				rifleLayer.hide()
				toolsLayer.hide()
				break;
			case '2':
				allLayer.hide()
				pistolLayer.hide()
				hardLayer.show()
				ppLayer.hide()
				rifleLayer.hide()
				toolsLayer.hide()
				break;
			case '3':
				allLayer.hide()
				pistolLayer.hide()
				hardLayer.hide()
				ppLayer.show()
				rifleLayer.hide()
				toolsLayer.hide()
				break;
			case '4':
				allLayer.hide()
				pistolLayer.hide()
				hardLayer.hide()
				ppLayer.hide()
				rifleLayer.show()
				toolsLayer.hide()
				break;
			case '5':
				allLayer.hide()
				pistolLayer.hide()
				hardLayer.hide()
				ppLayer.hide()
				rifleLayer.hide()
				toolsLayer.show()
				break;
			case '6':
				allLayer.hide()
				pistolLayer.hide()
				hardLayer.hide()
				ppLayer.hide()
				rifleLayer.hide()
				toolsLayer.hide()
				granataLayer.show()
				break;
		}
	});

});