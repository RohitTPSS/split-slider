const leftColumn = document.querySelector(".left");
const rightColumn = document.querySelector(".right");
var current = 'blue';

window.addEventListener('keyup', (e) => {
    if (e.key == 'ArrowUp') {
        prev();
    }
    if (e.key == 'ArrowDown') {

        next();
    }
});

document.addEventListener('mousewheel', scroll);
document.addEventListener('DOMMouseScroll', scroll);


var w;
function scroll(e) {
    clearTimeout(w);
    e.preventDefault();
    var e = window.event || e;
    w = setTimeout(() => {
        w = undefined;
        if (e.wheelDelta < 0 || e.detail > 0) {
            next();
        }
        if (e.wheelDelta > 0 || e.detail < 0) {
            prev();
        }
    }, 100);


}

function next() {
    let r, l;

    switch (current) {
        case 'gold': {
            l = '0';
            r = '-200';
            current = 'blue';

            break;
        }
        case 'blue': {
            l = '-100';
            r = '-100';
            current = 'red';
            break;
        }
        case 'red': {
            l = '-200';
            r = '0';
            current = 'gold';
            break;
        }

    }

    leftColumn.style.transform = `translateY(${l}vh)`;
    rightColumn.style.transform = `translateY(${r}vh)`;

}
function prev() {
    let r, l;

    switch (current) {
        case 'red': {
            l = '0';
            r = '-200';
            current = 'blue';
            break;
        }
        case 'blue': {
            l = '-200';
            r = '0';
            current = 'gold';
            break;
        }
        case 'gold': {
            l = '-100';
            r = '-100';
            current = 'red';
            break;
        }

    }

    leftColumn.style.transform = `translateY(${l}vh)`;
    rightColumn.style.transform = `translateY(${r}vh)`;
}