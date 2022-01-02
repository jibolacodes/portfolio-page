const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
const navBar = document.querySelector('#navbar');
const bars = document.querySelector('.bars');
const multiply = document.querySelector('.multiply')

navToggle.addEventListener('click', function () {
    navLinks.classList.toggle('show-links');
    navBar.classList.toggle('change-color')

    if (bars.classList.contains('hide') == false) {
        multiply.classList.remove('hide');
        bars.classList.add('hide');
    } else {
        multiply.classList.add('hide');
        bars.classList.remove('hide');
    }
});
