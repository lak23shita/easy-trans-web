const targs = [
    ".slide_1",
    ".slide_2",
    ".slide_3",
    ".slide_4"
]

/**
 * Finds out which card to display based on click
 * @param {String} action What button is clicked
 * @param {Number} value Current Position
 * @return {Number} Next Position
 */
function modifyOnClick(action, value) {
    let next;
    if (action == '+') {
        next = value + 1;
        if (next == targs.length) next = 0;
    } else {
        next = value - 1;
        if (next < 0) next = targs.length - 1;
    }
    return next;
}

/**
 * Hides all slides except current
 * @param {Number} except Current slide 
 */
function hideRest(except) {
    for(let i=0; i<targs.length; i++) {
        if (i == except) {
            $(targs[i]).show();
        } else {
            $(targs[i]).hide();
        }
    }
}

$(document).ready(() => {
    let pos = 0;
    hideRest(pos);

    $('.left').on('click', (e) => {
        pos = modifyOnClick('-', pos);
        hideRest(pos);
    });

    $('.right').on('click', (e) => {
        pos = modifyOnClick('+', pos);
        hideRest(pos);
    });
});