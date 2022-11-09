let content = '<h1 class = "mag">Magic Ball</h1><input type="text" placeholder="Write your question)" id="ask"><div id="magic-ball"></div>';  // Код у вигляді звичайного рядка
let body = document.body;  // Взяти з документа мій об'єкт тега body
body.innerHTML = content;  // Всередину body вставив текстовий HTML

let magicBall = document.getElementById('magic-ball');  // Отримуємо об'єкт div#magic-ball
magicBall.addEventListener('click', magic);  // Додаємо до magic-ball прослуховувач подій (на клік)

function getRandomAnswer() {
	let answers = ['Yes', 'No', 'Maybe yes', 'Maybe no', 'So-so'];  // Задаємо масив можливих відповідей
    /* Math.random() повертає число від 0 до 1 (0.5) */
    /* Math.floor() прибирає дробову частку */
	let randomIndex = Math.floor(Math.random() * answers.length);  // Отримуємо випадкове число від 0 до довжини масива
    return answers[randomIndex];
}

function magic() {
    let askText = document.getElementById('ask').value;  // Отрмуємо вміст input#ask

    if (askText.length > 5 && askText.includes('?')) {  //Перевіряємо довжину та наявність знаку питання
        magicBall.textContent = getRandomAnswer();
    } else {
        alert('Question should be longer than 5 symbols and contain question mark!');
    }
}
