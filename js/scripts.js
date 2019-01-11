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
//function to reset game user click on New Game
function reset() {
    pos = 0;
    playersInfo.playerMarks = 0;
    playersInfo.totalScores = 0;
    $("#image-die").html("");
    $("p.text-uppercase").text("");
    $("h1").text("0");
    $(".cumulative").text("");
}
//user interface logic

//section to hide screen with start game button and show new empty game
$(document).ready(function () {
    $("#fresh-game").click(function () {
        $("#start-game").hide();
        $(".dice-game").show();
        $("#reset").hide();
    })
    //section to reset game and show new starting player when we click start button
    $("#reset").click(function () {
        reset();
        $("#hold").show();
        $("#roll-dice").hide();
        $("#reset").hide();
        $("#content1").addClass("player-turn");
        //console.log(finalScore);
    })
})