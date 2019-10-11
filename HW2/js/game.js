
// Getting all of the input from the questions
var questionImage = document.getElementById('questionImage');
var questionWords = document.getElementById('questionWords');
var optionA = document.getElementById('optionA');
var optionB = document.getElementById('optionB');
var optionC = document.getElementById('optionC');
var optionD = document.getElementById('optionD');

//Checking how many are answered
var answeredQuestions = 0;
var answer1;
var answer2;
var answer3;
var answer4;
var answer5;
var answer6;
var answer7;
var answer8;
var answer9;

//Saviung the number of the question to save the answer in a function
var questionNumberToSave = 0;

// Scoring
var scoreLabel = document.querySelector('.scoreLabel');
var score = 0;
var selectedPoints = 0;

//Audio's for the project 
var audioBegin = new Audio('sounds/jeopardyTheme.mp3');
audioBegin.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
}, false);
function playBeginning()
{
	var audioThis = new Audio('sounds/thisIsJeopardy.mp3').play();
}
document.getElementById("playBeginningAudio").innerHTML = window.playBeginning();

// Showing question based on inputted number
function showQuestion(input) {
	audioBegin.play();
	switch (input) {
		case 1:
			questionNumberToSave = 1;
			// generate question in new function
			generateQuestion(input);
			// Open modal via jQuery
			$('#questionModal').modal();
			disableButton(event.target);
			break;
		case 2:
			questionNumberToSave = 2;
			// Populate question data
			generateQuestion(input);
			// Open modalvia jQuery
			$('#questionModal').modal();
			disableButton(event.target);
			break;
		case 3:
			questionNumberToSave = 3;
			// Populate question data
			generateQuestion(input);
			// Open modal via jQuery
			$('#questionModal').modal();
			disableButton(event.target);
			break;
		case 4:
			questionNumberToSave = 4;
			// Populate question data
			generateQuestion(input);
			// Open modal via jQuery
			$('#questionModal').modal();
			disableButton(event.target);
			break;
		case 5:
			questionNumberToSave = 5;
			// Populate question data
			generateQuestion(input);
			// Open modal via jQuery
			$('#questionModal').modal();
			disableButton(event.target);
			break;
		case 6:
			questionNumberToSave = 6;
			// Populate question data
			generateQuestion(input);
			// Open modal via jQuery
			$('#questionModal').modal();
			disableButton(event.target);
			break;
		case 7:
			questionNumberToSave = 7;
			// Populate question data
			generateQuestion(input);
			// Open modal via jQuery
			$('#questionModal').modal();
			disableButton(event.target);
			break;
		case 8:
			questionNumberToSave = 8;
			// Populate question data
			generateQuestion(input);
			// Open modal via jQuery
			$('#questionModal').modal();
			disableButton(event.target);
			break;
		case 9:
			questionNumberToSave = 9;
			// Populate question data
			generateQuestion(input);
			// Open modal via jQuery
			$('#questionModal').modal();
			disableButton(event.target);
			break;
		default:
			alert("Something went worng. Please resart game.")
	}
}

// Generate question data
function generateQuestion(e) {
	// Update question
	questionWords.innerHTML = questions["question" + e].questionWords;
	questionImage.src = questions["question" + e].questionImage;
	// Update answers
	optionA.innerHTML = questions["question" + e].optionA.responseText;
	optionB.innerHTML = questions["question" + e].optionB.responseText;
	optionC.innerHTML = questions["question" + e].optionC.responseText;
	optionD.innerHTML = questions["question" + e].optionD.responseText;
	// Update correct
	updateCurrentCorrect(questions["question" + e].optionA.correctResponse, questions["question" + e].optionB.correctResponse, questions["question" + e].optionC.correctResponse, questions["question" + e].optionD.correctResponse);
	// Update current selected points
	selectedPoints = event.target.innerHTML;
}

// Add correct label for question
function updateCurrentCorrect(a, b, c, d) {
	if (a == true) {
		optionA.classList.add('correct');
	} else if (b == true) {
		optionB.classList.add('correct');
	} else if (c == true) {
		optionC.classList.add('correct');
	} else if (d == true) {
		optionD.classList.add('correct');
	}
}

// Disable the button after selected
function disableButton(e) {
	e.style.cursor = 'auto';
	e.classList.remove('jeapordyTile');
	e.classList.add('answered');
	e.onclick = '';
	answeredQuestions++;
}

// Check question answer using jQuery
function submitQuestion() {
	if (event.target.classList.contains('correct')) {
		updateScore(parseInt(selectedPoints));
		saveAnswer(true);
		$('#questionModal').modal('hide');

	} else {
		saveAnswer(false);
		$('#questionModal').modal('hide');
	}
	//Checks if we have answered all questions
	checkIfDone();
}

