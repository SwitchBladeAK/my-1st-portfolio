window.onscroll = function () {
    if (window.scrollY > 100) {
        var header = document.querySelector('.header');
        header.style.background = '#081b29';
    } else {
        var header = document.querySelector('.header');
        header.style.background = 'transparent';
    }
};

const navLinks = document.querySelectorAll('.navbar a');
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    navLinks.forEach(link => {
        link.classList.remove('active');
    });
    sections.forEach(section => {
        if (window.pageYOffset >= section.offsetTop) {
            const link = document.querySelector(`.navbar a[href="#${section.id}"]`);
            if (link) {
                link.classList.add('active');
                navLinks.forEach(otherLink => {
                    if (otherLink !== link) {
                        otherLink.classList.remove('active');
                    }
                });
            }
        }
    });


});
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        window.scrollTo({
            top: target.offsetTop,
            behavior: 'smooth'
        });
    });
});
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}


