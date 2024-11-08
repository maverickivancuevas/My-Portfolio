const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

const sectionLinks = document.querySelectorAll('.navbar a');

sectionLinks.forEach(link => {
    link.addEventListener('click', () => {
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }

        navbar.classList.remove('active');
        menuIcon.classList.remove('bx-x');
        
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        } else {
            console.warn(`Section with ID "${targetId}" does not exist.`);
        }
    });
});
