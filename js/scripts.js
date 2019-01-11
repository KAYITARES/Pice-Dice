//business logic

//variable to track number of player
var num = 0,
    //initial variable
    newMark = 0,
    playerDetails = [],
    finalScore = 0,
    diePic = "",
    pos = 0;
//constructor for object containing information for the user
function playersInfo(name, score, totalScore) {
    this.playerNames = name;
    this.playerMarks = score;
    this.totalScores = totalScore;
}
//when user rolls function that choose random number between 1 and 6 without floating points
var genRandom = function () {
    randomNo = Math.floor(Math.random() * 6) + 1;
    return randomNo;
}
