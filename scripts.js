let currentSlide = 0;

function showDetails(element) {
    const details = element.querySelector('.details1');
    if (details.style.display === 'flex') {
        details.style.display = 'none';
    } 
    else {
        document.querySelectorAll('.details1').forEach(detail => {
            detail.style.display = 'none';
        });
        details.style.display = 'flex';
    }
}

function changeSlide(direction) {
    const slides = document.querySelector('.slides');
    const totalSlides = document.querySelectorAll('.slide').length;
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
    slides.style.transform = `translateX(${-currentSlide * 100}%)`;
}


let currentIndex2 = 0;

function slideLeft2() {
    const slider2 = document.querySelector('.slider2');
    const cardWidth2 = document.querySelector('.card2').offsetWidth;
    const maxIndex2 = document.querySelectorAll('.card2').length - 4; // 4 visible cards

    if (currentIndex2 > 0) {
        currentIndex2--;
        slider2.style.transform = `translateX(-${currentIndex2 * cardWidth2}px)`;
    }
}

function slideRight2() {
    const slider2 = document.querySelector('.slider2');
    const cardWidth2 = document.querySelector('.card2').offsetWidth;
    const maxIndex2 = document.querySelectorAll('.card2').length - 4; // 4 visible cards

    if (currentIndex2 < maxIndex2) {
        currentIndex2++;
        slider2.style.transform = `translateX(-${currentIndex2 * cardWidth2}px)`;
    }
}

function toggleDetails2(card2) {
    const details2 = card2.querySelector('.details2');
    details2.style.display = details2.style.display === 'block' ? 'none' : 'block';
}


let currentIndex = 0;

function slideLeft() {
    const slider = document.querySelector('.slider');
    const cardWidth = document.querySelector('.card').offsetWidth;
    const maxIndex = document.querySelectorAll('.card').length - 4; // 4 visible cards

    if (currentIndex > 0) {
        currentIndex--;
        slider.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
    }
}

function slideRight() {
    const slider = document.querySelector('.slider');
    const cardWidth = document.querySelector('.card').offsetWidth;
    const maxIndex = document.querySelectorAll('.card').length - 4; // 4 visible cards

    if (currentIndex < maxIndex) {
        currentIndex++;
        slider.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
    }
}

function toggleDetails(card) {
    const details = card.querySelector('.details');
    details.style.display = details.style.display === 'block' ? 'none' : 'block';
}


const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');

registerLink.addEventListener('click',()=> { wrapper.classList.add('active');} );
loginLink.addEventListener('click',()=> { wrapper.classList.remove('active');} );
