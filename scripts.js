// Данные о планетах
const planetData = {
    mercury: {
        name: "Меркурий",
        description: "Самая близкая к Солнцу планета и самая маленькая в Солнечной системе. Поверхность Меркурия покрыта кратерами и напоминает Луну. День на Меркурии длится 59 земных дней, а год - 88 дней.",
        distance: "57.9 млн км",
        period: "88 земных дней",
        diameter: "4,879 км",
        temperature: "-180°C до +430°C",
        image: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><circle cx='50' cy='50' r='45' fill='%238c8c8c'/><circle cx='30' cy='30' r='3' fill='%23a0a0a0'/><circle cx='70' cy='40' r='2' fill='%23a0a0a0'/><circle cx='40' cy='70' r='4' fill='%23a0a0a0'/></svg>"
    },
    venus: {
        name: "Венера",
        description: "Вторая планета от Солнца, известная как 'утренняя звезда' или 'вечерняя звезда'. Венера - самая горячая планета в Солнечной системе с плотной атмосферой из углекислого газа. Поверхность скрыта под толстым слоем облаков.",
        distance: "108.2 млн км",
        period: "225 земных дней",
        diameter: "12,104 км",
        temperature: "462°C (средняя)",
        image: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><circle cx='50' cy='50' r='45' fill='%23ffd700'/><circle cx='50' cy='50' r='35' fill='%23ffb347' opacity='0.8'/></svg>"
    },
    earth: {
        name: "Земля",
        description: "Наша родная планета - единственная известная планета с жизнью. Земля имеет уникальную атмосферу с кислородом, жидкую воду на поверхности и магнитное поле, защищающее от солнечной радиации.",
        distance: "149.6 млн км",
        period: "365.25 дней",
        diameter: "12,742 км",
        temperature: "-88°C до +58°C",
        image: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><circle cx='50' cy='50' r='45' fill='%234ecdc4'/><circle cx='30' cy='35' r='8' fill='%2345b7d1'/><circle cx='70' cy='60' r='6' fill='%2345b7d1'/><circle cx='60' cy='25' r='4' fill='%2345b7d1'/></svg>"
    },
    mars: {
        name: "Марс",
        description: "Красная планета, четвертая от Солнца. Марс имеет тонкую атмосферу и поверхность, покрытую кратерами, вулканами и каньонами. На Марсе есть полярные ледяные шапки и следы древних рек.",
        distance: "227.9 млн км",
        period: "687 земных дней",
        diameter: "6,780 км",
        temperature: "-140°C до +20°C",
        image: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><circle cx='50' cy='50' r='45' fill='%23ff6b6b'/><circle cx='35' cy='40' r='5' fill='%23c44569'/><circle cx='65' cy='60' r='3' fill='%23c44569'/><circle cx='50' cy='30' r='4' fill='%23c44569'/></svg>"
    },
    jupiter: {
        name: "Юпитер",
        description: "Самая большая планета в Солнечной системе - газовый гигант. Юпитер имеет мощное магнитное поле и множество спутников. Знаменитое Большое Красное Пятно - это гигантский шторм, бушующий уже сотни лет.",
        distance: "778.5 млн км",
        period: "11.86 земных лет",
        diameter: "139,820 км",
        temperature: "-110°C (в облаках)",
        image: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><circle cx='50' cy='50' r='45' fill='%23f39c12'/><circle cx='50' cy='50' r='35' fill='%23e67e22' opacity='0.7'/><circle cx='40' cy='45' r='8' fill='%23d35400' opacity='0.8'/></svg>"
    },
    saturn: {
        name: "Сатурн",
        description: "Шестая планета от Солнца, известная своими великолепными кольцами. Сатурн - второй по величине газовый гигант. Кольца состоят из миллиардов частиц льда и камня, вращающихся вокруг планеты.",
        distance: "1.4 млрд км",
        period: "29.46 земных лет",
        diameter: "116,460 км",
        temperature: "-140°C (в облаках)",
        image: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><circle cx='50' cy='50' r='45' fill='%23f1c40f'/><circle cx='50' cy='50' r='35' fill='%23f39c12' opacity='0.8'/><ellipse cx='50' cy='50' rx='60' ry='15' fill='none' stroke='%23f39c12' stroke-width='2' opacity='0.6'/></svg>"
    },
    uranus: {
        name: "Уран",
        description: "Седьмая планета от Солнца, ледяной гигант. Уран уникален тем, что его ось вращения наклонена почти на 90 градусов, поэтому он как бы 'катится' по орбите. Планета имеет слабую систему колец.",
        distance: "2.9 млрд км",
        period: "84.02 земных года",
        diameter: "50,724 км",
        temperature: "-224°C (средняя)",
        image: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><circle cx='50' cy='50' r='45' fill='%233498db'/><circle cx='50' cy='50' r='35' fill='%232980b9' opacity='0.8'/></svg>"
    },
    neptune: {
        name: "Нептун",
        description: "Восьмая и самая дальняя планета от Солнца. Нептун - ледяной гигант с синими облаками и самыми быстрыми ветрами в Солнечной системе (до 2,100 км/ч). Планета была открыта математически, а затем найдена телескопом.",
        distance: "4.5 млрд км",
        period: "164.79 земных лет",
        diameter: "49,244 км",
        temperature: "-218°C (средняя)",
        image: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><circle cx='50' cy='50' r='45' fill='%239b59b6'/><circle cx='50' cy='50' r='35' fill='%238e44ad' opacity='0.8'/><circle cx='40' cy='45' r='6' fill='%237349db' opacity='0.9'/></svg>"
    }
};

