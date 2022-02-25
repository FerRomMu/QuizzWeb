const startButton = document.querySelector(".quizz__btn-start");
const nextButton = document.querySelector(".quizz__btn-next");
const quizzContainer = document.querySelector(".quizz__container");
const optionsButtons = document.querySelectorAll(".quizz__option");
const question = document.querySelector(".quizz__question");
const quizzOptions = document.querySelector(".quizz__options");

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
        this.correctas = 0
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
        this.optionsElement.forEach(
            function(option) {
                if(option.classList.contains('quizz__option--correct'))
                    {option.classList.remove('quizz__option--correct')}
                if(option.classList.contains('quizz__option--fail'))
                    {option.classList.remove('quizz__option--fail')}
            }
        )
        this.nextButtonElement.classList.add('hide');
        let nextQuestion = this.questionsArray.pop();
        this.questionDisplayElement.innerText = nextQuestion.question;
        this.correctAnswer = Math.floor(Math.random()*4);
        //Se utiliza un aux para acceder al array de equivocadas
        let auxArray = nextQuestion.wrongs;
        //Se agrega al array en una posición aleatoria la opción correcta
        auxArray.splice(this.correctAnswer, 0, nextQuestion.correct);
        //Se colocan aleatoriamente todas las opciones
        this.optionsElement.forEach(option => option.innerText = auxArray.pop());
    }

    answer(option){
        //Se multiplica *(-1)+3 la respuesta para invertir el número de 0 a 3
        //Esto es necesario visto que los pops de los arrays invierten el orden
        //Se podría implementar una Queue en vez del array para evitar este paso
        //Pero por la simplesa de la aplicación se optó por esta solución
        this.optionsElement[this.correctAnswer*(-1)+3].classList.add('quizz__option--correct');
        this.nextButtonElement.classList.remove('hide');
        if(option != this.correctAnswer*(-1)+3){
            this.optionsElement[option].classList.add('quizz__option--fail');
            return;
        }
        this.correctas++;
    }

    quizzEnd(){
        quizzOptions.classList.add('hide');
        this.nextButtonElement.classList.add('hide');
        if(this.correctas == 1){
            this.questionDisplayElement.innerText = `Haz completado el quizz con ${this.correctas} pregunta acertadas`;
        }else{
            this.questionDisplayElement.innerText = `Haz completado el quizz con ${this.correctas} preguntas acertadas`;
        }
    }
}

const q1 = new Question('Which key is used to close vim editor?','q',['non of the other options','esc','f4']);
const q2 = new Question("Which is the decimal equivalent of 1011 if it is on binary and two's complement?",'-5',[11,-11,-3]);
const q3 = new Question('Which of the following data structures is FIFO?','Queue',['Set','Stack','Tree']);
const q4 = new Question('What do the acronyms DOM mean?','Document Object Model',['Data Object Mode','Data Object Model','Document of Multimedia']);
const q5 = new Question('How do you name a class if it have a modifier on BEM','block__element--modifier',['block__modifier','element--modifier','block--element--modifier']);
/*const q6 = new Question('','',['','','']);
const q7 = new Question('','',['','','']);
const q8 = new Question('','',['','','']);
const q9 = new Question('','',['','','']);
const q10 = new Question('','',['','','']);
const q11 = new Question('','',['','','']);

const quizz = new Quizz([q1,q2,q3,q4,q5,q6,q7,q8,q9,q10,q11], nextButton, optionsButtons,
    questionDisplay);*/

const quizz = new Quizz([q1,q2,q3,q4,q5], nextButton, optionsButtons, question);

startButton.addEventListener('click', () => { quizz.start() })

nextButton.addEventListener('click', () => { quizz.newQuestion() })

optionsButtons.forEach(button => button.addEventListener('click', () => { quizz.answer(button.id) }))

