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