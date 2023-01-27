gsap.from(".invitation", {y: -150, opacity: 0, duration: 2});
gsap.from(".card_oneblock", {opacity: 0, duration: .7, stagger: 1});
gsap.from(".showPoint", {opacity: 0, duration: 1, stagger: 1});


gsap.from(".showGroup", {
    scrollTrigger: ".showGroup",
    y: 400,
    stagger: .5,
    duration: .2,
    opacity: 0,
    ease: "SlowMo"
});