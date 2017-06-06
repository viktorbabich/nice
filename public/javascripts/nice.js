$(document).ready(function() {

	$(".chat").on("click", function() {
		$(".question").fadeIn(200);
	});

// 	function turn() {
// 		// поворачивается
// 		// IDdialog1 = "Что такое?"
// 		app.randomiser();
// 	};


// 	function randomiser() {
// 		var rand = Math.round(Math.random());
// 		ask(rand);
// 	};

// 	function answear() {
// 		// преобразовать в запрос
// 		// "http://lmgtfy.com/?q=" + question; 
// 	};


// отдельно от объекта app

// function ask(predictJoke) {
// 	$(".question__button").on("click", function() {
// 		var questionText = $(".question__text")[0].value;
// 		if(questionText) {
// 			$(".chat").append('<div class="person__second">' + questionText + '</div>');
// 			$(".question").fadeOut(100);
// 			$(".question__text")[0].value = "";
// 			$(".question__title")[0].textContent = "Че такое?";
// 			if((jokesCounter === 0) || (joke.counter < 5 && predictJoke === 1) {
// 				joke.showTable();
// 			} else app.answear(questionText);
// 		} else { 
// 			$(".question__title")[0].textContent = "Так и будешь молчать?";
// 			return;
// 		};
// 	});
// });

	// var joke = {
		// counter: 0,
	// 	// showTable: function() {

	// 	// },
	// 	choose: function() {
	// 		var rand = - 0.5 + Math.random() * 6;
	// 		rand = Math.round(rand);
	// 		// в таблице ячейка[rand] мигает затем исчезает текст и
	// 		joke.show();
	// 	}, 
	// 	show: function() {
	// 		var currentJoke = "json";
	// 		$(".joke__text")[0].textContent = currentJoke;
	// 		$(".joke__bg").show();
	// 		function readJoke() {
	// 			$(".joke__text")[0].textContent = "";
	// 			$(".joke__bg").fadeOut(200);
	// 		};
	// 		setTimeout(readJoke, 1000);
	// 			// попап убирается
	// 			jokesCounter += 1;
	// 			app.randomiser();
	// 	}
	// };
});

































































	// function beforeAsk() {
	// 	var phrases,
	// 		phrase,
	// 		rand,
	// 		interval;
	// 	phrases = ["one", "two", "three"];

	// 	function sayPhrase() {
	// 		rand =  -0.5 + Math.random() * (phrases.length);
	//     	rand = Math.round(rand);
	//     	phrase = phrases[rand];
	//     	// тут должно всплывать облако с фразой и исчезать
	//     	$(".c-talk")[0].textContent = phrase;
	// 	};
 //    	interval = setInterval(sayPhrase, 3000); 
 //    	function listener(event) {
	// 		if(event.keyCode == 13 || event.keyCode == 32) {
	// 			clearInterval(interval);
	// 			document.removeEventListener("keydown", listener);
	// 			// app.turn();
	// 		};
	// 	};
	// 	document.addEventListener("keydown", listener);
	// };