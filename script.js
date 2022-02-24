//const numButtons = document.querySelectorAll(".button__num");
const startButton = document.querySelector(".quizz__btn-start");
const nextButton = document.querySelector(".quizz__btn-next");
const quizzContainer = document.querySelector(".quizz__container");

class Question {
    
    constructor(question, right, wrongs){
        this.question = question //un string
        this.right = right //un string con la respuesta correcta
        this.wrongs = wrongs //un array de 3 strings con respuestas erroneas
    }
}

class Quizz {

    constructor(questions, next, quizz){
        this.questionsArray = questions //un array de question
        this.nextButtonElement = next //El elemento del boton next del DOM
        this.quizzContainer = quizz //El elemento contenedor del quizz del DOM
    }

    start() {
        startButton.classList.add('hide');
        this.quizzContainer.classList.remove('hide');
    }

    next() {
    }

    answer(option){
    }
}

const q1 = new Question('Which key is used to close vim editor?','q',['non of the other options','esc','f4']);
const q2 = new Question("Which is the decimal equivalent of 1011 if it is on binary and two's complement?",'-5',[11,-11,-3]);
const q3 = new Question('Which of the following data structures is FIFO?','Queue',['Set','Stack','Tree']);
const q4 = new Question('What do the acronyms DOM mean?','Document Objet Model',['Data Object Mode','Data Object Model','Document of Multimedia']);
/*const q5 = new Question('','',['','','']);
const q6 = new Question('','',['','','']);
const q7 = new Question('','',['','','']);
const q8 = new Question('','',['','','']);
const q9 = new Question('','',['','','']);
const q10 = new Question('','',['','','']);
const q11 = new Question('','',['','','']);

const quizz = new Quizz([q1,q2,q3,q4,q5,q6,q7,q8,q9,q10,q11], nextButton, optionsButtons,
    questionDisplay);*/

const quizz = new Quizz([q1,q2,q2,q4], nextButton, quizzContainer);

startButton.addEventListener('click', () => { quizz.start() })

nextButton.addEventListener('click', () => { quizz.next() })

//optionsButtons.forEach(button => button.addEventListener('click', () => { quizz.answer(button.innerText) }))

