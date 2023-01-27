const quizBase = [
    {
        question: 'Какой продукт лишний?',
        image: 'https://cdn.glitch.global/0458467d-2d1d-4c3f-9fdf-f63fccb79ff1/quiz1.png?v=1649662122238',
        varOne: '1',
        varTwo: '3',
        varThree: '2',
        correctAnswer: 'varThree'
    },
    {
        question: 'Укажи лишний предмет.',
        image: 'https://cdn.glitch.global/0458467d-2d1d-4c3f-9fdf-f63fccb79ff1/quiz2.png?v=1649662123937',
        varOne: '3',
        varTwo: '1',
        varThree: '2',
        correctAnswer: 'varOne'
    },
    {
        question: 'Что лишнее?',
        image: 'https://cdn.glitch.global/0458467d-2d1d-4c3f-9fdf-f63fccb79ff1/quiz3.png?v=1649662129190',
        varOne: '2',
        varTwo: '1',
        varThree: '3',
        correctAnswer: 'varTwo'
    },
    {
        question: 'Выбери лишнее животное.',
        image: 'https://cdn.glitch.global/0458467d-2d1d-4c3f-9fdf-f63fccb79ff1/quiz4.png?v=1649662130950',
        varOne: '1',
        varTwo: '3',
        varThree: '2',
        correctAnswer: 'varThree'
    },
    {
        question: 'Укажи лишний плод.',
        image: 'https://cdn.glitch.global/0458467d-2d1d-4c3f-9fdf-f63fccb79ff1/quiz5.png?v=1649662133957',
        varOne: '2',
        varTwo: '1',
        varThree: '3',
        correctAnswer: 'varTwo'
    },
    {
        question: 'Что лишнее?',
        image: 'https://cdn.glitch.global/0458467d-2d1d-4c3f-9fdf-f63fccb79ff1/quiz6.png?v=1649662136769',
        varOne: '1',
        varTwo: '2',
        varThree: '3',
        correctAnswer: 'varThree'
    },
    {
        question: 'Выбери лишний продукт.',
        image: 'https://cdn.glitch.global/0458467d-2d1d-4c3f-9fdf-f63fccb79ff1/quiz7.png?v=1649662140883',
        varOne: '3',
        varTwo: '1',
        varThree: '2',
        correctAnswer: 'varTwo'
    },
    {
        question: 'Укажи лишний предмет.',
        image: 'https://cdn.glitch.global/0458467d-2d1d-4c3f-9fdf-f63fccb79ff1/quiz8.png?v=1649662142262',
        varOne: '1',
        varTwo: '2',
        varThree: '3',
        correctAnswer: 'varThree'
    },
    {
        question: 'Выбери лишнее животное.',
        image: 'https://cdn.glitch.global/0458467d-2d1d-4c3f-9fdf-f63fccb79ff1/quiz9.png?v=1649662144771',
        varOne: '1',
        varTwo: '2',
        varThree: '3',
        correctAnswer: 'varOne'
    },
    {
        question: 'Какой гриб лишний?',
        image: 'https://cdn.glitch.global/0458467d-2d1d-4c3f-9fdf-f63fccb79ff1/quiz10.png?v=1649662148207',
        varOne: '1',
        varTwo: '2',
        varThree: '3',
        correctAnswer: 'varThree'
    }
]

const correctPhrases = ['Так держать!', 'Великолепно!', 'Прямо в яблочко!', 'А ты молодец!', 'Супер!', 'Просто блеск!', 'Замечательно!' , 'Правильный ответ!'];
const wrongPhrases = ['Будь внимательнее!', 'Хорошая попытка, но мимо…', 'Сконцентрируйся!', 'Старайся не ошибаться!', 'Ты можешь лучше!', 'В следующий раз получится'];


const quizForm = document.querySelector('#quizForm');
const quizQuestion = document.querySelector('#quizQuestion');
const quizPicture = document.querySelector('#quizPicture');
const questionOne = document.querySelector('#questionOne');
const questionTwo = document.querySelector('#questionTwo');
const questionThree = document.querySelector('#questionThree');
const radioBtns = document.querySelectorAll('.inputRadio');
const currentQuestion = document.querySelector('#currentQuestion');
const questionTotal = document.querySelector('#questionTotal');
const conclusion = document.querySelector('#conclusion');
let questionNum = 0;
let score = 0;


