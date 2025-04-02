document.addEventListener("DOMContentLoaded", function () {
    const healthTips = [
        "Пийте більше води! 💧",
        "Харчуйтесь збалансовано! 🍏",
        "Робіть зарядку щоранку! 🏃",
        "Висипайтесь мінімум 7-8 годин! 😴",
        "Менше стресу – більше позитиву! 😊",
        "Частіше проводьте час на свіжому повітрі! 🌳",
        "Пийте чай з трав для заспокоєння! 🍵",
        "Регулярно займайтесь фізичною активністю! 🏋️‍♀️",
        "Не забувайте про здорове харчування! 🥗",
        "Використовуйте час для відпочинку та розслаблення! 🌙",
        "Медитуйте для збереження внутрішнього спокою! 🧘‍♂️",
        "Читати книги – це не тільки корисно, а й захопливо! 📚",
        "Робіть перерви під час роботи для відновлення енергії! ⚡",
        "Більше смійтеся – це найкращі ліки від стресу! 😂",
        "Проводьте час з тими, кого любите, це важливо! ❤️"
    ];

    let countOfPills = 5;
    const pillsElement = document.getElementById('count-of-pills');
    const tipElement = document.getElementById('health-tips');
    const tipButton = document.getElementById('btn_health_tips');
    const buyButton = document.getElementById('btn-buy-pills');

    // Оновлюємо кількість пігулок
    function updatePills() {
        // Замість пігулок, якщо їх більше 0, ставимо "⬜"
        pillsElement.innerHTML = "💊".repeat(countOfPills) + "⬜".repeat(5 - countOfPills);
        tipButton.disabled = countOfPills === 0;
    }

    // Отримання поради
    tipButton.addEventListener('click', () => {
        if (countOfPills > 0) {
            let index = Math.floor(Math.random() * healthTips.length);
            tipElement.textContent = healthTips[index];
            countOfPills--;  // Віднімаємо одну пігулку
            updatePills();  // Оновлюємо кількість пігулок
        }
    });

    // Купити пігулки
    buyButton.addEventListener('click', () => {
        countOfPills = 5;  // макс кількість
        updatePills();  // Оновлюємо кількість пігулок
        tipElement.textContent = "Пігулки поповнено! Можете отримувати поради.";
    });

    updatePills();  // Ініціалізація початкової кількості пігулок

    // Галерея
    const galleryImages = ["img/1.jpg", "img/2.jpg", "img/3.jpg", "img/4.jpg"];
    let currentImageIndex = 0;
    const galleryImage = document.getElementById('gallery-image');

    function updateGalleryImage() {
        galleryImage.style.opacity = 0;
        setTimeout(() => {
            galleryImage.src = galleryImages[currentImageIndex];
            galleryImage.style.opacity = 1;
        }, 500);
    }

    const arrayOfVitaminObjects = [
        {
            "id":1,
            "title":"Вітамін C",
            "photo":"",
            "description":"",
            "rating":"",
            "useful":"",
        },

        {
            "id":2,
            "title":"Омега-3",
            "photo":"",
            "description":"",
            "rating":"",
            "useful":"",
        },
      
        {
            "id":3,
            "title":"Вітамін-D3",
            "photo":"",
            "description":"",
            "rating":"",
            "useful":"",
        },

        {
            "id":4,
            "title":"Вітамін-B12",
            "photo":"",
            "description":"",
            "rating":"",
            "useful":"",
        },

        {
            "id":5,
            "title":"Вітамін-A",
            "photo":"",
            "description":"",
            "rating":"",
            "useful":"",
        },

        {
            "id":6,
            "title":"Вітамін BCAA",
            "photo":"img/sport.png",
            "description":"",
            "rating":"",
            "useful":"",
        },

    ]

    //console.log(arrayOfVitaminObjects)

    arrayOfVitaminObjects.forEach((item) => {
        //console.log(item)

        let divVitamin = document.createElement('div')
        divVitamin.classList.add('vitamin')
        divVitamin.innerText - item.title

        document.getElementById('p-vitamins').appendChild(divVitamin)
    })

    window.nextImage = function () {
        currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
        updateGalleryImage();
    };

    window.prevImage = function () {
        currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
        updateGalleryImage();
    };

    updateGalleryImage();
});

