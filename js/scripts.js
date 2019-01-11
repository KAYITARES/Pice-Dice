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
//Method for the playersInfo constructor to add total score per turn
playersInfo.prototype.addScores = function (thisMark) {
    if (thisMarks == 1) {
        this.playerMarks = 0;
    }
    else if (thisMark !== 1) {
        this.playerMarks = this.playerMarks + thisMark;
    }
    return this.playerMarks;
}
//method for the playersInfo constructor to add amount of number returned plus the existing number
playersInfo.prototype.total = function (total) {
    return this.totalScores = this.totalScores + total;
}
//function to display image based on their rolling number
var getDieSide = function (getInput) {
    if (getInput == 1) diePic = "img/dice/1.jpg";
    else if (getInput == 2) diePic = "img/dice/2.jpg";
    else if (getInput == 3) diePic = "img/dice/3.jpg";
    else if (getInput == 4) diePic = "img/dice/4.jpg";
    else if (getInput == 5) diePic = "img/dice/5.jpg";
    else if (getInput == 6) diePic = "img/dice/6.jpg";

    return diePic;
}