loadQuiz();

function loadQuiz () {
    quizQuestion.innerText = quizBase[questionNum].question;
    quizPicture.src = quizBase[questionNum].image;
    questionOne.innerText = quizBase[questionNum].varOne;
    questionTwo.innerText = quizBase[questionNum].varTwo;
    questionThree.innerText = quizBase[questionNum].varThree;
    currentQuestion.innerText = questionNum + 1;
    questionTotal.innerText = quizBase.length;
}

function getSelected() {
    let answer;
    radioBtns.forEach(radioBtn => {
        if (radioBtn.checked) {
            answer = radioBtn.id;
        }
    })
    return answer;
}

function clearAnswers () {
    radioBtns.forEach(radioBtn => radioBtn.checked = false);
    conclusion.innerText = '';
}
const submitBtn = document.querySelector('#submitBtn');

submitBtn.addEventListener('click', (e)=> {
    e.preventDefault();
    const answer = getSelected();

    if (answer) {
        if (answer === quizBase[questionNum].correctAnswer) {
            score++;
            conclusion.innerText = correctPhrases[Math.floor(Math.random()*correctPhrases.length)];
            conclusion.style.color = 'rgb(43, 184, 66)';
        }
        else {
            conclusion.innerText = wrongPhrases[Math.floor(Math.random() * wrongPhrases.length)];
            conclusion.style.color = 'rgb(207, 58, 58)';
        }
    }
    setTimeout(function() {
        questionNum++;
        if (questionNum < quizBase.length) {
            clearAnswers();
            loadQuiz();
        }
        else {
            let randomIndex = Math.floor(Math.random() * advicesBase.length);
            quizForm.innerHTML = `
            <h2 class="fw-bold fs-5 text-center mt-5 mb-auto"> Правильных ответов - ${score} из ${quizBase.length}.</h2>
            <img class="advicePicture align-self-center" src="${advicesBase[randomIndex].advicePicture}">
            <button class="submitBtn btn shadow-none btn_callus mb-3" onclick="location.reload()">Сыграть снова</button>`
        }
    }, 300);
})

