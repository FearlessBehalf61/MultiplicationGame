const num1 = Math.floor(Math.random()*10);
const num2 = Math.floor(Math.random()*10);
const scoreElement = document.getElementById("score");
const questionElement = document.getElementById("question");

let score = JSON.parse(localStorage.getItem("score"));
if(!score){
    score = 0;
}

scoreElement.innerText = `score: ${score}`
questionElement.innerText = `What is ${num1} multiply by ${num2} ?`


const element = document.getElementById("btn");

const correctAnswer = num1 * num2;

function takeValue(){
    
    const userAnswer = Number(document.getElementById("input").value);
    if(userAnswer == correctAnswer){
        score++;
        updateLocalStorage()
    }
    else{
        score--;
        updateLocalStorage()
    }
}

function updateLocalStorage(){
    localStorage.setItem("score", JSON.stringify(score) )
}