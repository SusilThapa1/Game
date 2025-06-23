//variable for score-board
let userScore = 0;
let compScore = 0;
//Accessing HTML attributes
let btn = document.getElementById("btn");
let mode = document.getElementById("mode");
let icon = document.getElementById("icon");
let rock_id = document.getElementById("rock");
let scissor_id = document.getElementById("scissor");
let paper_id = document.getElementById("paper");
let comp_id = document.getElementById("cScore");
let user_id = document.getElementById("uScore");
let userScore_id = document.getElementById("user-score");
let compScore_id = document.getElementById("computer-score");
let userMsg = document.getElementById("user-msg");
let compMsg = document.getElementById("comp-msg");
let msg_id = document.getElementById("result");
let msg = document.querySelector("#result > p");

//Dark and light theme

function theme() {
  btn.addEventListener("click", function () {
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")) {
      icon.src = "sun-solid.svg";
      mode.innerText = "Light";
    } else {
      icon.src = "moon-solid.svg";
      mode.innerText = "Dark";
    }
  });
}
theme();

//User choice
function uChoice() {
  rock_id.addEventListener("click", function () {
    choice("rock");
    updateScoreColor();
  });

  scissor_id.addEventListener("click", function () {
    choice("scissor");
    updateScoreColor();
  });

  paper_id.addEventListener("click", function () {
    choice("paper");
    updateScoreColor();
  });
}
uChoice();

//Computer choice
function computerChoice() {
  let Choice = ["rock", "scissor", "paper"];
  let randNum = Math.floor(Math.random() * 3);
  return Choice[randNum];
}

// checks winner
function choice(userChoice) {
  let compChoice = computerChoice();
  if (userChoice === compChoice) {
    draw(userChoice, compChoice);
  } else if (
    (userChoice === "rock" && compChoice === "scissor") ||
    (userChoice === "scissor" && compChoice === "paper") ||
    (userChoice === "paper" && compChoice === "rock")
  ) {
    win(userChoice, compChoice);
  } else {
    lose(userChoice, compChoice);
  }
}
//If (user win or computer lose)
function win(userChoice, compChoice) {
  userScore++;
  userScore_id.innerText = userScore;
  msg.style.background = "green";
  msg.innerText = `You Win Current Round ! Your ${userChoice} beat  computer's ${compChoice}`;
}

//If (user lose or computer win)
function lose(userChoice, compChoice) {
  compScore++;
  compScore_id.innerText = compScore;
  msg.style.background = "red";
  msg.innerText = `You Lose Current Round ! Computer's ${compChoice} beat your ${userChoice}`;
}

//If  both select same (draw)
function draw(userChoice, compChoice) {
  msg.style.background = "#2aaeae";
  msg.innerText = `Draw! Both select ${userChoice}`;
}
function updateScoreColor() {
  if (userScore > compScore) {
    user_id.style.color = "green";
    comp_id.style.color = "red";
    userMsg.innerText = "Amazing ! You're leading";
    compMsg.innerText = "Computer is losing";
  } else if (userScore < compScore) {
    user_id.style.color = "red";
    comp_id.style.color = "green";
    userMsg.innerText = " Oh Shit ! You're losing";
    compMsg.innerText = "Computer is leading";
  } else {
    // Draw condition
    comp_id.style.color = "#2aaeae";
    user_id.style.color = "#2aaeae";
    userMsg.innerText = " Boom 💥 It's Draw";
    compMsg.innerText = "Boom💥 It's Draw ";
  }
}
