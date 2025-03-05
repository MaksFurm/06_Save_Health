document.addEventListener("DOMContentLoaded", function () {
    const healthTips = [
        "Пийте більше води! 💧",
        "Харчуйтесь збалансовано! 🍏",
        "Робіть зарядку щоранку! 🏃",
        "Висипайтесь мінімум 7-8 годин! 😴",
        "Менше стресу – більше позитиву! 😊",
        "Робіть перерви під час роботи! ⏸️",
        "Більше рухайтеся – менше сидіть! 🚶",
        "Захищайте очі від екранів! 👁",
        "Вживайте менше цукру! 🍫❌",
        "Слідкуйте за поставою! 🪡",
        "Дихайте глибше – це допомагає розслабитися! 🌬️",
        "Виходьте на свіже повітря щодня! 🌳",
        "Контролюйте баланс роботи та відпочинку! ⚖️",
        "Медитація зменшує стрес! 🤸",
        "Усміхайтеся частіше – це покращує настрій! 😃"
    ];

    let countOfPills = 5;
    const pillsElement = document.getElementById('count-of-pills');
    const tipElement = document.getElementById('health-tips');
    const tipButton = document.getElementById('btn_health_tips');
    const buyButton = document.getElementById('btn-buy-pills');

    function updatePills() {
        if (countOfPills > 0) {
            pillsElement.innerHTML = "💊".repeat(countOfPills) + "⬜".repeat(5 - countOfPills);
            tipButton.disabled = false;
        } else {
            pillsElement.innerHTML = "Поповніть Пігулки";
            tipButton.disabled = true;
        }
    }

    tipButton.addEventListener('click', () => {
        if (countOfPills > 0) {
            let index = Math.floor(Math.random() * healthTips.length);
            tipElement.textContent = healthTips[index];
            countOfPills--;
            updatePills();
        }
    });

    buyButton.addEventListener('click', () => {
        countOfPills = 5;
        updatePills();
        tipElement.textContent = "Пігулки поповнено! Можете отримувати поради.";
    });

    updatePills();
});
