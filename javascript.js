window.addEventListener('DOMContentLoaded', () => {
    const loader = document.getElementById('spinner_wrapper');
    setTimeout(() => {
        loader.style.display = 'none';
    }, 2000)
});
// Loader

window.addEventListener ("scroll", function(){
    let topnawbar = document.querySelector(".nawbar");
    topnawbar.classList.toggle("sticky", window.scrollY > 150);
})
window.addEventListener ("scroll", function(){
    let topnawbar = document.querySelector(".expend1");
    topnawbar.classList.add("sticky2", window.scrollY);
})
window.addEventListener ("scroll", function(){
    let topnawbar = document.querySelector(".expend2");
    topnawbar.classList.add("sticky2", window.scrollY);
})
window.addEventListener ("scroll", function(){
    let topnawbar = document.querySelector(".expend3");
    topnawbar.classList.add("sticky2", window.scrollY);
})
window.addEventListener ("scroll", function(){
    let topnawbar = document.querySelector(".expend4");
    topnawbar.classList.add("sticky2", window.scrollY);
})
// sticky nawbar

ScrollReveal ({
    reset: false,
    distance: '100px',
    duration: 1000
});

ScrollReveal().reveal('.center_name',{delay: 300, origin: 'left'});
ScrollReveal().reveal('.center_name2',{delay: 300, origin: 'bottom'});
ScrollReveal().reveal('.center_name3',{delay: 300, origin: 'bottom'});
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
ScrollReveal().reveal('.leftstats',{delay: 700, origin: 'bottom'});
ScrollReveal().reveal('.rightstats',{delay: 700, origin: 'bottom'});


// counter

const counters = document.querySelectorAll('.counter_div');

counters.forEach((counter) => {
    counter.innerText = '0';
    
    const updateCounter = () => {
        const target =+ counter.getAttribute('data-target');
        const c =+ counter.innerText;

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

// gridDiv

window.addEventListener('DOMContentLoaded', () => {
    class Grid {
        constructor(src, alt, num, parentSelector, ...classes)
        {
            this.src = src;
            this.alt = alt
            this.num = num;
            this.classes = classes;
            this.parent = document.querySelector(parentSelector)
        }
        render ()
        {
            const element = document.createElement('div');
    
            if(this.classes.length === 0)
            {
                this.classes = 'colGrid'
                element.classList.add(this.classes)
            }
            else
            {
                this.classes.forEach(className => element.classList.add(className))
            }
    
            element.innerHTML = `
                <div class="colGrid">
                    <img src="${this.src}" alt="${this.alt}">
                    <div class="background_grid">
                        <span class="spnGr">
                            <i class="fa-solid fa-heart"> ${this.num}</i>
                        </span>
                    </div>
                </div>
            `
            this.parent.append(element)
        }
    }

    new Grid
    (
        'pictures/gallery1.jpg',
        'none',
        '10',
        '.gridSection .gridDiv'
    ).render()

    new Grid
    (
        'pictures/gallery2.jpg',
        'none',
        '8',
        '.gridSection .gridDiv'
    ).render()

    new Grid
    (
        'pictures/gallery3.jpg',
        'none',
        '13',
        '.gridSection .gridDiv'
    ).render()

    new Grid
    (
        'pictures/gallery4.jpg',
        'none',
        '7',
        '.gridSection .gridDiv'
    ).render()

    new Grid
    (
        'pictures/gallery5.jpg',
        'none',
        '16',
        '.gridSection .gridDiv'
    ).render()

    new Grid
    (
        'pictures/gallery6.jpg',
        'none',
        '22',
        '.gridSection .gridDiv'
    ).render()

    new Grid
    (
        'pictures/gallery7.jpg',
        'none',
        '4',
        '.gridSection .gridDiv'
    ).render()

    new Grid
    (
        'pictures/gallery8.jpg',
        'none',
        '54',
        '.gridSection .gridDiv'
    ).render()

    new Grid
    (
        'pictures/gallery9.jpg',
        'none',
        '19',
        '.gridSection .gridDiv'
    ).render()
});

// Submit

function mySubmit ()
{
    document.getElementById('jsDiv').style.display = 'block';
    let name = document.getElementById('in1').value;
    let surname = document.getElementById('in2').value;
    let message = document.getElementById('area').value;
    if(name != '')
    {
        document.getElementById('js_p').innerHTML = "Familya va xabar kiriting!";
        document.getElementById('in1').style.borderBlockEnd = '1px solid green';
        if(surname != '')
        {
            document.getElementById('in2').style.borderBlockEnd = '1px solid green';
            document.getElementById('js_p').innerHTML = "Xabar kiriting!";
            if(message != '')
            {
                document.getElementById('area').style.borderBlockEnd = '1px solid green';
                document.getElementById('jsDiv').style.background = 'green';
                document.getElementById('js_p').innerHTML = "Xabar yuborildi." + `<i class="fa-regular fa-check"></i>`;
                document.getElementById('in1').value = '';
                document.getElementById('in2').value = '';
                document.getElementById('area').value = '';

                setTimeout(() => {
                    document.getElementById('jsDiv').style.display = 'none';
                }, 2000);
            }
            else
            {
                document.getElementById('area').style.borderBlockEnd = '1px solid red';
            }
        }
        else
        {
            document.getElementById('in2').style.borderBlockEnd = '1px solid red';
            document.getElementById('area').style.borderBlockEnd = '1px solid red';
        }
    }
    else
    {
        document.getElementById('js_p').innerHTML = "Ismingiz, Familyangiz va xabar kiriting!";
        document.getElementById('jsDiv').style.background = 'rgb(226, 0, 0)';
        document.getElementById('in1').style.borderBlockEnd = '1px solid red';
        document.getElementById('in2').style.borderBlockEnd = '1px solid red';
        document.getElementById('area').style.borderBlockEnd = '1px solid red';
    }
}