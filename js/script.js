console.log('Script connected');
document.addEventListener("DOMContentLoaded", function () {
    const wishes = [
        "Нехай твоє серце завжди буде наповнене любов’ю!💖",
        "Кохання, радості та тепла тобі сьогодні та завжди!❤️",
        "Бажаю тобі безмежного щастя та справжнього кохання!💕",
        "Ти неймовірний! Нехай в твоєму житті завжди буде любов!💞",
        "Нехай твоє серце завжди буде сповнене теплом й любов’ю!💖",
        "Бажаю, щоб твій світ був таким же яскравим, як твої почуття!❤️",
        "Ти особливий й твоє серце заслуговує на найбільше щастя!💕",
        "Нехай цей день принесе тобі радість, романтику чарівні миті!🌹",
        "Нехай в твоєму житті завжди буде людина, яка зігріває душу!💝",
        "Любов це найцінніший подарунок!💓",
        "Нехай сьогоднішній день подарує тобі море приємних емоцій!🎁",
        "Кохання це магія! Бажаю тобі чарівних моментів цього дня!✨"
    ];

    const button = document.getElementById("wishButton");
    const wishText = document.getElementById("wishText");

    button.addEventListener("click", function () {
        const randomIndex = Math.floor(Math.random() * wishes.length);
        wishText.textContent = wishes[randomIndex];
    });
});

let countOfHearts = 5;
console.log('countOfHearts = ' + countOfHearts);
document.getElementById('count-of-hearts').innerText = "❤️".repeat(countOfHearts) + "♡".repeat(5 - countOfHearts);

// Обробник натискання на кнопку "Отримати побажання"
document.getElementById('btn_healt_wishes').addEventListener('click', () => {
    console.log('Button clicked');
    let index = Math.floor(Math.random() * arrayOfhealtWishes.length);
    document.getElementById('healt-wishes').innerText = arrayOfhealtWishes[index];

    countOfHearts--;
    console.log('countOfHearts = ' + countOfHearts);
    document.getElementById('count-of-hearts').innerText = "❤️".repeat(countOfHearts) + "".repeat(5 - countOfHearts);

    if (countOfHearts === 0) {
        document.getElementById('btn_healt_wishes').style.display = 'none';
    }
});

// Обробник натискання на кнопку "Купити ❤️"
document.getElementById('btn-buy-hearts').addEventListener('click', () => {
    countOfHearts = 5;
    document.getElementById('count-of-hearts').innerText = "❤️".repeat(countOfHearts) + "🤍".repeat(5 - countOfHearts);
    document.getElementById('btn_healt_wishes').style.display = 'inline-block';
    document.getElementById('healt-wishes').innerText = "";
    console.log('btn-buy-hearts clicked');
});