// Элементы DOM
const modal = document.getElementById('planet-modal');
const closeModal = document.querySelector('.close-modal');
const planetImage = document.getElementById('planet-img');
const planetName = document.getElementById('planet-name');
const planetDescription = document.getElementById('planet-description');
const planetDistance = document.getElementById('planet-distance');
const planetPeriod = document.getElementById('planet-period');
const planetDiameter = document.getElementById('planet-diameter');
const planetTemperature = document.getElementById('planet-temperature');

// Обработчики событий для планет
document.querySelectorAll('.planet').forEach(planet => {
    planet.addEventListener('click', function() {
        const planetType = this.getAttribute('data-planet');
        showPlanetInfo(planetType);
    });
});

// Закрытие модального окна
closeModal.addEventListener('click', function() {
    modal.style.display = 'none';
});

// Закрытие модального окна при клике вне его
window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

// Функция показа информации о планете
function showPlanetInfo(planetType) {
    const data = planetData[planetType];
    if (!data) return;

    // Заполнение данных
    planetImage.src = data.image;
    planetName.textContent = data.name;
    planetDescription.textContent = data.description;
    planetDistance.textContent = data.distance;
    planetPeriod.textContent = data.period;
    planetDiameter.textContent = data.diameter;
    planetTemperature.textContent = data.temperature;

    // Показ модального окна с анимацией
    modal.style.display = 'block';
    modal.style.opacity = '0';
    modal.style.transform = 'scale(0.8)';
    
    setTimeout(() => {
        modal.style.opacity = '1';
        modal.style.transform = 'scale(1)';
    }, 10);
}

// Плавная прокрутка для навигации
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Анимация появления элементов при скролле
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Наблюдение за элементами для анимации
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.content-card, .ton618-content');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Дополнительные анимации для планет
document.querySelectorAll('.planet').forEach(planet => {
    planet.addEventListener('mouseenter', function() {
        this.style.transform = 'translateX(-50%) scale(1.5)';
        this.style.boxShadow = '0 0 30px rgba(255, 255, 255, 0.8)';
    });
    
    planet.addEventListener('mouseleave', function() {
        this.style.transform = 'translateX(-50%) scale(1)';
        this.style.boxShadow = '0 0 20px rgba(255, 255, 255, 0.5)';
    });
});

// Анимация для черной дыры TON 618
const blackHole = document.querySelector('.black-hole');
if (blackHole) {
    setInterval(() => {
        blackHole.style.transform = 'translate(-50%, -50%) scale(1.1)';
        setTimeout(() => {
            blackHole.style.transform = 'translate(-50%, -50%) scale(1)';
        }, 500);
    }, 3000);
}

// Добавление эффекта параллакса для звезд
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const stars = document.querySelector('.stars');
    const twinkling = document.querySelector('.twinkling');
    
    if (stars && twinkling) {
        stars.style.transform = `translateY(${scrolled * 0.5}px)`;
        twinkling.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
});

