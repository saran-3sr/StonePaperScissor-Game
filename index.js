var randomcomp;
var compscore = 0;
var userscore = 0;
var gameuse = ["Stone", "Paper", "Scissor"];
var winner;

for (var i = 0; i < document.querySelectorAll('.key').length; i++) {
  document.querySelectorAll('.key')[i].addEventListener("click", inputvalue);

}

function inputvalue() {
  for (var k = 0; k < document.querySelectorAll('.key').length; k++) {
    if (gameuse[k] == this.name) {
      usercomp(k);
      break;
    }
  }
}

function usercomp(k) {
  if (compscore < 5 && userscore < 5)
  {
      randomcomp = Math.floor(Math.random() * 3 + 1);
      if (randomcomp == k)
        document.querySelector('#heading').innerHTML = "Its a Draw";
      else if((gameuse[randomcomp]===gameuse[0]&&gameuse[k]===gameuse[1])||(gameuse[randomcomp]===gameuse[1]&&gameuse[k]===gameuse[2])||(gameuse[randomcomp]===gameuse[2]&&gameuse[k]===gameuse[0]))
      {
        document.querySelector('#heading').innerHTML = "User Wins";
        userscore++;
        document.querySelector('#userscore').innerHTML = "User = " + userscore;
      }
     else
     {
       document.querySelector('#heading').innerHTML = "Comp Wins";
       compscore++;
       document.querySelector('#compscore').innerHTML = "Comp = " + compscore;
     }
     if (compscore == 5 || userscore == 5)
     {
       if (compscore > userscore)
       {
         winner = "Computer Wins the Game";
       }
       else
       {
         winner = "User Wins the Game";
       }
       document.querySelector('#heading').innerHTML = winner;
       document.querySelector('#rules').innerHTML = "Refresh the page to play again😊❤";
       setTimeout(function () {
        alert("Refresh The Page to Play again") ;
      }, 300);
     }

  }
  else
  {

  }

}
