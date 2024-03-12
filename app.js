'use sctrict';
const faqs = document.querySelectorAll('.faq-list-button');
const faqAnswer = document.querySelectorAll('.faq-answer-wrapper');
const mobileNav = document.querySelector('.nav-mobile-block');
const hamburger = document.querySelector('.hamburger');
const body = document.querySelector('body');


//Write a function that will toggle the class of the answer to show and hide it
//1. Get the clicked button
//2. Get the index of the clicked button
//3. Get the answer of the clicked button
//4. Toggle the class of the answer to show and hide it
const displayFaq = function (e) {
    const clicked = e.currentTarget;
    const index = Array.from(faqs).indexOf(clicked);
    faqAnswer[index].classList.toggle('show-answer');
    faqAnswer.forEach(function (answer, i) {
        if (i !== index) {
            answer.classList.remove('show-answer');
        }
    });
}

faqs.forEach(faq => faq.addEventListener('click', displayFaq));


//Write a function that will toggle the class of the mobile nav to show and hide it
hamburger.addEventListener('click', function () {
    mobileNav.classList.toggle('mobile-menu-active');
    body.classList.toggle('mobile-menu-body');
})