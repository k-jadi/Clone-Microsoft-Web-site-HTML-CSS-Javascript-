let x = document.getElementById('pointSlideMenu');
let y = document.querySelector('.slideMenu');

let z = document.querySelector('.btn');
let zbis = document.querySelector('.btnBis');

let z2 = document.querySelector('.btnSection3');
let z3 = document.getElementById('linkSection3');

let u = document.getElementById('sixUsers');

let v = document.getElementById('oneUsers');

let w1 = document.querySelectorAll('.enSavoirPlus');
let w2 = document.querySelectorAll('.lienProducts');
let w3 = document.querySelectorAll('.chevronProducts');


x.addEventListener("click", openSlide);
function openSlide () {
    y.style.maxHeight ='fit-content';
    y.style.borderBottom = '2px solid #000';
    x.removeEventListener('click',openSlide);
    x.addEventListener('click',closeSlide);
}
function closeSlide () {
    y.style.maxHeight ='0';
    y.style.borderBottom = 'none';
    x.removeEventListener('click', closeSlide);
    x.addEventListener('click',openSlide);
}

z.addEventListener('mouseover', () => {
    u.style.borderBottom = '2px solid #fff';
})
z.addEventListener('mouseleave', () => {
    u.style.borderBottom = 'none';
})
zbis.addEventListener('mouseover', () => {
    v.style.borderBottom = '2px solid #000';
    v.style.marginRight = '5px';
})
zbis.addEventListener('mouseleave', () => {
    v.style.borderBottom = 'none';
    v.style.marginRight = '0';
})
for (let j=0;j<8;j++) {
w1[j].addEventListener('mouseover', () => {
w2[j].style.borderBottom = '2px solid rgb(20, 20, 185)';
w3[j].style.marginLeft = '10px';
});
}
for (let j=0;j<8;j++) {
w1[j].addEventListener('mouseleave', () => {
w2[j].style.borderBottom = 'none';
w3[j].style.marginLeft = '0';
});
}
z2.addEventListener('mouseover', () => {
    z3.style.borderBottom = "2px solid #fff";
})
z2.addEventListener('mouseleave', () => {
    z3.style.borderBottom = "none";
})