let progress = document.getElementById("progressbar");
let totalHeight = document.body.scrollHeight - window.innerHeight;
window.onscroll = function () {
    let progressHeight = (window.pageYOffset / totalHeight) * 55;
    progress.style.height = progressHeight + "%";
}

$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 10) {
        $('.header__nav-wrapper').addClass('fixed');
    } else {
        $('.header__nav-wrapper').removeClass('fixed');
    }
})

var animateButton = function (e) {

    e.preventDefault;

    e.target.classList.remove('animate');

    e.target.classList.add('animate');
    setTimeout(function () {
        e.target.classList.remove('animate');
    }, 700);
};

var bubblyButtons = document.getElementsByClassName("bubbly-button");

for (var i = 0; i < bubblyButtons.length; i++) {
    bubblyButtons[i].addEventListener('mouseenter', animateButton, false);
}

var rellax = new Rellax('.rellax');

gsap.registerPlugin(ScrollTrigger);

let controller;
let slideScene;
let pageScene;

function animateSlides() {
    controller = new ScrollMagic.Controller();

    const sliders = document.querySelectorAll('.slide');
    const nav = document.querySelector('.nav-header');

    sliders.forEach((slide, index, slides) => {
        const revealImg = slide.querySelector('.reveal-img');
        const img = slide.querySelector('.slide-hero__img');
        const boxImg = slide.querySelector('.slide-hero');
        const revealText = slide.querySelector('.reveal-text');

        const slideTl = gsap.timeline({
            defaults: {
                duration: 1.25,
                ease: 'power2.inOut'
            }
        });
        slideTl.fromTo(revealImg, {
            x: '0%'
        }, {
            x: '100%'
        });
        slideTl.fromTo(img, {
            scale: 2,
        }, {
            scale: 1.05
        }, '-=1');
        slideTl.fromTo(boxImg, {

            boxShadow: "0"
        }, {

            boxShadow: "0 2rem 5rem rgba(0, 0, 0, 0.2)"
        }, '-=1');
        slideTl.fromTo(revealText, {
            x: '0%'
        }, {
            x: '100%'
        }, '-=.85', )
        slideTl.fromTo(nav, {
            y: '-100%'
        }, {
            y: '0%'
        }, '-=0.75');

        slideScene = new ScrollMagic.Scene({
                triggerElement: slide,
                triggerHook: 0.25,
                reverse: false
            })
            .setTween(slideTl)

            .addTo(controller);

        const pageTl = gsap.timeline();
        let nextSlide = slides.length - 1 === index ? 'end' : slides[index + 1];
        pageTl.fromTo(nextSlide, {
            y: '0%'
        }, {
            y: '80%'
        }, '-=0.4');
        pageTl.fromTo(slide, {
            opacity: 1,
            scale: 1
        }, {
            opacity: 0,
            scale: 0.5
        });
        pageTl.fromTo(nextSlide, {
            y: '80%'
        }, {
            y: '0%'
        }, '-=0.4')
        pageScene = new ScrollMagic.Scene({
                triggerElement: slide,
                duration: '100%',
                triggerHook: 0
            })
            .setPin(slide, {
                pushFollowers: false
            })
            .setTween(pageTl)

            .addTo(controller)
    });
}

animateSlides();

gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".scroll",
        scrub: true,
        pin: true,
        start: "center center",
        end: "+=800%",
    }
});

tl.to(".scroll__heading", {
    scale: 0
});

tl.from(".scroll-1", {
    scale: 0.3,
    rotation: 45,
    x: innerWidth * -1
});

tl.from(".scroll-2", {
    scale: 0.3,
    rotation: 45,
    x: innerWidth * 1
});

tl.from(".scroll-3", {
    scale: 0.3,
    rotation: 45,
    x: innerWidth * 1
});

tl.from(".scroll-4", {
    scale: 0.3,
    rotation: 45,
    x: innerWidth * 1
});

tl.from(".scroll-5", {
    scale: 0.3,
    rotation: 45,
    x: innerWidth * 1
});

tl.from(".scroll-6", {
    scale: 0.3,
    rotation: 45,
    x: innerWidth * 1
});

const inputs = document.querySelectorAll(".input");

function focusFunc() {
    let parent = this.parentNode;
    parent.classList.add("focus");
}

function blurFunc() {
    let parent = this.parentNode;
    if (this.value == "") {
        parent.classList.remove("focus");
    }
}

inputs.forEach((input) => {
    input.addEventListener("focus", focusFunc);
    input.addEventListener("blur", blurFunc);
});