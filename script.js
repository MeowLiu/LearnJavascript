"use strict";
// console.log(document.querySelector(".message").textContent);
// document.querySelector(".message").textContent = "Correct number!";

// document.querySelector(".number").textContent = 13;
// document.querySelector(".score").textContent = 10;
// document.querySelector(".guess").value = 12;
// console.log(document.querySelector(".guess").value);

let secretNumber = Math.ceil(Math.random() * 20);
let messageEl = document.querySelector(".message");
let scoreEl = document.querySelector(".score");
let heighScore = 0;
const initialBackgroundColor = "#222";
const initialMessage = "开始猜...";
const initialValue = "";
const initialScore = 20;
const initialSymbol = document.querySelector(".number").textContent;

// Reduce the score when guess a wrong number
const reduceScore = function (scoreEl, messageEl, secretNumber) {
	let score = Number(document.querySelector(".score").textContent);

	if (score > 0) {
		score--;
		scoreEl.textContent = score;
	} else {
		messageEl.textContent = "你输掉了游戏!";
		document.querySelector(".number").textContent = secretNumber;
	}

	return null;
};

// When player clicks the botton
document.querySelector(".check").addEventListener("click", function () {
	const guessNumber = Number(document.querySelector(".guess").value);

	// Whem there is no input
	if (!guessNumber) {
		messageEl.textContent = "😅 你没有输入数字!";
		console.log("this", secretNumber);
	}
	// When player wins
	else if (guessNumber === secretNumber) {
		messageEl.textContent = "恭喜你猜中了";

		document.querySelector(".number").textContent = secretNumber;
		document.querySelector("body").style.backgroundColor = "#60b347";
		document.querySelector(".number").style.width = "30rem";

		let currentScore = scoreEl.textContent;
		heighScore = currentScore > heighScore ? currentScore : heighScore;
		document.querySelector(".highscore").textContent = heighScore;
	}

	// When guess is wrong
	else {
		messageEl.textContent =
			guessNumber > secretNumber ? "数字太大了。" : "数字太小了。";
		reduceScore(scoreEl, messageEl, secretNumber);
	}
});

// When player clicks again
document.querySelector(".again").addEventListener("click", function () {
	secretNumber = Math.ceil(Math.random() * 20);

	document.querySelector("body").style.backgroundColor =
		initialBackgroundColor;
	document.querySelector(".message").textContent = initialMessage;
	document.querySelector(".guess").value = initialValue;
	document.querySelector(".score").textContent = initialScore;
	document.querySelector(".number").textContent = initialSymbol;
});
