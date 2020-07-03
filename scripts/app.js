// Hello World Testing

console.log('YOOOOOOOO.');


// DOM Elements

const themeButton = document.getElementById('theme-toggle');
const darkIcon = document.getElementById('t-dark');
const lightIcon = document.getElementById('t-light');
const body = document.body;
let ct = 'light';


// Apply the cached theme on reload

const theme = localStorage.getItem('theme');

if (theme) {
    body.classList.add(theme);
    if (theme != ct) {
        ct = theme;
    }
}

setTheme(); 

// Button Event Handlers for theme setting

themeButton.onclick = () => {
    if (ct == 'light') {
        body.classList.replace('light', 'dark');
        localStorage.setItem('theme', 'dark');
        ct = 'dark';
    } else {
        body.classList.replace('dark', 'light');
        localStorage.setItem('theme', 'light');
        ct = 'light'
    }
    setTheme();
}

function setTheme() {
    if (ct == 'light') {
        lightIcon.style.display = 'block';
        darkIcon.style.display = 'none';
    } else {
        darkIcon.style.display = 'block';
        lightIcon.style.display = 'none';
    }
}