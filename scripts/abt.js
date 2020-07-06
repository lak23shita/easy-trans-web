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
        removeOpener(id);
    } else {
        target.removeClass('d-sm-block');
        target.addClass('d-none');
        addOpener(id);
    }
}

function addOpener(id) {
    const item = $(targets[id]);
    const data = item.text();
    item.html(data + '<i class="fas fa-plus"></i>')
    item.css('display', 'grid');
    item.css('grid-template-columns', '3fr 1fr');
    $(targets[id] + ' i').css('padding-top', '5px');
}

function removeOpener(id) {
    const item = $(targets[id]);
    const data = item.text();
    item.html(data.replace('<i class="fas fa-plus"></i>', '').trim());
    item.html(data + '<i class="fas fa-minus"></i>');
    $(targets[id] + ' i').css('padding-top', '5px');
}

$(document).ready(() => {
    if ($(window).width() < 768) {
        addOpener(0);
        addOpener(1);
    }

    targets.forEach((elem, ind) => {
        $(elem).on('click', (e) => {
            e.preventDefault();
            toggleVisiblity(ind);
        });
    });
})