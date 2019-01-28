$(document).ready(function () {


    $('#skillNav').on('click', 'p', function () {
        $('p').removeClass('active');
        $(this).addClass('active');
    });

    
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});