


/*certificate carousel*/
if($('.stat-gal').length){
    var reviewGal = new Swiper('.stat-gal', {
        slidesPerView: 1.5,
        spaceBetween: 20,
        freeMode: true,
        //loop: true,
        navigation: true,
        navigation: {
            nextEl: '#stat-next',
            prevEl: '#stat-prev',
        },
        pagination: {
            el: "#stat-pagination",
            clickable: true,
        },
        breakpoints: {
            480: {
                slidesPerView: 2.5,
                spaceBetween: 30,
            },
            768: {
                slidesPerView: 4,
                spaceBetween: 30,
            },
        }
    });
}
if($('.star-gal').length){
    var review = new Swiper('.star-gal', {
        slidesPerView: 1.5,
        spaceBetween: 20,
        freeMode: true,
        //loop: true,
        navigation: true,
        /* navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }, */
        /* pagination: {
            el: ".swiper-pagination",
            clickable: true,
        }, */
        breakpoints: {
            480: {
                slidesPerView: 2.5,
                spaceBetween: 30,
            },
            768: {
                slidesPerView: 4,
                spaceBetween: 30,
            },
        }
    });
}
/*end certificate carousel*/

/*certificate increase size*/
if($('[data-fancybox]').length){
    Fancybox.bind('[data-fancybox]', {
        compact: false,
        idle: false,
        animated: false,
        showClass: false,
        hideClass: false,
        dragToClose: false,
        contentClick: false,
        Images: {
            zoom: false,
        },
        Toolbar: {
            display: {
                left: [],
                middle: ['infobar'],
                right: ['close'],
            },
        },
        Thumbs: {
            type: 'classic',
        },
    });
}
/*end certificate increase size*/



/*fixed header*/
$(window).scroll(function () {
    if ($(window).scrollTop() >= 1) {
        $('.header').addClass('fixed');
    }
    else {
        $('.header').removeClass('fixed');
    }
});
/*end fixed header*/



/*mobile header btns*/
$('.header__menu-btn').click(function () {
    $('.header__nav-wrap').toggleClass('vis');
    $('body').toggleClass('oh open-menu');
    $('.hamburger').toggleClass('open');
    $('.header__tel').removeClass('vis');
});
$('.header__nav > .parent > button').click(function () {
    $(this).parent().hasClass('vis') ? $(this).parent().removeClass('vis') : $(this).parent().addClass('vis');
    $(this).parent().find('.parent').removeClass('vis');
});
$('.header__nav .parent ul li.parent button').click(function () {
    $(this).parent().hasClass('vis') ? $(this).parent().removeClass('vis') : $(this).parent().addClass('vis');
});
$('.header__tel-btn').click(function () {
    $('.header__tel').toggleClass('vis');
});
/*end mobile header btns*/



/*animation on scroll*/
if($('.wow').length){
    new WOW().init();
}
/*end animation on scroll*/











