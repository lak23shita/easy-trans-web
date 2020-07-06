const reveal = [
    '#peek-a-boo-1',
    '#peek-a-boo-2'
]

const targets = [
    '#idea-bs',
    '#sol-desc'
]

/**
 * Toggles visiblity of descriptions
 * @param {Number} id Which item to handle
 */
function toggleVisiblity(id) {
    if ($(window).width() >= 768) return;
    const target = $(reveal[id]);

    if (target.hasClass('d-none')) {
        target.removeClass('d-none');
        target.addClass('d-sm-block');
    } else {
        target.removeClass('d-sm-block');
        target.addClass('d-none');
    }
}

$(document).ready(() => {
    targets.forEach((elem, ind) => {
        $(elem).on('click', (e) => {
            e.preventDefault();
            toggleVisiblity(ind);
        });
    });
})