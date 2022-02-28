// Elementy charakterystyczne wyłącznie dla strony głównej.

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
const grid = document.querySelectorAll('.grid');
const screenWidth = document.body.clientWidth;
const enterStart = screenWidth < 1200 ? '-100%' : '-75%';
const enterEnd = screenWidth < 1200 ? '-50%' : '-25%';
const leaveStart = screenWidth < 1200 ? '0%' : '25%';
const leaveEnd = screenWidth < 1200 ? '50%' : '75%';
grid.forEach(item => {
    const gridEnterTl = gsap.timeline({
        scrollTrigger: {
            trigger: item,
            start: enterStart,
            end: enterEnd,
            scrub: true
        }
    });
    const gridLeaveTl = gsap.timeline({
        scrollTrigger: {
            trigger: item,
            start: leaveStart,
            end: leaveEnd,
            scrub: true
        }
    });
    gsap.set(item.querySelector('.grid-text'), {opacity: 0, scale: 0.95});
    gsap.set(item.querySelector('.grid-img'), {scale: 1.1});
    gsap.set(item.querySelector('.grid-header'), {scale: 0.9, opacity: 0});
    gridEnterTl.to(item.querySelector('.grid-img'), {scale: 1.2});
    gridEnterTl.to(item.querySelector('.grid-header'), {scale: 1, opacity: 1}, '<');
    gridEnterTl.to(item.querySelector('.grid-text'), {opacity: 1, scale: 1}, '<50%');

    gridLeaveTl.to(item.querySelector('.grid-header'), {scale: 0.9, opacity: 0});
    gridLeaveTl.to(item.querySelector('.grid-img'), {scale: 1.1}, '<');
    gridLeaveTl.to(item.querySelector('.grid-text'), {opacity: 0, scale: 0.95}, '<50%');
});

// Animacja przycisków 'dowiedz się więcej'
const gridBtn = document.querySelectorAll('.grid-btn');
gridBtn.forEach(btn => {
    btn.addEventListener('mouseover', () => {
        gsap.to(btn, {color: '#EDF0F0', backgroundColor: '#A47E1B', duration: 0.5});
    });
    btn.addEventListener('mouseleave', () => {
        gsap.to(btn, {color: '#A47E1B', backgroundColor: '#EDF0F0', duration: 0.5});
    });
});

// ScrollTo dla strzałki w dół na landing-page
const landingPageArrow = document.querySelector('.landing-page-arrow');
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
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach((link, index) => {
    let sectionScrolled = '.grid-' + (index + 1);
    let sectionOffsetY = 0;
    link.addEventListener('click', (event) => {
        event.preventDefault();
        navTl.to(window, 1, {scrollTo: {y: sectionScrolled, offsetY: sectionOffsetY}});
        navTl.to('.nav-item', {opacity: 0, stagger: -0.05}, '<');
        navTl.to('.exit', {scale: 0, stagger: -0.05}, '<');
        navTl.to(nav, {height: 50}, '<50%');
        navTl.to(nav, {width: 50});
        navTl.to('.drop', {scale: 1}, '<');
        nav.classList.toggle('collapsed');
    });
});

// Animacja przy otwieraniu strony
const landingPageTitle = document.querySelector('.landing-page-title');
const landingPageSubtitle = document.querySelectorAll('.landing-page-subtitle');
const loadPageTl = gsap.timeline({defaults: {duration: 0.5, ease: 'power2.out'}});

gsap.set(landingPageTitle, {opacity: 0});
gsap.set(landingPageSubtitle, {opacity: 0});
gsap.set(landingPageArrow, {opacity: 0});
gsap.set(nav, {opacity: 0});

loadPageTl.to(landingPageTitle, {opacity: 1, delay: 0.5});
loadPageTl.to(landingPageSubtitle, {opacity: 1, duration: 0.5, stagger: 0.5});
loadPageTl.to(landingPageArrow, {opacity: 1});
loadPageTl.to(nav, {opacity: 1}, '<');