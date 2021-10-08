const quiztext = [
    {
        question: "How old is John?",
        a: "15",
        b: "25",
        c: "35",
        d: "55",
        correct: "c"
    },{
        question: "What is his name?",
        a: "John",
        b: "Emre",
        c: "Zeki",
        d: "Ali",
        correct: "d"
    },{
        question: "How much get you buy this?",
        a: "662$",
        b: "25$",
        c: "355$",
        d: "55$",
        correct: "a"
    }
];

const answerEl = document.querySelectorAll(".answer");
const quiz = document.getElementById("quiz");
const questionEl  = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitEl = document.getElementById("submit");



let currentQuiz = 0;
let score = 0;
let answer = undefined;

loadquiz();

function loadquiz(){
    deselectAnswer();

    const currentQuizdata = quiztext[currentQuiz];

    questionEl.innerText = currentQuizdata.question;
    a_text.innerText = currentQuizdata.a;
    b_text.innerText = currentQuizdata.b;
    c_text.innerText = currentQuizdata.c;
    d_text.innerText = currentQuizdata.d; 

}

function getSelected(){
    

    answerEl.forEach((answerEl) => {
        if (answerEl.checked){
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswer(){
    answerEl.forEach((answerEl) => {
        answerEl.checked = false;
    })
}
submitEl.addEventListener("click", () => {

    const answer = getSelected();
    

    if (answer){
        
        if (answer === quiztext[currentQuiz].correct){
            score++; 
        } 
        currentQuiz++;
        if (currentQuiz < quiztext.length){
            loadquiz();
        } else {
            quiz.innerHTML = `<h2>Your correct answer is ${score} / ${quiztext.length} </h2> 
            <button class="button"><a href="index.html">Click for Restart</a></button>`

        }

    }
        
});

