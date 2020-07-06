// Hello World Testing

console.log('YOOOOOOOO.');


// DOM Elements

/**
 * Move down with ease
 */
$('#down').click(() => {
    setTimeout(scrollToElement($('#sh')), 100);
});

/**
 * Animates to a specific region of page
 * @param {Object} ele Jquery element to manipulate 
 */
function scrollToElement(ele) {
    $([document.documentElement, document.body]).animate({
        scrollTop: ele.offset().top - 100,
        scrollLeft: ele.offset().left - 20,
    }, 1000);
}