ScrollReveal ({
    reset: false,
    distance: '100px',
    duration: 1000
});

ScrollReveal().reveal('.center_name',{delay: 300, origin: 'left'});
ScrollReveal().reveal('.center_name2',{delay: 300, origin: 'right'});
ScrollReveal().reveal('.topcounter',{delay: 300, origin: 'bottom'});

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
            setTimeout(updateCounter, 50);
        }
        else {
            counter.innerText = target;
        }
    };
    updateCounter();
});