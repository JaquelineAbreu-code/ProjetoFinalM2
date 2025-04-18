const question1 = [
    {
        question: "1. Qual palavra-chave é usada para declarar uma variável em JavaScript?",
        answers: [
            { id: 1, text: "let", correct: true},
            { id: 2, text: "varb", correct: false},
            { id: 3, text: "def", correct: false},
            { id: 4, text: "dim", correct: false},
        ]
    },
]

const question2 = [
    {
        question: "2. Qual método é usado para exibir uma mensagem no console do navegador?",
        answers: [
            { id: 1, text: "diplay.log()", correct: false},
            { id: 2, text: "console.print()", correct: false},
            { id: 3, text: "console.log()", correct: true},
            { id: 4, text: "show.log()", correct: false},
        ]
    },
]


const question3 = [
    {
        question: "3. Qual método é usado para remover o último elemento de um array em JavaScript?",
        answers: [
            { id: 1, text: "shift()", correct: false},
            { id: 2, text: "unshift()", correct: false},
            { id: 3, text: "pop()", correct: true},
            { id: 4, text: "splice()", correct: false},
        ]
    },
]


const question4 = [
    {
        question: "4. Qual destes métodos pode ser usado para converter uma string em um número inteiro em JavaScript?",
        answers: [
            { id: 1, text: "parseInt()", correct: true},
            { id: 2, text: "convertToInteger()", correct: false},
            { id: 3, text: "stringToNumber()", correct: false},
            { id: 4, text: "toInteger()", correct: false},
        ]
    },
]

const question5 = [
    {
        question: "5. Como você remove o primeiro elemento de um array em JavaScript?",
        answers: [
            { id: 1, text: "array.pop()", correct: false},
            { id: 2, text: "array.shift()", correct: true},
            { id: 3, text: "array.splice()", correct: false},
            { id: 4, text: "array.removeFirst()", correct: false},
        ]
    },
]


const questionElement = document.getElementById("question");

const answerButtons = document.getElementById("answer-buttons");

const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Próxima";
    showQuestion();
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}


function showQuestion(){
    resetState()
    let currentQuestion =  question[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + "." + currentQuestion.question;

    currentQuestion.answers.forEach(answers => {
        const button = document.createElement("button");
        button.innerHTML = answers.text;
        button.dataset.id = answers.id;
        button.classList.add("btn");
        button.addEventListener("click", selectAnswer);
        answerButtons.appendChild(button);
    });

}

function selectAnswer (e){
    answers = question1, question2, question3, question4, question5[currentQuestionIndex].answers;
    const correctAnswer = answers.filter((answers) =>answers.correct ==true)[0];

    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.id == correctAnswer.id;

    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else {
        selectedBtn.classList.add("incorrect");
    }

    Array.from(answerButtons.children).forEach((button) => {
        button.disabled = true;
    });

    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `Você acertou ${score} de ${question.lenght}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display =  "block"
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < question.lenght){
        showQuestion();
} else {
    showScore();
}}


nextButton.addEventListener("click", () =>{
    if(currentQuestionIndex < question.lenght){
handleNextButton();
    }else {
        startQuiz();
    }
})

startQuiz();;