var isIE = function() {
	return /*@cc_on!@*/false; 
};

var setStyle = function(spec, my) {
	my = my || {};
	
	my.element     = spec.element;
	my.declaration = spec.declaration;

	if (isIE()) {
		my.element.style.cssText = my.declaration + ";";
	} else {
		my.element.setAttribute("style", my.declaration);
	}

};

var setBackGroundColor = function() {
	var body = document.getElementsByTagName('body')[0];
	var colors = [
		"#eee",    // grey
		"#fff",    // white
		"#00cccc", // blue
		//"#dd42ab"  // pink
	];
	var randnum = (Math.floor( Math.random() * colors.length ));

	setStyle({
		element     : body,
		declaration : "background-color:" + colors[randnum]
	});
};

var setListImage = function() {

	var getFavicon = function(url) {
		var parse_url = /^(?:([A-Za-z]+:))?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/;
		var names = {
			'url'    : 0,
			'scheme' : 1,
			'slash'  : 2,
			'host'   : 3,
			'port'   : 4,
			'path'   : 5,
			'query'  : 6,
			'hash'   : 7
		};
		var result = parse_url.exec(url);
		var favicon;
		// tumblr は favicon の path が違うため特別対応
		if (result[names.host].indexOf("tumblr") != -1) return 'http://assets.tumblr.com/images/favicon.gif?2';
		favicon = result[names.scheme] + result[names.slash] + result[names.host] + '/favicon.ico';
		return favicon;
	};

	var lists = document.getElementsByTagName('li');
	$A(lists).each(function(li) {
		var link = (isIE) ? li.childNodes[0].getAttribute('href') : li.down().href;
		var favicon = (getFavicon(link));

		setStyle({
			element     : li,
			declaration : "list-style-image:url(" + favicon + ")"
		});
	});
};

