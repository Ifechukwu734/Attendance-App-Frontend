


console.log("EduAttend Dashboard Loaded");

const cards = document.querySelectorAll(
'.course-card,.level-card,.stat-card'
);

cards.forEach(card => {

    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-6px)';
        card.style.boxShadow =
        '0 15px 35px rgba(37,99,235,.15)';
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
        card.style.boxShadow =
        '0 5px 20px rgba(0,0,0,.05)';
    });

});



