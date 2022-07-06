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