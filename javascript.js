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