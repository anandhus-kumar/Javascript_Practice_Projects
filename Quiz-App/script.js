const questions = [
  {
    question: "What is the capital of India?",
    answers: [
      { text: "Mumbai", correct: false },
      { text: "New Delhi", correct: true },
      { text: "Kolkata", correct: false },
      { text: "Chennai", correct: false }
    ]
  },
  {
    question: "Which planet is known as the Red Planet?",
    answers: [
      { text: "Earth", correct: false },
      { text: "Mars", correct: true },
      { text: "Venus", correct: false },
      { text: "Jupiter", correct: false }
    ]
  },
  {
    question: "Who is known as the Father of the Nation in India?",
    answers: [
      { text: "Jawaharlal Nehru", correct: false },
      { text: "Mahatma Gandhi", correct: true },
      { text: "Subhash Chandra Bose", correct: false },
      { text: "B. R. Ambedkar", correct: false }
    ]
  },
  {
    question: "How many continents are there in the world?",
    answers: [
      { text: "5", correct: false },
      { text: "6", correct: false },
      { text: "7", correct: true },
      { text: "8", correct: false }
    ]
  },
  {
    question: "Which is the largest ocean in the world?",
    answers: [
      { text: "Indian Ocean", correct: false },
      { text: "Atlantic Ocean", correct: false },
      { text: "Pacific Ocean", correct: true },
      { text: "Arctic Ocean", correct: false }
    ]
  }
];
const questionElement = document.querySelector("#question");
const answerButtons = document.querySelector("#answer-buttons")
const nextButton = document.querySelector("#next-btn")


let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
  currentQuestionIndex=0;
  score=0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

 
function showQuestion(){

  resetState();
let currentQuestion = questions[currentQuestionIndex];
let questionNo = currentQuestionIndex+1;
questionElement.innerHTML= questionNo+"." + currentQuestion.question;

currentQuestion.answers.forEach(answer =>{
  const  button = document.createElement("button");
  button.innerHTML = answer.text;
  button.classList.add("btn");
  answerButtons.appendChild(button);
  if(answer.correct){
    button.dataset.correct = answer.correct
  }
  button.addEventListener("click",selectAnswer)
})
}




function resetState(){
  nextButton.style.display ="none";
  while(answerButtons.firstChild){
    answerButtons.removeChild(answerButtons.firstChild)
  }
}


function selectAnswer(e){
  const selectedButton =  e.target;
  const isCorrect = selectedButton.dataset.correct === "true";
  console.log(isCorrect);
  
  if(isCorrect){
    selectedButton.classList.add("correct")
    score++;
  }else{
    selectedButton.classList.add("incorrect")
    
  }
  Array.from(answerButtons.children).forEach(button =>{
    if(button.dataset.correct === "true"){
      button.classList.add("correct");
    }
    button.disabled = true;
  })
  
nextButton.style.display ="block"
}

function showScore(){
  resetState();
  questionElement.innerHTML = `you scored ${score} out of ${questions.length}`
  nextButton.innerHTML = "Play Again";
  nextButton.style.display= "block"
}

function handleNextButton(){
  currentQuestionIndex++;
  if(currentQuestionIndex<questions.length){
    showQuestion();
  }else{
    showScore();
  }
}

nextButton.addEventListener("click",()=>{
  if(currentQuestionIndex < questions.length){
    handleNextButton();
  }else{
    startQuiz()
  }
})


startQuiz()





  

  
  





