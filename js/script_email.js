// Adiciona um feedback visual ao clicar nos botões
const buttons = document.querySelectorAll('.modern-button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        button.style.transform = 'scale(0.95)';
        setTimeout(() => {
            button.style.transform = 'scale(1)';
        }, 150);
    });
});

const searchBar = document.getElementById('search-bar');
searchBar.addEventListener('input', () => {
    const query = searchBar.value.toLowerCase();
    const contacts = document.querySelectorAll('.modern-button');
    contacts.forEach(contact => {
        const text = contact.innerText.toLowerCase();
        contact.style.display = text.includes(query) ? 'block' : 'none';
    });
});



