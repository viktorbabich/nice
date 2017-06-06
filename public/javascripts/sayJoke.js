	var joke = {
		counter: 0,
		// showTable: function() {

		// },
		choose: function() {
			var rand = - 0.5 + Math.random() * 6;
			rand = Math.round(rand);
			// в таблице ячейка[rand] мигает затем исчезает текст и
			joke.show();
		}, 
		show: function() {
			var currentJoke = "json";
			$(".joke__text")[0].textContent = currentJoke;
			$(".joke__bg").show();
			function readJoke() {
				$(".joke__text")[0].textContent = "";
				$(".joke__bg").fadeOut(200);
			};
			setTimeout(readJoke, 1000);
				// попап убирается
				joke.counter += 1;
				app.randomiser();
		}
	};