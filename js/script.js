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
	let arrLayers = [allLayer, pistolLayer, hardLayer, ppLayer, rifleLayer, toolsLayer, granataLayer];

	let p1 = $('#p1')
	let p2 = $('#p2')
	let p3 = $('#p3')
	let p4 = $('#p4')
	let p5 = $('#p5')

	let h1 = $('#h1')
	let h2 = $('#h2')
	let h3 = $('#h3')
	let h4 = $('#h4')
	let h5 = $('#h5')

	let b1 = $('#b1')
	let b2 = $('#b2')
	let b3 = $('#b3')
	let b4 = $('#b4')
	let b5 = $('#b5')

	let r1 = $('#r1')
	let r2 = $('#r2')
	let r3 = $('#r3')
	let r4 = $('#r4')
	let r5 = $('#r5')
	let r6 = $('#r6')

	let t1 = $('#t1')
	let t2 = $('#t2')
	let t3 = $('#t3')
	let t4 = $('#t4')

	let g1 = $('#g1')
	let g2 = $('#g2')
	let g3 = $('#g3')
	let g4 = $('#g4')
	let g5 = $('#g5')

	let arrObjs = [p1, p2, p3, p4, p5, h1, h2, h3, h4, h5, b1, b2, b3, b4, b5, r1, r2, r3, r4, r5, r6, t1, t2, t3, t4, g1, g2, g3, g4, g5]



	function showLayer(layer, sector) {

		if(layer == 'a' || sector == 0) {
			$.each(arrLayers, function (index, value) {
				if(index == sector) {
					value.show()
				} else {
					value.hide()
				}
			})
		}
	}

	$('area').on('click', function() {
		let attr = $(this).attr('data-l')
		let str = attr.split('')

		showLayer(str[0], str[1])

		if(str[0] != 'a') {
			$.each(arrObjs, function (index, value) {

				if(value.attr('id') == attr) {
					value.show()
				} else {
					value.hide()
				}
			})
		}
	});

	$('.map').maphilight({
		fillColor: 'ffffff',
		fillOpacity: 0.2,
		stroke: false,
	});

});