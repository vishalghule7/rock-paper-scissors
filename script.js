let userScore = 0;
let compScore = 0;

const choice = document.querySelectorAll('.choice');
const msg = document.querySelector('#msg');

const userScoreP = document.querySelector("#user-score");
const compScoreP = document.querySelector("#comp-score");

const genComChoice = () => {
    const options = ["rock","paper","scissors"];
    const random = Math.floor(Math.random() *3);
    return options[random];
};

const drawGame = () => {
    // console.log("Game draw");
    msg.innerText = "Game draw. Play again."
    msg.style.backgroundColor = "#081b33";
};

const showWinner = (userWin,userChoice,compChoice) => {
    if(userWin){
        userScore ++ ;
        userScoreP.innerText = userScore;
        // console.log(`Congrats!! You win.`);
        msg.innerText = `Congrats!! You win. Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }else {
        compScore ++ ;
        compScoreP.innerText = compScore;
        // console.log("You lose!!");
        msg.innerText =` You lose.${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

const playGame =(userChoice)=> {
    // console.log("User choice-", userChoice)
    //generate comp choice
    const compChoice = genComChoice();
    // console.log("comp choice", compChoice);

    if (userChoice === compChoice) {
        drawGame();
    }else {
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false: true;
        } else if (userChoice = "paper") {
            userWin = compChoice === "scissors" ? false: true;
        }else {
            userWin = compChoice === "rock" ? false: true;
        }
        showWinner (userWin,userChoice,compChoice);
    }
};


choice.forEach((choice) => {
    // console.log(choice); to know what we choose.
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame (userChoice);
    });
});