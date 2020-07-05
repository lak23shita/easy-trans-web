$(document).ready(() => {
    const targs = [
        ".slide_1",
        ".slide_2",
        ".slide_3",
        ".slide_4"
    ]
    let pos = 0;
    hideRest(pos);

    $('.left').on('click', (e) => {
        if (pos == 0) pos = targs.length - 1;
        else pos--;
        hideRest(pos);
    });

    $('.right').on('click', (e) => {
        if (pos == targs.length - 1) pos = 0;
        else pos++;
        hideRest(pos);
    });

    function hideRest(except) {
        for(let i=0; i<targs.length; i++) {
            if (i == except) {
                $(targs[i]).show();
            } else {
                $(targs[i]).hide();
            }
        }
    }
});