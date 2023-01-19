services1.onmouseover = function() {
    let dropMenu = document.querySelector('.drop-menu');
    dropMenu.classList.remove('hidden');
    dropMenu.classList.add('visible');
};

services1.onmouseout = function() {
    let dropMenu = document.querySelector('.drop-menu');
    dropMenu.classList.remove('visible');
    dropMenu.classList.add('hidden');
};

services2.onmouseover = function() {
    let dropMenu = document.querySelector('.drop-menu2');
    dropMenu.classList.remove('hidden');
    dropMenu.classList.add('visible');
};

services2.onmouseout = function() {
    let dropMenu = document.querySelector('.drop-menu2');
    dropMenu.classList.remove('visible');
    dropMenu.classList.add('hidden');
};


$(document).ready(function() {
    $('.slider').slick({
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: true,
        dotsClass: 'dots-style',
        appendArrows: $('.but-arrows'),
        responsive: [
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: false,
                dots: true
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: false,
                dots: true
              }
            }
          ]
    });


    let totalSlides = $('li[role]').length;
    if (totalSlides < 10) {
        $('#total-slides').text('/0' + totalSlides);
    } else {
        $('#total-slides').text(totalSlides);
    };

    let curSlide = 1;
    let refreshSlide = function(currentSlide) {
        if (currentSlide < 10) {
            $('#cur-slide').text('0' + currentSlide + ' ');
        } else {
            $('#cur-slide').text(currentSlide + ' ');
        }
        
    };
    refreshSlide(curSlide);

    let refDelay = function() {
        $('.slick-prev').toggleClass('but-dis');
        $('.slick-next').toggleClass('but-dis');
    };
 

    $('.slick-prev').click( function () {
        curSlide-=1;
        setTimeout(refreshSlide, 450, curSlide);
        refDelay();
        setTimeout(refDelay, 550);
    });



    $('.slick-next').click( function () {
        curSlide+=1;
        setTimeout(refreshSlide, 450, curSlide);
        refDelay();
        setTimeout(refDelay, 550);
    });


    
});