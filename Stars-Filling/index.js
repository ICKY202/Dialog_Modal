import {createElement, createElements} from './helper.js';

const starCount = 5;
let partialStar = null;
let initalValue = 2.3;
const starContainer = document.querySelector('.star-container');
const starRating = document.querySelector('.star-rating');
console.log(starContainer);


starContainer.appendChild(
    createElements(
        starCount, 
        (i) => {
            const star = createElement('span', {class: "star", "data-index": i});
            const bgStar = createElement('span', {class: 'partial-star', "data-index": i});
            bgStar.textContent = '★';
            star.textContent = '☆';
            star.appendChild(bgStar);
            return star;
        },
        1
    )
);
const stars = starContainer.querySelectorAll('.star')

function fillCompleteStar(ratings) {
    const count = Math.floor(ratings);

    for(let i=0; i<count; i++) {
        stars[i].classList.add('star-filled');
    }
    for(let i=count; i<starCount; i++) {
        stars[i].classList.remove('star-filled');
    }
    if(partialStar) {
        partialStar.classList.remove('partially-filled');
        partialStar.style.width = "0%"
    }
    if(count !== ratings) {
        partialStar = stars[count].querySelector('.partial-star');
        partialStar.classList.add('partially-filled');
        partialStar.style.width = `${(ratings - count) * 100}%`;
    }
}
const rangeInput = document.querySelector('.range_input');
function inputHandler(rating) {
    fillCompleteStar(rating);
    starRating.textContent = rating;
}
rangeInput.addEventListener('input', (e) =>{
    inputHandler(+e.target.value);
});

rangeInput.setAttribute('max', starCount);
inputHandler(initalValue);
