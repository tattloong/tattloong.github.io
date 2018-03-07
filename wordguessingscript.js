const wordGuess="bananas";
const wordState=[];
let guessesLeft=10;
const prevGuesses= [];
function displayWordState(state){
	let output='';
	for (let i = 0 ; i <state.length; i++){
		const char=state[i];
		output=output+char;
		output= output+' ';
	}
	const wordStateContainer= document.getElementById('word');
	wordStateContainer.innerHTML=output;
}

	function displayGuessesLeft(num){
		document.getElementById('guesses-left').innerHTML=num;
}

	function displayPreviousGuesses(guessesArray){

		const list = document.getElementById('past-guesses');
		list.innerHTML="";
		for (let i = 0 ; i < guessesArray.length ; i++){
			const guess=document.createElement('li');
			guess.innerHTML=guessesArray[i];
			list.appendChild(guess);

		}
	}

	function guess(wordGuess, wordState, currentInput){
		for(let i = 0; i < wordGuess.length ; i++ ){
			if (wordGuess[i]==currentInput){
				wordState[i]= currentInput;
			}
		}
		displayWordState(wordState);
	}
	const won= checkWon(wordState);
	if(won){
		window.alert('You Won!')
	}
	function checkWon(wordState){
		let hasBlanks=false;
		for(let i = 0; i < wordState.legth; i++){
			if (wordState[i] =='_'){
				hasBlanks = true;
			}
		}
		return!hasBlanks;
	}
function setup(){
	for(let i=0; i < wordGuess.length; i++){
		wordState.push("_")
	}
	displayGuessesLeft(guessesLeft);
	displayWordState(wordState);
	displayPreviousGuesses(prevGuesses);
}

	

function setupForm(){
const form=document.getElementById('user-input');
const input=document.getElementById('player-guesses');

form.onsubmit= function(event){
	event.preventDefault();
	const currentInput= input.value.toLowerCase();
	input.value="";
	if(!validateInput(currentInput,prevGuesses)){
		window.alert("Alphabets only")
		return;
	}

	//
	prevGuesses.push(currentInput);
	guessesLeft= guessesLeft - 1;
	displayGuessesLeft(guessesLeft);

	guess(wordGuess,wordState,currentInput);

	const won=checkWon(wordState);
	if (won){
		window.alert("Congratualations! You Won!")
	}
	else if(guessesLeft==0){
		window.alert("You Lost")
	}
displayPreviousGuesses(prevGuesses);

}
}


function validateInput(guess,prevGuesses){

	if (guess.length == 1 && prevGuesses.indexOf(guess) == -1){
		return true;
	}
	else{return false};

}

setup();
setupForm();