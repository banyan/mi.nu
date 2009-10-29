var Minu = function() {};

Minu.MAX_H1_FONT_SIZE = 2000;

Minu.prototype = {

	init: function() {
		this._setBackGroundColor();
		this._setH1FontSize();
	},

	_setBackGroundColor: function() {
		var colors = [
			"#ffffff", // white
			"#f0f0f0", // grey
			"#00cccc", // dark_blue
			"#3399ff", // blue
			"#dd42ab"  // pink
		];
		var random_key = (Math.floor( Math.random() * colors.length));
		$("body").css("background-color", colors[random_key]);
	},

	_setH1FontSize: function() {
		var random_size = (Math.floor( Math.random() * Minu.MAX_H1_FONT_SIZE));
		$('h1').css("font-size", random_size);
	}

}

