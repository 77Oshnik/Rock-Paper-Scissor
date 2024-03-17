let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice")
const msg =document.querySelector("#msg")
const userscorepara=document.querySelector("#user_score")
const compscorepara=document.querySelector("#comp_score")

const genCompChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const random = Math.floor(Math.random() * 3);
    const compchoice = options[random];
    return compchoice;
}

const playgame = (userchoice) => {
    console.log("user choice", userchoice);
    const computerchoice = genCompChoice();
    console.log("computer choice", computerchoice);

    if (computerchoice === userchoice) {
        drawgame()
    }
    else {
        let userwin = true;
        if (userchoice === "rock") {
            userwin = computerchoice === "paper" ? false : true;
        }
        else if (userchoice === "paper") {
            userwin = computerchoice === "scissor" ? false : true;
        }
        else  {
            userwin = computerchoice === "rock" ? false : true;
        }
       showwinner(userwin , userchoice ,computerchoice);       
    }

}

const drawgame = () => {
    console.log("draw")
    msg.innerText="Game was Draw!! Play Again"
    msg.style.backgroundColor=" rgba(255, 255, 255, 0.5)"
}

const showwinner=(userwin , userchoice ,computerchoice)=>{
    if(userwin ===true){
        userscore++
userscorepara.innerText=(userscore)
        console.log("you win")
        msg.innerText=`Congrulations!! You Win. Your ${userchoice} beats ${computerchoice}`
        msg.style.backgroundColor = "green"
    }else{
        compscore++;
       compscorepara.innerText=(compscore)
        console.log("you lose")
        msg.innerText=`You lose. ${computerchoice} Beats Your ${userchoice}`
        msg.style.backgroundColor="red"
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id")

        playgame(userchoice)

    })
})