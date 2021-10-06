const sliderLinks = document.querySelectorAll('.slider__content-link');
const sliderHeading = document.querySelector('#slider__content-heading');
const sliderParagraph = document.querySelector('#slider__content-paragraph');
const sliderImg = document.querySelector('#slider__img');
const sliderImgTablet = document.querySelector('#slider__img-tablet');
const sliderImgMobile = document.querySelector('#slider__img-mobile');

const sliderContent = [
    `We love catering for entire families. So please bring everyone along for a special meal with your 
    loved ones. We’ll provide a memorable experience for all.`,
    `Whether it’s a romantic dinner or special date you’re celebrating with others we’ll look after you. 
    We’ll be sure to mark your special date with an unforgettable meal.`,
    `Are you looking to have a larger social event? No problem! We’re more than happy to cater for big 
    parties. We’ll work with you to make your event a hit with everyone.`
];

const sliderImages = [
    [
        './images/homepage/family-gathering-desktop.jpg',
        './images/homepage/family-gathering-tablet.jpg',
        './images/homepage/family-gathering-mobile.jpg'
    ],
    [
        './images/homepage/special-events-desktop.jpg',
        './images/homepage/special-events-tablet.jpg',
        './images/homepage/special-events-mobile.jpg'
    ],
    [
        './images/homepage/social-events-desktop.jpg',
        './images/homepage/social-events-tablet.jpg',
        './images/homepage/social-events-mobile.jpg'
    ]
];

sliderLinks.forEach(link => link.addEventListener('click', () =>{
   console.log(link.dataset.value) 
   if(link.dataset.value === 'family-gathering') {
       sliderHeading.textContent = 'Family Gathering';
       sliderParagraph.textContent = sliderContent[0];
       sliderImg.src = sliderImages[0][0];
       sliderImgTablet.srcset = sliderImages[0][1];
       sliderImgMobile.srcset = sliderImages[0][2];
   } else if(link.dataset.value === 'special-events') {
       sliderHeading.textContent = 'Special Events';
       sliderParagraph.textContent = sliderContent[1];
       sliderImg.src = sliderImages[1][0];
       sliderImgTablet.srcset = sliderImages[1][1];
       sliderImgMobile.srcset = sliderImages[1][2];
   } else {
       sliderHeading.textContent = 'Social Events';
       sliderParagraph.textContent = sliderContent[2];
       sliderImg.src = sliderImages[2][0];
       sliderImgTablet.srcset = sliderImages[2][1];
       sliderImgMobile.srcset = sliderImages[2][2];
   }
}));

/* TODO:

1.  Write logic for changing pictures keeping in mind whether <picture> element might cause
    issues when changing to different images at different breakpoints DONE but explore ways to refactor. 
2. Maybe add GSAP animations.

*/