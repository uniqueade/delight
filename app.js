
// SCROLL CIRCLE EFFECT
const circle = document.querySelector('.circle');
const c2 = document.querySelectorAll('.c2');
const trial = document.querySelector('.trial');

trial.addEventListener('scroll', ()=>{
    let scroll = trial.scrollLeft;
    if (scroll > 20 && scroll < 80) {
        circle.style.background = '#757F78';
        c2[0].style.background = '#18629F';
        c2[1].style.background = '#757F78';
    } else if(scroll>=80){
        circle.style.background = '#757F78';
        c2[0].style.background = '#757F78';
        c2[1].style.background = '#18629F';
    }
    else {
        circle.style.background = '#18629F';
        for (i = 0; i < c2.length; i++){
            c2[i].style.background = '#757F78';
        }
    }
})