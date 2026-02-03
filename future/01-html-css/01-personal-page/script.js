// Навигация
document.addEventListener('DOMContentLoaded', function() {
    // Элементы
    const navLinks = document.querySelectorAll('.nav-link');
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navList = document.querySelector('.nav-list');
    
    // 1. Плавная прокрутка
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Прокрутка
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Мобильное меню: скрыть после клика
                if (window.innerWidth <= 768) {
                    navList.classList.remove('active');
                }
            }
        });
    });
    
    // 2. Мобильное меню
    mobileToggle.addEventListener('click', function() {
        navList.classList.toggle('active');
    });
    
    // 3. Подсветка активного раздела при скролле
    function updateActiveNav() {
        const sections = document.querySelectorAll('section, footer');
        
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            const sectionId = section.getAttribute('id');
            
            if (rect.top <= 150 && rect.bottom >= 150) {
                // Убираем активный класс у всех
                navLinks.forEach(link => link.classList.remove('active'));
                
                // Добавляем активному
                const activeLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        });
    }
    
    window.addEventListener('scroll', updateActiveNav);
    
    // 4. Обновляем дату
    function updateDate() {
        const now = new Date();
        const options = { 
            day: 'numeric', 
            month: 'long', 
            year: 'numeric'
        };
        
        const formatter = new Intl.DateTimeFormat('ru-RU', options);
        document.getElementById('current-date').textContent = formatter.format(now);
    }
    
    updateDate();
    
    console.log('Навигация загружена! 🚀');
});