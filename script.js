// Väntar tills sidan har laddat klart
document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.querySelector('.menu-toggle');
    const items = document.querySelector('.menu-items');

    // Kollar om elementen finns
    if (toggle && items) {
        toggle.onclick = () => {
            items.classList.toggle('active');
        };
    } else {
        console.log('Kunde inte hitta menu-toggle eller menu-items');
    }
});