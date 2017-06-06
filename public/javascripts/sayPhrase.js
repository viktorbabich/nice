;(function() {
	interval = setInterval(sayPhrase, 3000); 
	function listener(event) {
		if(event.keyCode == 13 || event.keyCode == 32) {
			clearInterval(interval);
			document.removeEventListener("keydown", listener);
			// app.turn();
		};
	};
	document.addEventListener("keydown", listener);
	function sayPhrase() {
		var phrases,
			phrase,
			rand,
			interval;
		phrases = ["сука", "пиздец", "нихуя не понятно", "че за говно блять"];
		rand =  -0.5 + Math.random() * (phrases.length);
    	rand = Math.round(rand);
    	phrase = phrases[rand];
    	$(".talk__phrase")[0].textContent = phrase;
    	$(".talk__phrase").animate({height: "toggle"}, 200).delay(1000).fadeOut(200);
	};
})();