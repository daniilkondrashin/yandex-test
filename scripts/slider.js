const images = document.querySelectorAll('.slider__img');
const sliderLine = document.querySelector('.exclusive__track');
let count = 0;
let width;

function init() {
    console.log('resize');
    width = document.querySelector('.exclusive__slider').offsetWidth;
    sliderLine.style.width = width * images.length + 'px';
    images.forEach(item => {
        item.style.width = width + 'px';
        item.style.height = 'auto';
    });
    console.log(width);
    rollSlider();
}
init();
window.addEventListener('resize', init);


document.querySelector('#forward').addEventListener('click', function() {
    if( count >= 3) {
        return
    } else {
        count++;
        document.querySelector('#back').classList.remove('_disabled');
        rollSlider();
    }
    if( count === 3 ) {
        document.querySelector('#forward').classList.add('_disabled');
        return
    }
})

document.querySelector('#back').addEventListener('click', function() {
    if( count <= 0) {
        return
    } else {
        count--;
        document.querySelector('#forward').classList.remove('_disabled');
        rollSlider();
    }
    if( count <= 0 ) {
        document.querySelector('#back').classList.add('_disabled');
        return
    }
})
console.log(count);
function rollSlider() {
    sliderLine.style.transform = 'translate(-'+count*width+'px)';
}