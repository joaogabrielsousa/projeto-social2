const buttons = document.querySelectorAll('.icon-btn');
const bg = document.getElementById('dynamic-bg');

buttons.forEach(btn => {
    btn.addEventListener('mouseenter', () => {
        const img = btn.getAttribute('data-bg');
        bg.style.backgroundImage = `url(${img})`;
        bg.style.opacity = '0.35';
    });

    btn.addEventListener('mouseleave', () => {
        bg.style.opacity = '0';
    });
});
