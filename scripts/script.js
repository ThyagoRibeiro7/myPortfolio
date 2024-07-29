const getHeaderQuery = document.querySelector('.header');

window.addEventListener('scroll', () => {
    let top = window.scrollY;

    if (top >= 200) {
        getHeaderQuery.classList.add('active');
    } else {
        getHeaderQuery.classList.remove('active')
    }
});