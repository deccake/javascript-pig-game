//game variables
var scores, roundScore, count, activePlayer, gamePlaying, prevDice;
init();
// document.querySelector('#current-'+activePlayer).textContent = dice;
// document.querySelector('#current-'+activePlayer).innerHTML ='<em>'+dice+'</em>' ;

var x = document.querySelector("#score-0").textContent;
// console.log(x);

document.querySelector(".btn-roll").addEventListener("click", function () {
  if (gamePlaying) {
    //random number

    var dice = Math.floor(Math.random() * 6) + 1;

    //display result
    var diceDOM = document.querySelector(".dice");

    diceDOM.style.display = "block";
    diceDOM.src = "img/dice-" + dice + ".png";
    //update round score and if roll 1 move to next player
    if (dice !== 1) {
      // prevDice = dice;
      if (dice === 6 && prevDice === 6) {
        console.log("prevDice: ", prevDice, " currDice: ", dice);
        roundScore = 0;
        scores[activePlayer] = 0;
        document.querySelector("#current-" + activePlayer).textContent = roundScore;
        document.querySelector("#score-" + activePlayer).textContent = scores[activePlayer];
        nextPlayer();
      } else {
        //add score
        roundScore += dice;
        document.querySelector("#current-" + activePlayer).textContent = roundScore;
      }
    } else {
      nextPlayer();
    }
    prevDice = dice;
  }
});

document.querySelector(".btn-hold").addEventListener("click", function () {
  if (gamePlaying) {
    scores[activePlayer] += roundScore;
    document.getElementById("score-" + activePlayer).textContent = scores[activePlayer];

    if (scores[activePlayer] >= 40) {
      gamePlaying = false;

      document.querySelector("#name-" + activePlayer).textContent = "WINNER!";
      document.querySelector(".dice").style.display = "none";
      document.querySelector(".player-" + activePlayer + "-panel").classList.remove("active");
      document.querySelector(".player-" + activePlayer + "-panel").classList.add("winner");
    } else {
      nextPlayer();
    }

    //check player won the game
  }
});

function nextPlayer() {
  //next player
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  //restart round score
  roundScore = 0;
  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";

  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");

  document.querySelector(".dice").style.display = "none";
}

function init() {
  scores = [0, 0];
  roundScore = 0;
  activePlayer = 0;
  count = 0;
  gamePlaying = true;
  document.querySelector(".dice").style.display = "none";
  document.getElementById("score-0").textContent = 0;
  document.getElementById("score-1").textContent = 0;
  document.getElementById("current-0").textContent = 0;
  document.getElementById("current-1").textContent = 0;
  document.getElementById("name-0").textContent = "Player 1";
  document.getElementById("name-1").textContent = "Player 2";
  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");
  document.querySelector(".player-0-panel").classList.remove("active");
  document.querySelector(".player-1-panel").classList.remove("active");
  document.querySelector(".player-0-panel").classList.add("active");
}

document.querySelector(".btn-new").addEventListener("click", init);
