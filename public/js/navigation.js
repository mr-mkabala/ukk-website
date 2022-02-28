// Tutaj znajdują się wyłącznie skrypty dla elementów nawigacji oraz stopki, które będą powtarzalne na każdej podstronie.

// Stałe i zmienne
const nav = document.querySelector('.nav');
const navButton = document.querySelectorAll('.nav-img');
const navLink = document.querySelectorAll('.nav-link');
const backButton = document.querySelector('.back-button');
const contactBtn = document.querySelector('.contact-btn');
const footerLink = document.querySelector('.footer-link');

// Rozwijanie i zwijanie menu.
const navTl = gsap.timeline({
    defaults: {
        duration: 0.5,
        ease: 'power1.out'
    }
});
gsap.set('.exit', {
    scale: 0
});
navButton.forEach(item => {
    item.addEventListener('click', () => {
        if (nav.classList.contains('collapsed')) {
            hideMenu();
        } else {
            showMenu();
        }
    });
});

// Animacje ScrollTrigger dla back-button
const backButtonTl = gsap.timeline({
    scrollTrigger: {
        trigger: '.starter',
        start: '75%',
        end: '100%',
        scrub: true
    }
});
backButtonTl.to('.back-button', {
    opacity: 1
});

// ScrollTo dla przycisku back-button
backButton.addEventListener('click', () => {
    gsap.to(window, 1, {
        scrollTo: {
            y: 0
        }
    });
});

// Animacje dla elementów menu (nav-link)
navLink.forEach(link => {
    link.addEventListener('mouseenter', () => {
        gsap.fromTo(link, {
            color: '#EDF0F0'
        }, {
            color: '#A47E1B',
            ease: 'power2.out',
            duration: 0.5
        });
    });
    link.addEventListener('mouseleave', () => {
        gsap.fromTo(link, {
            color: '#A47E1B'
        }, {
            color: '#EDF0F0',
            ease: 'power2.out',
            duration: 0.5
        });
    });
});

// Animacje mouseenter i mouseleave dla footer-link
footerLink.addEventListener('mouseenter', () => {
    gsap.fromTo(footerLink, {
        color: '#EDF0F0'
    }, {
        color: '#A47E1B',
        ease: 'power2.out',
        duration: 0.5
    });
});
footerLink.addEventListener('mouseleave', () => {
    gsap.fromTo(footerLink, {
        color: '#A47E1B'
    }, {
        color: '#EDF0F0',
        ease: 'power2.out',
        duration: 0.5
    });
});

// Animacja przycisku wysyłania formularza
contactBtn.addEventListener('mouseenter', () => {
    gsap.fromTo(contactBtn, {
        backgroundColor: '#1D1D1D',
        color: '#A47E1B'
    }, {
        color: '#EDF0F0',
        backgroundColor: '#A47E1B',
        duration: 0.5
    });
});
contactBtn.addEventListener('mouseleave', () => {
    gsap.fromTo(contactBtn, {
        color: '#EDF0F0',
        backgroundColor: '#A47E1B'
    }, {
        backgroundColor: '#1D1D1D',
        color: '#A47E1B',
        duration: 0.5
    });
});


// Funkcje

function showMenu() {
    const menuHeight = document.body.clientWidth < 768 ? window.innerHeight : 'auto';
    navTl.to(nav, {
        width: 'auto'
    });
    navTl.to('.drop', {
        scale: 0
    }, '<');
    navTl.to(nav, {
        height: menuHeight
    });
    navTl.to('.nav-item', {
        opacity: 1,
        stagger: 0.05
    }, '<50%');
    navTl.to('.exit', {
        scale: 1
    }, '<');
    nav.classList.toggle('collapsed');
}

function hideMenu() {
    navTl.to('.nav-item', {
        opacity: 0,
        stagger: -0.05
    });
    navTl.to('.exit', {
        scale: 0,
        stagger: -0.05
    }, '<');
    navTl.to(nav, {
        height: 50
    }, '<50%');
    navTl.to(nav, {
        width: 50
    });
    navTl.to('.drop', {
        scale: 1
    }, '<');
    nav.classList.toggle('collapsed');
}

// Chowanie menu przy scrollowaniu w dół dla małych ekranów
if (document.body.clientWidth < 768) {
    let prevScrollpos = window.pageYOffset; // ile pikseli do dołu przescrollowana jest strona
    window.onscroll = function () {
        let currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) { // sprawdza czy obecna pozycja scrolla jest mniejsza od początkowej
            nav.style.top = "0";
        } else {
            nav.style.top = "-50px";
        }
        prevScrollpos = currentScrollPos;
    }
}