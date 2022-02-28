// Elementy charakterystyczne wyłącznie dla strony głównej.

// Stałe i zmienne
const landingPageTitle = document.querySelector('.landing-page-title');
const landingPageSubtitle = document.querySelectorAll('.landing-page-subtitle');
const landingPageArrow = document.querySelector('.landing-page-arrow');
const grid = document.querySelectorAll('.grid');
const gridBtn = document.querySelectorAll('.grid-btn');

// Animacje ScrollTrigger dla landing-page
const landingPageLeaveTl = gsap.timeline({
    scrollTrigger: {
        trigger: '.landing-page',
        start: '0%',
        end: '25%',
        scrub: true
    }
});
landingPageLeaveTl.fromTo('.landing-page-container', {opacity: 1}, {opacity: 0});
landingPageLeaveTl.fromTo('.landing-page-arrow', {opacity: 1}, {opacity: 0}, '<');

// Animacje ScrollTrigger dla kolejnych sekcji grid (enter)
if (document.body.clientWidth >= 1200) {
    grid.forEach(item => {
        const gridEnterTl = gsap.timeline({
            scrollTrigger: {
                trigger: item,
                start: '-100%',
                end: '-50%',
                scrub: true
            }
        });
        const gridLeaveTl = gsap.timeline({
            scrollTrigger: {
                trigger: item,
                start: '0%',
                end: '50%',
                scrub: true
            }
        });
        gridEnterTl.to(item.querySelector('.grid-img'), {scale: 1.2});
        gridLeaveTl.to(item.querySelector('.grid-img'), {scale: 1.1}, '<');
    });   
}

// Animacja przycisków 'dowiedz się więcej'
gridBtn.forEach(btn => {
    btn.addEventListener('mouseenter', () => {
        gsap.to(btn, {color: '#EDF0F0', backgroundColor: '#A47E1B', duration: 0.5});
    });
    btn.addEventListener('mouseleave', () => {
        gsap.to(btn, {color: '#A47E1B', backgroundColor: '#EDF0F0', duration: 0.5});
    });
});

// ScrollTo dla strzałki w dół na landing-page
landingPageArrow.addEventListener('click', () => {
    gsap.to(window, 1, {scrollTo: {y: window.innerHeight}});
});

// Animacja powiększenia landing-page-arrow po najechaniu myszą
landingPageArrow.addEventListener('mouseenter', () => {
    gsap.fromTo(landingPageArrow, {scale: 1}, {scale: 1.2, ease: 'power2.out', duration: 0.5});
});
landingPageArrow.addEventListener('mouseleave', () => {
    gsap.fromTo(landingPageArrow, {scale: 1.2}, {scale: 1, ease: 'power2.out', duration: 0.5});
});

// ScrollTo dla rozwijanego menu
navLink.forEach((link, index) => {
    let sectionScrolled = '.grid-' + (index + 1);
    link.addEventListener('click', (event) => {
        event.preventDefault();
        hideMenu();
        navTl.to(window, 1, {scrollTo: {y: sectionScrolled, offsetY: 0}});
    });
});

// Animacja przy otwieraniu strony
const loadPageTl = gsap.timeline({defaults: {duration: 0.5, ease: 'power2.out'}});
gsap.set(landingPageTitle, {opacity: 0});
gsap.set(landingPageSubtitle, {opacity: 0});
gsap.set(landingPageArrow, {opacity: 0});
loadPageTl.to(landingPageTitle, {opacity: 1, delay: 0.5});
loadPageTl.to(landingPageSubtitle, {opacity: 1, duration: 0.5, stagger: 0.5});
loadPageTl.to(landingPageArrow, {opacity: 1});