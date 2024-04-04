


/*certificate carousel*/
if($('#stat-gal').length){
    var reviewGal = new Swiper('#stat-gal', {
        slidesPerView: 1.5,
        spaceBetween: 20,
        freeMode: true,
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
                slidesPerView: 3,
                spaceBetween: 30,
            },
        }
    });
}
if($('#star-gal').length){
    var review = new Swiper('#star-gal', {
        slidesPerView: 1.5,
        spaceBetween: 20,
        freeMode: true,
        navigation: {
            nextEl: '#star-next',
            prevEl: '#star-prev',
        },
        breakpoints: {
            480: {
                slidesPerView: 2.5,
                spaceBetween: 30,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 60,
            },
        }
    });
}
if($('#eq-gal').length){
    var review = new Swiper('#eq-gal', {
        slidesPerView: 1.5,
        spaceBetween: 20,
        freeMode: true,
        navigation: {
            nextEl: '#eq-next',
            prevEl: '#eq-prev',
        },
        pagination: {
            el: "#eq-pagination",
            clickable: true,
        },
        breakpoints: {
            480: {
                slidesPerView: 2.5,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
        }
    });
}
if($('#smi-gal').length){
    var review = new Swiper('#smi-gal', {
        slidesPerView: 1,
        freeMode: true,
        autoHeight: true,
        navigation: {
            nextEl: '#smi-next',
            prevEl: '#smi-prev',
        },
        pagination: {
            el: "#smi-pagination",
            clickable: true,
        },
        breakpoints: {
            480: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 1,
            },
        }
    });
}
if($('#promo-gal').length){
    var review = new Swiper('#promo-gal', {
        slidesPerView: 1.5,
        spaceBetween: 20,
        freeMode: true,
        navigation: {
            nextEl: '#promo-next',
            prevEl: '#promo-prev',
        },
        pagination: {
            el: "#promo-pagination",
            clickable: true,
        },
        breakpoints: {
            480: {
                slidesPerView: 2.5,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
        }
    });
}
if($('#videoreview').length){
    var review = new Swiper('#videoreview', {
        slidesPerView: 1.5,
        spaceBetween: 20,
        freeMode: true,
        navigation: {
            nextEl: '#videoreview-next',
            prevEl: '#videoreview-prev',
        },
        pagination: {
            el: "#videoreview-pagination",
            clickable: true,
        },
        breakpoints: {
            480: {
                slidesPerView: 2.5,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
        }
    });
}
if($('#textreview').length){
    var review = new Swiper('#textreview', {
        slidesPerView: 1.5,
        spaceBetween: 20,
        freeMode: true,
        navigation: {
            nextEl: '#textreview-next',
            prevEl: '#textreview-prev',
        },
        pagination: {
            el: "#textreview-pagination",
            clickable: true,
        },
        breakpoints: {
            480: {
                slidesPerView: 2.5,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
        }
    });
}
/*end certificate carousel*/

/*certificate increase size*/
if($('#star-gal a[data-fancybox]').length){
    Fancybox.bind('#star-gal [data-fancybox]', {
        Thumbs: {
            type: 'classic',
        },
    });
}
if($('#smi-gal a[data-fancybox]').length){
    Fancybox.bind('#smi-gal [data-fancybox]', {
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