// Update score
function updateScore(e) {
	score = score + e;
	scoreLabel.innerHTML = "SCORE: " + score;
}

//Saves answer to show on table later
function saveAnswer(questionAnswer) {
	if (questionNumberToSave == 1) {
		answer1 = questionAnswer;
	}
	else if (questionNumberToSave == 2) {
		answer2 = questionAnswer;
	}
	else if (questionNumberToSave == 3) {
		answer3 = questionAnswer;
	}
	else if (questionNumberToSave == 4) {
		answer4 = questionAnswer;
	}
	else if (questionNumberToSave == 5) {
		answer5 = questionAnswer;
	}
	else if (questionNumberToSave == 6) {
		answer6 = questionAnswer;
	}
	else if (questionNumberToSave == 7) {
		answer7 = questionAnswer;
	}
	else if (questionNumberToSave == 8) {
		answer8 = questionAnswer;
	}
	else if (questionNumberToSave == 9) {
		answer9 = questionAnswer;
	}
}

//Checks if we have answered all of the questions
function checkIfDone() {
	if (answeredQuestions == 9) {
		window.alert("Click See Results Below");
	}
}

//Builds the final table of results dynamically
function GenerateTable() {
	audioBegin.pause();
	//Build an array containing the results
	var final = new Array();
	final.push(["Question Number", "Question", "Answer", "Were you correct?", "Explaination"]);
	final.push([1, "You're 3rd place right now in a race. What place are you in when you pass the person in 2nd place?", "2nd", answer1, "You are in 3rd place. You pass the person in second. There is still the person in 1st to pass. Thus now you are in 2nd."]);
	final.push([2, "How many months have 28 days?", "All of them", answer2, "All months have at least 28 days in them."]);
	final.push([3, "How many 0.5cm slices of bread can you cut from a whole bread that's 25cm long?", "1", answer3, "If you cut the first 0.5cm slice of bread off of the 25cm long whole bread, the whole bread is no longer 25cm (now 24.5cm), and thus you cannot cut off anymore 0.5cm slices off of a 25cm long whole bread."]);
	final.push([4, "The answer is really big.", "really big", answer4, "They gave you the answer dumb-dumb!"]);
	final.push([5, "Divide 30 by half and add ten.", "70", answer5, "Divide 30 by half really means to times 30 by 2 <br /> 30 / (1/2) = 60 <br /> 60 + 10 = 70"]);
	final.push([6, "There are two analog clocks of different colors: The red clock is broken and doesn't run at all, but the blue clock loses one second every 24 hours. Which clock is more accurate?", "The red clock", answer6, "The red clock, although broken, would show the correct time twice a day. While the blue clock, with its ever decreasing second, would only be correct once a day."]);
	final.push([7, "A farmer has 17 sheep, all of them but 8 die. How many sheep are still standing?", "8", answer7, "All of them but 8 would mean the 9 of the sheep died and 8 were still left standing."]);
	final.push([8, "If a leaf falls to the ground in a forest and no one hears it, does it make a sound?", "Yes", answer8, "Ah the age old question... but yes, it would make a sound. There is no sound in the sound waves themselves. The sound is produced by the action potentials and synapses and only registers as sound if the action potentials reach the auditory cortex."]);
	final.push([9, "There are 45 apples. If you pick up 3 apples, how many apples are there?", "42", answer9, "You have 3 apples in your hand and there are 42 apples \"there\"."]);

	//Create the table itself
	var table = document.createElement("TABLE");
	table.border = "1";

	//Get the count of columns
	var columnCount = final[0].length;

	//Add the head row
	var row = table.insertRow(-1);
	for (var i = 0; i < columnCount; i++) {
		var headerCell = document.createElement("TH");
		headerCell.innerHTML = final[0][i];
		row.appendChild(headerCell);
	}

	//Add the data rows
	for (var i = 1; i < final.length; i++) {
		row = table.insertRow(-1);
		for (var j = 0; j < columnCount; j++) {
			var cell = row.insertCell(-1);
			cell.innerHTML = final[i][j];
		}
	}

	//Finally adding everything together
	var dvTable = document.getElementById("dvTable");
	dvTable.innerHTML = "";
	dvTable.appendChild(table);

	checkIfPerfect();
}

function checkIfPerfect() {
	if (score == 2400) {
		var audioW = new Audio('sounds/congrats.mp3');
		audioW.play();
	}
	else {
		var audioL = new Audio('sounds/loser.mp3');
		audioL.play();
	}
}