window.addEventListener('DOMContentLoaded', setup);

function setup(){
    const options= {
        rootMargin: '0px 0px -100px 0px'
    }

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target);
            } else{
                return;
            }
        });
    }, options);



const h1 = document.querySelector('h1');
observer.observe(h1);

const paras = document.querySelectorAll('p');
paras.forEach(p => observer.observe(p));

const cards = document.querySelectorAll('.card');
cards.forEach(card => observer.observe(card));

const allh3 = document.querySelectorAll('h3');
allh3.forEach(h3 => observer.observe(h3));
}

function cardFocus(){
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => card.classList.add('zoom'));
   
}


function cardOut(){
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => card.classList.remove('zoom'));
}