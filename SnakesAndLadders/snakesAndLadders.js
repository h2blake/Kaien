/* 
* See this code in action: https://plnkr.co/edit/nKXhdyfxKxYl12ytYCpN
*
*/

'use strict';

var position = 1,
    outputElement = document.getElementsByClassName("game-output"),
    intervalID = window.setInterval(execGameLogic, 300);

/*
 * Main game logic execution
 */
function execGameLogic() {
    var roll = dieRoll();
    var type = updatePositionAndGetType(roll);
    
    if (position === 100) {
        clearInterval(intervalID);
    }
    else if (position > 100) {
        position = position - roll;
    }
    
    renderGameResults(roll + "-" + type + position);
}

/*
 * Generate a random number between 1 and 6
 *
 * @return {integer} die roll value
 */
var dieRoll = function() {
    return Math.floor(Math.random() * 6) + 1;
};

/*
 * Determine if a square is a snake. A snake
 * square is either on 25 or 55.
 * 
 * @param pos {integer} The current position of the piece. Not using the global 
 * var for unit testing support. 
 *
 * @return    {boolean} True or false if the current position is a snake square
 */
var isSnakeSquare = function(pos) {
    return (pos % 9 === 0);
};

/*
 * Determine if a square is a ladder. A ladder
 * square is either on 25 or 55.
 * 
 * @param pos {integer} The current position of the piece.
 * @return    {boolean} True or false if the current position is a ladder square
 */
var isLadderSquare = function(pos) { 
    var ladderKnownLocations = [25, 55]; //array so it is easy to scale up
    return (ladderKnownLocations.indexOf(pos) != -1);
};

/*
 * Updates the position of the die, and returns the square type string.
 * "snake, "ladder" or an empty string ""."
 * 
 * @param  roll {integer} The dice roll
 * @return type {string} The type of square
 */
function updatePositionAndGetType(roll) {
    var type = "";
    position = position + roll;
    
    if (isSnakeSquare(position)) {
        position = position - 3;
        type = "snake"
    }
    else if (isLadderSquare(position)) {
        position = position + 10;
        type = "ladder";
    }
    return type;
}

/*
 * Simple function to generate DOM in vanilla JS
 * @param {string} text A new line of text that will be rendered sequentially
 */
function renderGameResults(text) {
    var textNode = document.createTextNode(text);
    var element = document.createElement('div');
    element.className="col-xs-12 gameOutputLine";
    element.appendChild(textNode);
    outputElement[0].appendChild(element);
}
