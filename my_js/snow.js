$(document).ready(function(){

	$("canvas.flare").let_it_snow({
		windPower: 0,
		speed: 0,
		color: "#392F52",
		size:120,
		opacity: 0.00000001,
		count: 0,
		interaction: false
	});

	$("canvas.snow").let_it_snow({
		windPower: 3,
		speed: 1,
		count: 250,
		size: 0
	});

	$("canvas.flake").let_it_snow({
		windPower: -3,
		speed: 1,
		count: 20,
		size: 10,
		image: "../image/white-snowflake.png"
	});

});