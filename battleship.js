var location1 = 3;
var location2 = 4;
var location3 = 5;  //we need three variables to hold the ships location

var guess;  //hold the user's current guess
var hits = 0;  // hold the number of hits
var guesses = 0;
var isSunk = false;   // we'll set this true when we've sunk the ships

while(isSunk == false){
    guess = prompt("Ready, aim, fire! (enter a number 0-6 ):");
    if (guess < 0 || guess > 6){
        alert("Please enter a valid cell number!");
    }else{
        guesses = guesses + 1;
        if(guess == location1 || guess == location2 || guess == location3){

            alert("Hit!");
            hits = hits + 1;
            if(hits == 3){
                isSunk = true;
                alert("You sank my battleship")
            }
        } else{
            alert("Miss");
        }
    }
}
    
 

var stats = "You took " + guesses + " guesses to sink the battleship, " + "which means your shooting accuracy was " + (3/guesses);
alert(stats);
