// Обновляем дату в подвале
function updateDate() {
    const now = new Date();
    const options = { 
        day: 'numeric', 
        month: 'long', 
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    };
    
    const formatter = new Intl.DateTimeFormat('ru-RU', options);
    document.getElementById('current-date').textContent = formatter.format(now);
}

// Анимация при прокрутке
function handleScrollAnimation() {
    const sections = document.querySelectorAll('.section');
    
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (sectionTop < windowHeight * 0.85) {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }
    });
}

// Инициализация
document.addEventListener('DOMContentLoaded', function() {
    // Обновляем дату
    updateDate();
    
    // Настраиваем анимации
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // Обработчик скролла
    window.addEventListener('scroll', handleScrollAnimation);
    
    // Вызываем сразу для видимых элементов
    handleScrollAnimation();
    
    // Простой клик-эффект для заголовка
    document.querySelector('.title').addEventListener('click', function() {
        this.style.color = this.style.color === '#ff6b6b' ? '#ffffff' : '#ff6b6b';
    });
    
    console.log('Резюме загружено! Удачи в обучении! 🚀');
});