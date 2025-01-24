document.querySelectorAll('.modern-button').forEach(button => {
    button.addEventListener('click', () => {
        button.innerHTML = 'Carregando...';
        button.disabled = true;

        setTimeout(() => {
            button.innerHTML = 'Concluído!';
            button.disabled = false;
        }, 2000);
    });
});

window.addEventListener('load', () => {
    document.querySelectorAll('.modern-button').forEach((button, index) => {
        button.style.opacity = 0;
        setTimeout(() => {
            button.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            button.style.opacity = 1;
            button.style.transform = 'translateY(0)';
        }, index * 200);
    });
});
