const data = [
    {
        id: 1,
        question: "Which of these fish are actually fish?",
        answers: [
            { answer: "swordfish", iscorrect: true},
            { answer: "jellyfish", iscorrect: false},
            { answer: "starfish", iscorrect: false},
            { answer: "crayfish", iscorrect: false},
        ]
    },
    {
        id: 2,
        question: "Which of these animals are mammals?",
        answers: [
            { answer: "shark", iscorrect: false },
            { answer: "dolphin", iscorrect: true },
            { answer: "octopus", iscorrect: false },
            { answer: "penguin", iscorrect: false }
        ]
    },
    {
        id: 3,
        question: "Which of these are considered renewable energy sources?",
        answers: [
            { answer:  "coal", iscorrect: false },
            { answer: "natural gas", iscorrect: false },
            { answer: "nuclear power", iscorrect: false },
            { answer: "solar power", iscorrect: true }
        ]
    },
    {
        id: 4,
        question: "Which of these planets have rings?",
        answers: [
            { answer: "Mars", iscorrect: false },
            { answer:  "Saturn", iscorrect: true },
            { answer: "Venus", iscorrect: false },
            { answer: "Earth", iscorrect: false }
        ]
    },
    {
        id: 5,
        question: "Which of these is a prime number?",
        answers: [
            { answer: "10", iscorrect: false },
            { answer: "8", iscorrect: false },
            { answer: "9", iscorrect: false },
            { answer:  "7", iscorrect: true }
        ]
    }
]

const GameScreen = document.querySelector('.game');
const ResultScreen = document.querySelector('.result');
const question = document.querySelector('.question');
const answerContainer = document.querySelector('.answers');
const submit = document.querySelector('.submit');
const play = document.querySelector('.play');

let qIndex = 0;
let correctCount = 0;
let wrongCount = 0;
let total = 0;
let SelectedAnswer;

const PlayAgain = () => {
    qIndex = 0;
    correctCount = 0;
    wrongCount = 0;
    total = 0;
    ShowQuestion(qIndex);
}

play.addEventListener("click", () => {
    ResultScreen.style.display = "none";
    GameScreen.style.display = "block";
    PlayAgain();
});

const ShowResults = () => {
    ResultScreen.style.display = "block";
    GameScreen.style.display = "none";
    ResultScreen.querySelector('.correct').textContent =
    `Correct Answers: ${correctCount}`;
    ResultScreen.querySelector('.wrong').textContent =
    `Wrong Answers: ${wrongCount}`;
    ResultScreen.querySelector('.score').textContent =
    `score: ${(correctCount - wrongCount) * 10}`;
};

const ShowQuestion = (qNumber) => {
    if(qIndex === data.length) return ShowResults();
    SelectedAnswer = null;
    question.textContent = data[qNumber].question;
    answerContainer.innerHTML = data[qNumber].answers.map((item, index) => 
          `<div class="answer">
                <input name="answer" type="radio" id=${index} value=${item.iscorrect}>
                <label for=${index}>${item.answer}</label>
            </div>`
    ).join("");
    SelectAnswer();
}

const SelectAnswer = () => {
    answerContainer.querySelectorAll("input").forEach(el =>{
        el.addEventListener("click", (e) =>{
            SelectedAnswer = e.target.value;
        });
    });
}

const submitAnswer= () => {
    submit.addEventListener('click', () =>{
        if(SelectedAnswer !== null){
            SelectedAnswer === "true" ? correctCount++ : wrongCount++;
            qIndex++;
            ShowQuestion(qIndex);
        }
    else alert("PLease select answer!");
    });
};

ShowQuestion(qIndex);
submitAnswer();