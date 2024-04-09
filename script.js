let userScore=0;
let compScore=0;

const choices= document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userScorePara=document.querySelector("#user-score ");
const compScorePara=document.querySelector("#comp-score ");


const genComChoice=()=>{

    const options=["rock","paper","scissors"]
// rock paper sissor 
   const randIdx=Math.floor(Math.random()*3)   // generate random value from 0 to 2 
   return options[randIdx];

}

const drawGame=()=>{
    // console.log("Game was draw.")
    msg.innerText= "Game was draw  play again";
    msg.style.backgroundColor="black";

}

const showWinner=(userWin,userChoice,compChoice)=>{
   if(userWin){
    userScore++;
    userScorePara.innerText=userScore;
    msg.innerText= `you win your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor="green";

   }
   else{
    compScore++;
    compScorePara.innerText=compScore;
        msg.innerText= `you lose!${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor="red"


   }
}

const playGame=(userChoice)=>{
    console.log("userChoice=",userChoice)
    // Generate computer choice->modular 
    const compChoice=genComChoice();
    console.log("com choice=", compChoice);

    if(userChoice===compChoice){

        drawGame();
    }else{
        let userWin=true;
        if(userChoice==="rock"){
            // scissors, paper
            userWin=compChoice==="paper"? false: true;
        } else if(userChoice==="paper"){
            userWin=compChoice==="scissors"? false: true;
        } else if (userChoice==="scissors"){
            userWin=compChoice==="rock"? true: false;
        }
        showWinner(userWin, userChoice,compChoice); 
    }
}

choices.forEach((choice)=>{
    
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
       // console.log("choice was clicked", userChoice);
        playGame(userChoice);
    });
});