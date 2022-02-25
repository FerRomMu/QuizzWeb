//const numButtons = document.querySelectorAll(".button__num");
const startButton = document.querySelector(".quizz__btn-start");
const nextButton = document.querySelector(".quizz__btn-next");
const quizzContainer = document.querySelector(".quizz__container");
const optionsButtons = document.querySelectorAll(".quizz__option");
const question = document.querySelector(".quizz__question");

class Question {
    
    constructor(question, correct, wrongs){
        this.question = question //un string
        this.correct = correct //un string con la respuesta correcta
        this.wrongs = wrongs //un array de 3 strings con respuestas erroneas
    }

    question(){
        return this.question;
    }

    correct(){
        return this.correct;
    }

    wrongs(){
        return this.wrongs;
    }
}

class Quizz {

    constructor(questions, next, options, question){
        this.questionsArray = questions //un array de question
        this.nextButtonElement = next //El elemento del boton next del DOM
        this.optionsElement = options //Los elementos de los botones de opciones
        this.questionDisplayElement = question //El elemento donde van las preguntas
    }

    start() {
        startButton.classList.add('hide');
        quizzContainer.classList.remove('hide');
        this.newQuestion();
    }

    newQuestion() {
        if (this.questionsArray.length == 0) {
            this.quizzEnd();
            return;
        }
        let nextQuestion = this.questionsArray.pop();
        this.questionDisplayElement.innerText = nextQuestion.question;
        this.correctAnswer = Math.floor(Math.random()*4);
        let auxArray = nextQuestion.wrongs;
        auxArray.splice(this.correctAnswer, 0, nextQuestion.correct);
        console.log(this.correctAnswer);
        this.optionsElement.forEach(option => option.innerText = auxArray.pop());
    }

    answer(option){
        if(option == this.correctAnswer){
            console.log("Respuesta correcta");
        }
    }

    quizzEnd(){}
}

const q1 = new Question('Which key is used to close vim editor?','q',['non of the other options','esc','f4']);
const q2 = new Question("Which is the decimal equivalent of 1011 if it is on binary and two's complement?",'-5',[11,-11,-3]);
const q3 = new Question('Which of the following data structures is FIFO?','Queue',['Set','Stack','Tree']);
const q4 = new Question('What do the acronyms DOM mean?','CheatDocument Object Model',['Data Object Mode','Data Object Model','Document of Multimedia']);
/*const q5 = new Question('','',['','','']);
const q6 = new Question('','',['','','']);
const q7 = new Question('','',['','','']);
const q8 = new Question('','',['','','']);
const q9 = new Question('','',['','','']);
const q10 = new Question('','',['','','']);
const q11 = new Question('','',['','','']);

const quizz = new Quizz([q1,q2,q3,q4,q5,q6,q7,q8,q9,q10,q11], nextButton, optionsButtons,
    questionDisplay);*/

const quizz = new Quizz([q1,q2,q2,q4], nextButton, optionsButtons, question);

startButton.addEventListener('click', () => { quizz.start() })

nextButton.addEventListener('click', () => { quizz.newQuestion() })

optionsButtons.forEach(button => button.addEventListener('click', () => { quizz.answer(button.id) }))