// Анимация для кольца Сатурна
const saturnRings = document.querySelector('.rings');
if (saturnRings) {
    setInterval(() => {
        saturnRings.style.transform = 'rotateX(75deg) rotate(360deg)';
        setTimeout(() => {
            saturnRings.style.transform = 'rotateX(75deg) rotate(0deg)';
        }, 5000);
    }, 10000);
}

// Интерактивность для солнца
const sun = document.getElementById('sun');
if (sun) {
    sun.addEventListener('click', function() {
        const sunData = {
            name: "Солнце",
            description: "Центральная звезда нашей Солнечной системы. Солнце - это желтый карлик, который обеспечивает Землю светом и теплом. В его ядре происходят термоядерные реакции, превращающие водород в гелий.",
            distance: "0 км (центр системы)",
            period: "25-35 дней (вращение)",
            diameter: "1,392,700 км",
            temperature: "5,500°C (поверхность), 15,000,000°C (ядро)",
            image: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><circle cx='50' cy='50' r='45' fill='%23ffd700'/><circle cx='50' cy='50' r='35' fill='%23ff8c00' opacity='0.8'/><circle cx='50' cy='50' r='25' fill='%23ff4500' opacity='0.6'/></svg>"
        };
        
        planetImage.src = sunData.image;
        planetName.textContent = sunData.name;
        planetDescription.textContent = sunData.description;
        planetDistance.textContent = sunData.distance;
        planetPeriod.textContent = sunData.period;
        planetDiameter.textContent = sunData.diameter;
        planetTemperature.textContent = sunData.temperature;
        
        modal.style.display = 'block';
        modal.style.opacity = '0';
        modal.style.transform = 'scale(0.8)';
        
        setTimeout(() => {
            modal.style.opacity = '1';
            modal.style.transform = 'scale(1)';
        }, 10);
    });
}

// Добавление курсора-указателя для солнца
if (sun) {
    sun.style.cursor = 'pointer';
}

// Анимация для статистики TON 618
const statNumbers = document.querySelectorAll('.stat-number');
statNumbers.forEach(stat => {
    const finalNumber = stat.textContent;
    let currentNumber = 0;
    const increment = parseInt(finalNumber) / 50;
    
    const timer = setInterval(() => {
        currentNumber += increment;
        if (currentNumber >= parseInt(finalNumber)) {
            stat.textContent = finalNumber;
            clearInterval(timer);
        } else {
            stat.textContent = Math.floor(currentNumber);
        }
    }, 50);
});

// Эффект печатающегося текста для описаний
function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// Применение эффекта печатающегося текста к описаниям планет
document.querySelectorAll('.planet-details p').forEach(p => {
    const originalText = p.textContent;
    p.addEventListener('mouseenter', function() {
        typeWriter(this, originalText, 30);
    });
});

// Добавление звуковых эффектов (опционально)
function playSpaceSound() {
    // Здесь можно добавить звуковые эффекты
    console.log('Space sound effect');
}

// Обработчики для звуковых эффектов
document.querySelectorAll('.planet').forEach(planet => {
    planet.addEventListener('click', playSpaceSound);
});

// Анимация для модального окна
modal.addEventListener('transitionend', function() {
    if (modal.style.opacity === '1') {
        modal.style.transition = 'none';
    }
});

// Добавление эффекта гравитации для планет
document.querySelectorAll('.planet').forEach(planet => {
    planet.addEventListener('mousedown', function() {
        this.style.transform = 'translateX(-50%) scale(0.8)';
    });
    
    planet.addEventListener('mouseup', function() {
        this.style.transform = 'translateX(-50%) scale(1)';
    });
});

// Анимация для статистики в модальном окне
function animateStats() {
    const stats = document.querySelectorAll('.stat span:last-child');
    stats.forEach(stat => {
        const finalValue = stat.textContent;
        let currentValue = 0;
        const increment = 1;
        
        const timer = setInterval(() => {
            currentValue += increment;
            if (currentValue >= parseInt(finalValue)) {
                stat.textContent = finalValue;
                clearInterval(timer);
            } else {
                stat.textContent = currentValue;
            }
        }, 20);
    });
}

// Вызов анимации статистики при открытии модального окна
modal.addEventListener('show', animateStats);