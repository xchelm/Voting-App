


var imagesArray = ["puppy.jpeg", "kitten.jpeg", "lamb.jpg", "piglet.jpeg", "duckling.jpg", "monkey.jpg"]
var begin = "./images/"
// adding folder to images
for(var i = 0; i < imagesArray.length; i++){
	imagesArray[i] = begin + imagesArray[i]
};

var currentAnimal = 0

var ani = document.getElementById("animal")	
var pupRating = [];
var kitRating = [];
var lamRating = [];
var pigRating = [];
var ducRating = [];
var monRating = [];

//Sets the first animal picture up
var start = function (){
	currentAnimal = 0;
	document.getElementById('animal').src = imagesArray[currentAnimal]
}

// calling start to display first picture
start()

//Function to cycle through the array of animal pictures after user votes
var changeToNewAnimal = function() {
	currentAnimal++;
	document.getElementById("animal").src = imagesArray[currentAnimal]
}

//Function to go to results page and hide all buttons and pictures
var displayResults = function() {
	document.getElementById("thumbsUp").style.display = "none";
	document.getElementById("thumbsDown").style.display = "none";
	document.getElementById("results").style.display = "none";
	document.getElementById("animal").style.display = "none";
	document.getElementById('resultsContainer').innerHTML="here are the results";
	
	document.getElementById("reset").style.display ="inline";
}

//User clicks the thumbs up
document.getElementById("thumbsUp").onclick = function() {

	if (currentAnimal<imagesArray.length-1){
		if (currentAnimal == 0){
			 pupRating.push(1);
			 console.log('You hit the thumbs up for pup');
		} else if(currentAnimal == 1){
			kitRating.push(1);
			console.log('You hit the thumbs up for kat');
		} else if(currentAnimal == 2) {
			lamRating.push(1);
			console.log('You hit the thumbs up lamb');
		} else if (currentAnimal == 3) {
			pigRating.push(1);
			console.log('You hit the thumbs up pig');
		} else if (currentAnimal == 4) {
			ducRating.push(1);
			console.log('You hit the thumbs up duc');
		} else if (currentAnimal == 5) {
			monRating.push(1);
			console.log('You hit the thumbs up monkey');
		} else {
				console.log('error')
		};
	
		changeToNewAnimal();

	} else {
	displayResults();
	}
}

//User clicks the thumbs down
document.getElementById("thumbsDown").onclick = function() {
	if (currentAnimal<imagesArray.length-1){

		if (currentAnimal == 0){
			 pupRating.push(0);
			 console.log('You hit the thumbs down for pup');
		} else if(currentAnimal == 1){
			kitRating.push(0);
			console.log('You hit the thumbs down for kat');
		} else if(currentAnimal == 2) {
			lamRating.push(0);
			console.log('You hit the thumbs down lamb');
		} else if (currentAnimal == 3) {
			pigRating.push(0);
			console.log('You hit the thumbs down pig');
		} else if (currentAnimal == 4) {
			ducRating.push(0);
			console.log('You hit the thumbs down duc');
		} else if (currentAnimal == 5) {
			monRating.push(0);
			console.log('You hit the thumbs down monkey');
		} else {
				console.log('error')
		};
	
		changeToNewAnimal();
	} else {
	displayResults();
	}
}

//User clicks the results button
document.getElementById("results").onclick = function() {
	displayResults();
}

// Go back to vote again
document.getElementById('reset').onclick =function() {
	start();
	document.getElementById("thumbsUp").style.display = "inline";
	document.getElementById("thumbsDown").style.display = "inline";
	document.getElementById("results").style.display = "inline";
	document.getElementById("animal").style.display = "inline";
	document.getElementById("resultsContainer").innerHTML= "";
	document.getElementById("reset").style.display ="none";
}

// math to show results
function countVotes(arr){
	var tUp = [];
	var tDown = [];

	for(var x = 0; x < arr.length; x++) {

			if (arr[x] == 0) {
				tDown.push(arr[x]);
			} else {
				tUp.push(arr[x]);
			}
 		};
	var cute  = tUp.length;
	var notCute = tDown.length;
	var totalCount = arr.length;
	var say = cute +" votes for cute, and " + notCute + " for not cute. There were a total of " + totalCount + " votes.";
	return say
};


// I'm stuck at trying to return the votes.


// var finalResults = function (){
//  var bigArray = [pupRating, pigRating, monRating, lamRating, kitRating, ducRating];
//  var createADiv = document.createElement('div');
//  for(var y = 0; y < bigArray.length; y++){
  	 
  	 // find out how to print results
//  }
// }