const advicesBase = [
    {
        adviceText:'При встрече говори "Здравствуйте!" или "Привет!"',
        advicePicture: 'https://cdn.glitch.global/0458467d-2d1d-4c3f-9fdf-f63fccb79ff1/advice%20(1).png?v=1649846490666'
    },
    {
        adviceText:'Сморкайся в платок, а не в ладошку.',
        advicePicture: 'https://cdn.glitch.global/0458467d-2d1d-4c3f-9fdf-f63fccb79ff1/advice%20(2).png?v=1649846493905'
    },
    {
        adviceText:'Когда о чем-то просишь, говори: "Пожалуйста!"',
        advicePicture: 'https://cdn.glitch.global/0458467d-2d1d-4c3f-9fdf-f63fccb79ff1/advice%20(3).png?v=1649846499526'
    },
    {
        adviceText:'Терпеливо жди своей очереди.',
        advicePicture: 'https://cdn.glitch.global/0458467d-2d1d-4c3f-9fdf-f63fccb79ff1/advice%20(4).png?v=1649846531068'
    },
    {
        adviceText:'Если хочется почесать мягкое место, не делай это при людях.',
        advicePicture: 'https://cdn.glitch.global/0458467d-2d1d-4c3f-9fdf-f63fccb79ff1/advice%20(5).png?v=1649846535741'
    },
    {
        adviceText:'Не выплевывай еду, даже если она тебе не понравилась.',
        advicePicture: 'https://cdn.glitch.global/0458467d-2d1d-4c3f-9fdf-f63fccb79ff1/advice%20(6).png?v=1649846541470'
    },
    {
        adviceText:'Когда чихаешь, прикрывай рот и нос ладонью.',
        advicePicture: 'https://cdn.glitch.global/0458467d-2d1d-4c3f-9fdf-f63fccb79ff1/advice%20(7).png?v=1649846544752'
    },
    {
        adviceText:'Спрашивай разрешения, преждем чем что-то сделать.',
        advicePicture: 'https://cdn.glitch.global/0458467d-2d1d-4c3f-9fdf-f63fccb79ff1/advice%20(8).png?v=1649846559172'
    },
    {
        adviceText:'В транспорте уступай место пожилым людям, инвалидам, пассажирам с маленькими детьми.',
        advicePicture: 'https://cdn.glitch.global/0458467d-2d1d-4c3f-9fdf-f63fccb79ff1/advice%20(9).png?v=1649846574206'
    },
    {
        adviceText:'Не пытайся съесть слишком большие куски.',
        advicePicture: 'https://cdn.glitch.global/0458467d-2d1d-4c3f-9fdf-f63fccb79ff1/advice%20(10).png?v=1649846581384'
    },
    {
        adviceText:'Уважай старших.',
        advicePicture: 'https://cdn.glitch.global/0458467d-2d1d-4c3f-9fdf-f63fccb79ff1/advice%20(11).png?v=1649846585964'
    },
    {
        adviceText:'Не разговаривай с набитым ртом.',
        advicePicture: 'https://cdn.glitch.global/0458467d-2d1d-4c3f-9fdf-f63fccb79ff1/advice%20(12).png?v=1649846591647'
    },
    {
        adviceText:'Не бери чужие вещи без спроса.',
        advicePicture: 'https://cdn.glitch.global/0458467d-2d1d-4c3f-9fdf-f63fccb79ff1/advice%20(13).png?v=1649846601880'
    },
    {
        adviceText:'Не дерись.',
        advicePicture: 'https://cdn.glitch.global/0458467d-2d1d-4c3f-9fdf-f63fccb79ff1/advice%20(14).png?v=1649846606409'
    },
    {
        adviceText:'Стучи в дверь, прежде чем войти.',
        advicePicture: 'https://cdn.glitch.global/0458467d-2d1d-4c3f-9fdf-f63fccb79ff1/advice%20(15).png?v=1649846611958'
    },
    {
        adviceText:'Когда идешь в гости, принеси небольшой подарок или что-нибудь к чаю.',
        advicePicture: 'https://cdn.glitch.global/0458467d-2d1d-4c3f-9fdf-f63fccb79ff1/advice%20(16).png?v=1649846616229'
    },
    {
        adviceText:'Бережно относись к вещам, особенно чужим.',
        advicePicture: 'https://cdn.glitch.global/0458467d-2d1d-4c3f-9fdf-f63fccb79ff1/advice%20(17).png?v=1649846621361'
    },
    {
        adviceText:'Не говори "Мне не нравится", пока не попробуешь.',
        advicePicture: 'https://cdn.glitch.global/0458467d-2d1d-4c3f-9fdf-f63fccb79ff1/advice%20(18).png?v=1649846624678'
    },
    {
        adviceText:'Не ковыряй в носу.',
        advicePicture: 'https://cdn.glitch.global/0458467d-2d1d-4c3f-9fdf-f63fccb79ff1/advice%20(19).png?v=1649846630522'
    },
    {
        adviceText:'Не завидуй.',
        advicePicture: 'https://cdn.glitch.global/0458467d-2d1d-4c3f-9fdf-f63fccb79ff1/advice%20(20).png?v=1649846635609'
    },
    {
        adviceText:'Не играй с едой.',
        advicePicture: 'https://cdn.glitch.global/0458467d-2d1d-4c3f-9fdf-f63fccb79ff1/advice%20(21).png?v=1649846641340'
    },
    {
        adviceText:'Не ройся в чужих вещах.',
        advicePicture: 'https://cdn.glitch.global/0458467d-2d1d-4c3f-9fdf-f63fccb79ff1/advice%20(22).png?v=1649846646065'
    },
    {
        adviceText:'Всегда возвращай то, что тебе одолжили.',
        advicePicture: 'https://cdn.glitch.global/0458467d-2d1d-4c3f-9fdf-f63fccb79ff1/advice%20(18).png?v=1649846624678'
    },
    {
        adviceText:'Тщательно мой руки после туалета.',
        advicePicture: 'https://cdn.glitch.global/0458467d-2d1d-4c3f-9fdf-f63fccb79ff1/advice%20(23).png?v=1649846651454'
    }
]

const btnNextAdvise = document.querySelector('#nextAdvise');
const adviceText = document.querySelector('#adviceText');
const advicePicture = document.querySelector('#advicePicture');

btnNextAdvise.addEventListener('click', ()=> {
    let randomIndex = Math.floor(Math.random() * advicesBase.length);
    adviceText.innerText = advicesBase[randomIndex].adviceText;
    advicePicture.src = advicesBase[randomIndex].advicePicture;

})