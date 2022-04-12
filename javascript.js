window.addEventListener ("scroll", function(){
    let topnawbar = document.querySelector(".nawbar");
    topnawbar.classList.toggle("sticky", window.scrollY > 150);
})

// sticky nawbar

ScrollReveal ({
    reset: false,
    distance: '100px',
    duration: 1000
});

ScrollReveal().reveal('.center_name',{delay: 300, origin: 'left'});
ScrollReveal().reveal('.center_name2',{delay: 300, origin: 'right'});
ScrollReveal().reveal('.minicounter',{delay: 300, origin: 'bottom'});
ScrollReveal().reveal('.left',{delay: 200, origin: 'bottom'});
ScrollReveal().reveal('.midle',{delay: 400, origin: 'bottom'});
ScrollReveal().reveal('.right',{delay: 600, origin: 'bottom'});
ScrollReveal().reveal('.leftperson',{delay: 200, origin: 'bottom'});
ScrollReveal().reveal('.middleperson',{delay: 400, origin: 'bottom'});
ScrollReveal().reveal('.rightperson',{delay: 600, origin: 'bottom'});
ScrollReveal().reveal('.all_touch',{delay: 600, origin: 'bottom'});
ScrollReveal().reveal('.card_footer1',{delay: 200, origin: 'bottom'});
ScrollReveal().reveal('.card_footer2',{delay: 350, origin: 'bottom'});
ScrollReveal().reveal('.card_footer3',{delay: 450, origin: 'bottom'});
ScrollReveal().reveal('.card_footer4',{delay: 600, origin: 'bottom'});
ScrollReveal().reveal('.fa-facebook-f',{delay: 400, origin: 'bottom'});
ScrollReveal().reveal('.fa-instagram',{delay: 500, origin: 'bottom'});
ScrollReveal().reveal('.fa-youtube',{delay: 600, origin: 'bottom'});
ScrollReveal().reveal('.fa-telegram-plane',{delay: 700, origin: 'bottom'});

// counter

const counters = document.querySelectorAll('.counter_div');

counters.forEach((counter) => {
    counter.innerText = '0';
    
    const updateCounter = () => {
        const target = +counter.getAttribute('data-target');
        const c = + counter.innerText;

        const increment = target / 250;

        if (c < target) {
            counter.innerText = `${Math.ceil(c + increment)}`
            setTimeout(updateCounter, 80);
        }
        else {
            counter.innerText = target;
        }
    };
    updateCounter();
});