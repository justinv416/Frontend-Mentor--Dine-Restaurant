const sliderImg = document.querySelector('.slider-image');
const sliderHeading = document.querySelector('.slider-container-copy-heading');
const sliderParagraph = document.querySelector('.slider-container-copy-paragraph');

const images = [
    './images/homepage/family-gathering-desktop.jpg',
    './images/homepage/special-events-desktop.jpg',
    './images/homepage/social-events-desktop.jpg'
]

const headings = [
    'Family Gathering',
    'Special Events',
    'Social Events'
];

const paragraphs = [
    `We love catering for entire families. 
    So please bring everyone along for a special meal with your loved ones. 
    We’ll provide a memorable experience for all.`,
    `Whether it’s a romantic dinner or special date you’re celebrating with others we’ll look after you. 
    We’ll be sure to mark your special date with an unforgettable meal.`,
    `Are you looking to have a larger social event? No problem! 
    We’re more than happy to cater for big parties. 
    We’ll work with you to make your event a hit with everyone.`
];

sliderImg.src = images[0];
sliderHeading.textContent = headings[0];
sliderParagraph.textContent = paragraphs[0];

/*
Todo:

1. write logic for image slider
2. write form validation logic for reservation form

*/
