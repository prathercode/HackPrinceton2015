var QuestionPlaying = new Boolean(false);
										//global variable that determines if a question is running
window.RealAnswer;						//global variable that stores the correct answer for the current question
window.SelectedAnswer;					//global variable that stores the player's answer
window.HappyMessage = "Good Job!"		//global variable containing response if player is correct
window.SadMessage	= "You're Fired!"	//global variable containing response if player is wrong
var RightGuessCount = 0;
var WrongGuessCount = 0;
var Streak = 0;
var TopStreak = 0;

function DisplayQuote() 				//function that displays new questions
{	
	reset();							//resets for the initialization of a question cycle
	QuestionPlaying = true;				//Demarcates the initialization of a question cycle
	var ToBeDisplayed;					//Variable that stores a number that will determine which quote is displayed
	var QuoteDB;						//Variable that holds the correct database of questions

	var ColbertQuotes = [				//Array Database of Colbert Quotes
							"I apologize for being perfect", 
					 		"Medicare is like a nice set of cufflinks. Nobody wears cufflinks anymore.",
							"I don't accept the status quo. I do accept Visa, MasterCard, or American Express.",
							"It used to be, everyone was entitled to their own opinion, but not their own facts. But that's not the case anymore. Facts matter not at all. Perception is everything.",
							"We have this idea in our minds that there's this separation of church and state in America, which I think is a good thing. And we extend that to our politics - not just church and state, but it's also there's a separation of religion and politics. But of course there isn't.",
							"We got Obama in there now and the Chinese testing him bing bing bing. You get a woman in there bing bom boom the whole world goes after her.", 
							"If our founding fathers wanted us to care about the rest of the world, they wouldn't have declared our independence from it.",
							"The pen is mightier than the sword if you shoot that pen out of a gun.",
							"Of course! Jeb Bush! America is hungry for another leader from that talented family!",
							"[I'm] a nice guy. I go to church I teach Sunday school. I have family values."
						];


	var TrumpQuotes = [ 				//Array Database of Trump Quotes
							
							"I think apologizing's a great thing, but you have to be wrong... I will absolutely apologize, sometimes in the hopefully distant future, if I'm ever wrong.",
							"It's freezing and snowing in New York. We need global warming!", 
							"So many people have told me that I should host Meet the Press and replace the moron who is on now. Just too busy, especially next 10 years!",
							"I try to learn from the past, but I plan for the future by focusing exclusively on the present. That's where the fun is.",
							"If you can't get rich dealing with politicians, there's something wrong with you.",
							"Robert Pattinson should not take back Kristen Stewart. She cheated on him like a dog, and will do it again, just watch. He can do much better!",
							"My fingers are long and beautiful, as, it has been well been documented, are various other parts of my body."
						];


	if(Math.random()<.5)				//Randomly determines if question should be a Colbert or Trump quote
		{
			QuoteDB = ColbertQuotes;
			RealAnswer = "Colbert";
		}

	else
		{
			QuoteDB = TrumpQuotes;
			RealAnswer = "Trump";
		}

	ToBeDisplayed = parseInt((Math.random() * QuoteDB.length), 10);
	document.getElementById("quote").innerHTML = QuoteDB[ToBeDisplayed];	//Displays a quote
}


	
function SelectTrump()		//Initializes answering process if Trump is the selected answer choice
{
	if (QuestionPlaying === true) 
	{
		SelectedAnswer = "Trump";
		answerQuote();
	}
}

function SelectColbert()	//Initializes answering process if Colbert is the selected Answer Choice
{
	if (QuestionPlaying === true) 
	{
		SelectedAnswer = "Colbert";
		answerQuote();
	}
}

function answerQuote()		//Checks if the player is correct or incorrect
{
	if (SelectedAnswer === RealAnswer)
		{
			
     	 	CorrectAnswer();
		}
	
	else
		{
			WrongAnswer();
		}
}

function CorrectAnswer()	//Color functionality if player is correct
{
	if 	(SelectedAnswer === "Colbert") 
		{		
				var image = document.getElementById('myImage');
		    	var image2 = document.getElementById('myImage2');
				image.src = "../Images/SelectedColbertCorrectTrump.jpg";
		        image2.src = "../Images/SelectedColbertCorrect.png";
		}

	else
		{
				var image = document.getElementById('myImage');
		    	var image2 = document.getElementById('myImage2');
				image.src = "../Images/SelectedTrumpCorrect.png";
		        image2.src = "../Images/SelectedTrumpCorrectColbert.jpg";
		}
	document.getElementById('whoQ').innerHTML = HappyMessage;
	RightGuessCount++;
	Streak++;
	if(Streak>TopStreak)
	{
		TopStreak = Streak;
	}
	document.getElementById("rGVal").innerHTML = RightGuessCount;
	document.getElementById("wGVal").innerHTML = WrongGuessCount;
	document.getElementById("cSVal").innerHTML = Streak;
	document.getElementById("bSVal").innerHTML = TopStreak;
}

function WrongAnswer()		// Color functionality if player is wrong
{
	if (SelectedAnswer === "Colbert")
		{
			var image = document.getElementById('myImage');
		    var image2 = document.getElementById('myImage2');
			image.src = "../Images/TrumpDefault.png";
		    image2.src = "../Images/SelectedColbertIncorrect.png";
		}	

	else
		{
			var image = document.getElementById('myImage');
		    var image2 = document.getElementById('myImage2');
			image.src = "../Images/SelectedTrumpIncorrect.png";
		    image2.src = "../Images/ColbertDefault.png";
		}	
	document.getElementById('whoQ').innerHTML = SadMessage;
	WrongGuessCount++;
	if(Streak>TopStreak)
	{
		TopStreak = Streak;
	}
	Streak = 0;
	document.getElementById("rGVal").innerHTML = RightGuessCount;
	document.getElementById("wGVal").innerHTML = WrongGuessCount;
	document.getElementById("cSVal").innerHTML = Streak;
	document.getElementById("bSVal").innerHTML = TopStreak;
}

function reset()
{
	var image = document.getElementById('myImage');
	var image2 = document.getElementById('myImage2');
		image.src = "../Images/TrumpDefault.png";
		image2.src = "../Images/ColbertDefault.png";
	document.getElementById('whoQ').innerHTML = 'WHO SAID IT?';
}


var timeInSecs;
var ticker;

function startTimer(secs)
{
	timeInSecs = parseInt(secs)-1;
	ticker = setInterval("tick()",1000);   // every second
}

function endTimer()
{
	clearInterval(ticker);
}

function tick() 
{
	var secs = timeInSecs;
	if (secs>0) 
	{
		timeInSecs--;
	}
	
	else 
	{
		clearInterval(ticker); // stop counting at zero
							   // startTimer(60);  // remove forward slashes in front of startTimer to repeat if required
	}

document.getElementById("countdown").innerHTML = secs;
}  