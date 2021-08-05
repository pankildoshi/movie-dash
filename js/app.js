// slider
const slides = document.querySelectorAll('.item');
const nextBtn = document.querySelector('.right-slide');
const prevBtn = document.querySelector('.left-slide');
const totalSlides = slides.length;
var index = 0;

nextBtn.addEventListener('click', function(){
    slide('next');
});
prevBtn.addEventListener('click', function(){
    slide('prev');
});
function slide(direction){
    if(direction === 'next'){
        index++;
        if(index === totalSlides){
            index = 0;
        }
    } else {
        if(index === 0){
            index = totalSlides - 1;
        } else{
            index--;
        }
    }
    for(let i = 0; i < slides.length; i++){
        slides[i].classList.remove('active');
    }
    slides[index].classList.add('active');
}

// sidebar

const menuBtn = document.querySelector('.fa-bars');
const closeBtn = document.querySelector('.btn-close');
const sidebar = document.querySelector('.sidebar');

menuBtn.addEventListener('click', function (){
    sidebar.style.left = 0;
});

closeBtn.addEventListener('click', function (){
    sidebar.style.left = '-400px';
});