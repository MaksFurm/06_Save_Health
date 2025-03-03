console.log('Script connected');
document.addEventListener("DOMContentLoaded", function () {
    const healthWishes = [
        "Нехай твоє здоров'я буде міцним і непохитним! 💪",
        "Бажаю енергії, бадьорості та чудового самопочуття! 🌿",
        "Нехай кожен день приносить радість і гармонію! 😊",
        "Сил, здоров'я і довгих щасливих років! 🌞",
        "Піклуйся про себе і будь сповнений життєвої енергії! 🍏",
        "Нехай твоє тіло і розум завжди будуть у балансі! 🧘",
        "Міцного здоров'я, гарного настрою та внутрішнього спокою! 💖",
        "Радості від життя та міцного імунітету! 💊"
    ];

    const button = document.getElementById("wishButton");
    const wishText = document.getElementById("wishText");

    button.addEventListener("click", function () {
        const randomIndex = Math.floor(Math.random() * healthWishes.length);
        wishText.textContent = healthWishes[randomIndex];
    });
});

let countOfPills = 5;
console.log('countOfPills = ' + countOfPills);
document.getElementById('count-of-pills').innerText = "💊".repeat(countOfPills) + "⬜".repeat(5 - countOfPills);

// Обробник натискання на кнопку "Отримати побажання"
document.getElementById('btn_health_wishes').addEventListener('click', () => {
    console.log('Button clicked');
    let index = Math.floor(Math.random() * healthWishes.length);
    document.getElementById('health-wishes').innerText = healthWishes[index];

    countOfPills--;
    console.log('countOfPills = ' + countOfPills);
    document.getElementById('count-of-pills').innerText = "💊".repeat(countOfPills) + "⬜".repeat(5 - countOfPills);

    if (countOfPills === 0) {
        document.getElementById('btn_health_wishes').style.display = 'none';
    }
});

// Обробник натискання на кнопку "Купити 💊"
document.getElementById('btn-buy-pills').addEventListener('click', () => {
    countOfPills = 5;
    document.getElementById('count-of-pills').innerText = "💊".repeat(countOfPills) + "⬜".repeat(5 - countOfPills);
    document.getElementById('btn_health_wishes').style.display = 'inline-block';
    document.getElementById('health-wishes').innerText = "";
    console.log('btn-buy-pills clicked');
});
