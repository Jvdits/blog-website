const IMAGE_PATH = "Images/";

const hamMenu = document.querySelector('.ham-menu');

const offScreenMenu = document.querySelector('.off-screen-menu');

const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
    const clone = link.cloneNode(true);
    offScreenMenu.appendChild(clone);
})

hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    offScreenMenu.classList.toggle('active');
})