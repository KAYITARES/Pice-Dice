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
    if (thisMark == 1) {
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
        $("#roll-dice").show();
        $("#reset").hide();
        $("#content1").addClass("player-turn");
        //console.log(finalScore);
    })
    //section to make sure that player do't exceed 2 
    $("#player-names").submit(function (event) {
        event.preventDefault();
        //increament when new user name is submitted
        num++;
        if (num > 2) {
            alert("players cannot exceed 2!");
            playerDetails = [];
            num = 0;
            console.log(playerDetails);
            reset();
            //stop showing pop for 2 player name inserted
        } 
        else if (num == 2) {
            $("#input-details").modal('hide');
        }
        var inputtedName = $("#name-player").val();
        var newPlayer = new playersInfo(inputtedName, 0, 0);
        playerDetails.push(newPlayer);
        $("#content1").addClass("player-turn");
        $("#content" + num + " h2").html("<span class=player" + num + ">" + newPlayer.playerNames + "</span>");

        $("#name-player").val("");
    });
    $("#roll-dice").click(function () {
        if (num == 2) {
            var switchPlayer;
            var getRandom = genRandom();
            var getPlayerId = playerDetails[pos];
            getPlayerId.addScores(getRandom);
            if (getRandom == 1 && pos == 0) {
                $("#content" + (pos + 1) + "h4").text("0");
                //section to give score 0 and change styling when player1 rolls 1
                $("#content" + (pos + 1)).removeClass("player-turn");
                $("#image-die").html("");
                pos = 1;
                switchPlayer = playerDetails[pos];
                $("p.text-uppercase").html("Oooops, You rolled a 1. <br>" + switchPlayer.playerNames + "'s turn");
                // alert("Oooops, You rolled a 1. " + switchPlayer.playerNames + "'s turn");
                $("#content" + (pos + 1)).addClass("player-turn");
            } 
            else if (getRandom > 1) {
                newMark = getPlayerId.playerMarks;
                $("p.text-uppercase").text("");
                $("#content" + (pos + 1) + " h4").text(newMark);
                $("#image-die").html("<img class='dice' height='200' width = '200' src=" + getDieSide(getRandom) + ">")
            }
            console.log(getRandom + " " + pos + " " + newMark);
        } 
        else if (num == 1) {
            alert("Player 2 Name Required");
            $("#input-details").modal();
        } 
        else if (num == 0) {
            alert("Players' Names Required");
            $("#input-details").modal();
        }
    });
    $("#hold").click(function () {
        if (num == 2) {
            var getPlayerId = playerDetails[pos];
            newMark = getPlayerId.playerMarks;
            getPlayerId.total(newMark);
            finalScore = getPlayerId.totalScores;
            console.log(finalScore);
            //Make the total become 0;//Final score, This Round, Dice Value
            getPlayerId.playerMarks = 0;
            $("#content" + (pos + 1) + " h4").text("0");
            $("#content" + (pos + 1) + " h1").text(finalScore);
            $("#image-die").html("");
            if (pos == 0) {
                $("#content" + (pos + 1)).removeClass("player-turn");
                pos = 1;
                $("#content" + (pos + 1)).addClass("player-turn");
            } 
            else if (pos == 1) {
                $("#content" + (pos + 1)).removeClass("player-turn");
                pos = 0;
                $("#content" + (pos + 1)).addClass("player-turn");
            }
            //section to determine and display the winner
            if (finalScore > 100) {
                playerDetails[0].totalScores = 0;
                playerDetails[1].totalScores = 0;
                $(".winner-text").html("<h3 class = 'text-uppercase'>" + getPlayerId.playerNames + " HAS WON!!!</h3>")
                $("#winner-modal").modal();
                // alert(getPlayerId.playerNames + " has won!!");
                $("#hold").hide();
                $("#roll-dice").hide();
                $("#reset").show();
                $("#content1").removeClass("player-turn");
                $("#content2").removeClass("player-turn");
            }
        } 
        else if (num == 1) {
            alert("Player 2 Name Required");
            $("#input-details").modal();
        }
         else if (num == 0) {
            alert("Players' Names Required");
            $("#input-details").modal();

        }
    });
});