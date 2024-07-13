const getHeaderQuery = document.querySelector('.header');

window.onscroll = function () {
    let top = window.scrollY;

    if(top >= 200){
        getHeaderQuery.classList.add('active');
    } else{
        getHeaderQuery.classList.remove('active')
    }
};

