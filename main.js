// This JavaScript code will change the color of the header when the user scrolls down the page.

window.onscroll = function() {
    if (window.scrollY > 200) {
        document.querySelector("header").style.backgroundColor = "#fff";
    } else {
        document.querySelector("header").style.backgroundColor = "#000";
    }
};