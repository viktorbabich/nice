// var app = {
// 	beforeAsk: function() {
// 		работает за компом периодически кидая рандомные фразы
// 		от 1 до 3
// 	},
// 	load: function() {
// 		let turn = Math.random();
// 		if(turn) {
// 			app.turn();
// 		} else {
// 			question = "Что такое..?";

// 			Щас...щас минутку... течение 3 секунд

// 			Щас...

// 			Минутку...

// 			setTimeout(app.turn(), 5000);
// 		};	
// 	},
// 	turn: function () {
// 		поворачивается
// 		app.ask();
// 	},
// 	ask: function() {
// 		задает вопрос
// 		выезжает попап с инпутом
// 		на ентер или по нажатию кнопки
// 		joke.showTable();
// 	},
// 	answear: function() {
// 		открывается летмигугл и ищет ответ 
// 	}
// }

// var joke = {
// 	loadSchedule: function() {
// 		подгружает рандомные шутки в таблицу
// 	}
// 	showTable: function() {
// 		показывается таблица из своей игры
// 		выбирается рандомная ячейка
// 		таблица исчезает
// 	},
// 	showJoke: function() {
// 		появляется попап с шуткой
// 	}
// };
// app.beforeAsk();
// joke.loadSchedule();
// $("#askButton").on("click", app.load());

$(document).ready(function() {

	function beforeAsk() {
		var phrases,
			phrase,
			rand,
			interval;
		phrases = ["one", "two", "three"];

		function sayPhrase() {
			rand =  -0.5 + Math.random() * (phrases.length);
	    	rand = Math.round(rand);
	    	phrase = phrases[rand];
	    	$(".c-talk")[0].textContent = phrase;
		};
    interval = setInterval(sayPhrase, 3000); 
    function listener(event) {
			if(event.keyCode == 13 || event.keyCode == 32) {
				clearInterval(interval);
				document.removeEventListener("keydown", listener);
				// app.turn();
				// здесь рандом на поворот
				// app.ask();
			}
		};
		document.addEventListener("keydown", listener);
	};

	function turn() {
		// var rand,
		// 	flag;
		// rand = -0.5 + Math.random() * 2;
		// rand = Math.round(rand);
		// if(rand === 1) {
		// 	console.log("no", flag, rand);
		// 	// app.turn();
		// } else {
		// 	console.log("yes", flag, rand);
		// 	// реально turn
		// };

		// передать turned или нет

	};

	function ask(turned) {
		// он спрашивает
		// повляется попап с инпутом

		// задаешь вопрос

		if(turned) {
			joke.showTable();
		} else app.turn();

		var question = $("#question input")[0].value;

				// преобразовать в запрос
				// "http://lmgtfy.com/?q=" + question; 

		}); 
	};
});





