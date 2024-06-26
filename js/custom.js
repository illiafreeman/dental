


/*carousel*/
if ($('#stat-gal').length) {
    var reviewGal = new Swiper('#stat-gal', {
        slidesPerView: 1.5,
        spaceBetween: 12,
        freeMode: true,
        pagination: {
            el: "#stat-pagination",
            clickable: true,
        },
        breakpoints: {
            480: {
                slidesPerView: 2.5,
            },
            768: {
                slidesPerView: 2.5,
            },
            1025: {
                slidesPerView: 3,
                spaceBetween: 30,
                navigation: {
                    nextEl: '#stat-next',
                    prevEl: '#stat-prev',
                },
            },
        }
    });
}
if ($('#star-gal').length) {
    var review = new Swiper('#star-gal', {
        slidesPerView: 1.1,
        spaceBetween: 0,
        freeMode: true,
        navigation: {
            nextEl: '#star-next',
            prevEl: '#star-prev',
        },
        pagination: {
            el: "#star-pagination",
            clickable: true,
        },
        breakpoints: {
            480: {
                slidesPerView: 2.5,
            },
            768: {
                slidesPerView: 2.5,
            },
            1025: {
                slidesPerView: 3,
                spaceBetween: 10,
            },
            1281: {
                slidesPerView: 3,
                spaceBetween: 60,
            },
        }
    });
}
if ($('#eq-gal').length) {
    var review = new Swiper('#eq-gal', {
        slidesPerView: 1.1,
        spaceBetween: 12,
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
                slidesPerView: 1.5,
            },
            768: {
                slidesPerView: 2.5,
            },
            1025: {
                slidesPerView: 3,
                spaceBetween: 20,
            },

        }
    });
}
if ($('#smi-gal').length) {
    var review = new Swiper('#smi-gal', {
        slidesPerView: 1.2,
        spaceBetween: 60,
        navigation: {
            nextEl: '#smi-next',
            prevEl: '#smi-prev',
        },
        pagination: {
            el: "#smi-pagination",
            clickable: true,
        },
        breakpoints: {
            600: {
                slidesPerView: 1,
                autoHeight: true,
            },
        }
    });
}
if ($('#promo-gal').length) {
    var review = new Swiper('#promo-gal', {
        slidesPerView: 1.1,
        spaceBetween: 12,
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
            },
            768: {
                slidesPerView: 2.5,
            },
            1025: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
        }
    });
}
if ($('#videoreview').length) {
    var review = new Swiper('#videoreview', {
        slidesPerView: 1.1,
        spaceBetween: 12,
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
            },
            768: {
                slidesPerView: 2.5,
            },
            1025: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
        }
    });
}
if ($('#textreview').length) {
    var review = new Swiper('#textreview', {
        slidesPerView: 1.1,
        spaceBetween: 12,
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
                slidesPerView: 1.5,
            },
            768: {
                slidesPerView: 2.5,
            },
            1025: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
        }
    });
}
if ($('#sert-gal').length) {
    var review = new Swiper('#sert-gal', {
        slidesPerView: 1.1,
        spaceBetween: 12,
        freeMode: true,
        autoHeight: true,
        pagination: {
            el: "#sert-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: '#sert-next',
            prevEl: '#sert-prev',
        },
        breakpoints: {
            480: {
                slidesPerView: 2.5,
            },
            768: {
                slidesPerView: 2.5,
            },
            1025: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
        }
    });
}
if ($('#fear-gal').length) {
    var fear = null;
    function initSwiper() {
        if (window.innerWidth <= 1024) {
            fear = new Swiper('#fear-gal', {
                slidesPerView: 1.1,
                spaceBetween: 12,
                pagination: {
                    el: "#fear-pagination",
                    clickable: true,
                },
                breakpoints: {
                    480: {
                        slidesPerView: 1.5,
                    },
                    768: {
                        slidesPerView: 2.5,
                    },
                }
            });
        } else {
            if (fear) {
                fear.destroy();
            }
        }
    }
    var timer;
    window.addEventListener('resize', function () {
        if (timer) {
            clearTimeout(timer);
        }
    
        timer = setTimeout(initSwiper, 200);
    });
    initSwiper();
}



/*end carousel*/

/*fancybox*/
if ($('#star-gal a[data-fancybox]').length) {
    Fancybox.bind('#star-gal [data-fancybox]', {
        Thumbs: {
            type: 'classic',
        },
    });
}
if ($('#smi-gal a[data-fancybox]').length) {
    Fancybox.bind('#smi-gal [data-fancybox]', {
        Thumbs: {
            type: 'classic',
        },
    });
}
if ($('#sert-gal a[data-fancybox]').length) {
    Fancybox.bind('#sert-gal [data-fancybox]', {
        Thumbs: {
            type: 'classic',
        },
    });
}
/*end fancyboxe*/

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

/*menu*/
$('.header__menu-btn').click(function () {
    $('.menu').addClass('vis');
    $('body').addClass('oh');
    //$('.hamburger').toggleClass('open');
});
$('.menu__close, .menu__levelclose').click(function () {
    $('.menu, .menu__2, .menu__3, .nav span, .menu__2 span, .menu__levelwrap').removeClass('vis');
    $('body').removeClass('oh');
    //$('.hamburger').toggleClass('open');
});
$('.nav span').click(function () {
    $('.menu__2').parent().addClass('vis');
    $('.menu__2').addClass('vis');
    $(this).addClass('vis');
});
$('.menu__2 span').click(function () {
    var level = $(this).data('menu');
    $('.menu__3, .menu__2 span').removeClass('vis');
    $('#menu_' + level).parent().addClass('vis');
    $('#menu_' + level).addClass('vis');
    $(this).addClass('vis');
});
$('.menu__back').click(function () {
    $(this).parents('.menu__levelwrap').removeClass('vis');
    $(this).parents().find('span.vis').removeClass('vis');
});
/*end menu*/

/*animation on scroll*/
if ($('.wow').length) {
    new WOW().init();
}
/*end animation on scroll*/

/*modal*/
function modal() {
    var offset = window.innerWidth - document.body.offsetWidth;
    $('body').addClass('oh').css({ 'padding-right': offset, 'transition': 'all 0.5s ease-in-out;' });
    $('.modal-bg').addClass('vis');
    $('.modal-wrap').addClass('vis');
    $('.modal[data-attr="modal_form"]').addClass('vis');
    $('.scrollTop.vis').css({ 'right': 30 + offset + 'px' });
    //console.log(offset);
}
$('.btn_modal').click(modal);
$(document).on('click', '.modal__close, .modal-wrap', function () {
    var offset = window.innerWidth - document.body.offsetWidth;
    $('body').removeClass('oh').css({ 'padding-right': offset, 'transition': 'all 0.5s ease-in-out;' });
    $('.modal-bg').removeClass('vis');
    $('.modal-wrap').removeClass('vis');
    $('.modal').removeClass('vis');
    $('.scrollTop.vis').css({ 'right': 30 + offset + 'px' });
    $('.modal[data-attr="modal_review"] .modal__body .review__item-inner').remove();

});
$(document).on('click', '.modal', function (e) {
    e.stopPropagation();

});
$(document).keydown(function (event) {
    if ($('.modal-wrap').hasClass('vis')) {
        if (event.keyCode == 27) {
            var offset = window.innerWidth - document.body.offsetWidth;
            $('body').removeClass('oh').css({ 'padding-right': offset, 'transition': 'all 0.5s ease-in-out;' });
            $('.modal-bg').removeClass('vis');
            $('.modal-wrap').removeClass('vis');
            $('.modal').removeClass('vis');
            $('.scrollTop.vis').css({ 'right': 30 + offset + 'px' });
        }
    }
});
/*end modal*/

/*modal review*/
$(document).on('click','.review-text .swiper-slide',function(){
	var qw = $(this).html();
	$('.modal[data-attr="modal_review"] .modal__body').prepend(qw);
	var offset = window.innerWidth - document.body.offsetWidth ;
	$('body').addClass('oh').css({'padding-right': offset, 'transition': 'all 0.5s ease-in-out;'});
	$('.modal-bg').addClass('vis');
	$('.modal-wrap').addClass('vis');
	$('.modal[data-attr="modal_review"]').addClass('vis');
	$('.scrollTop.vis').css({'right': 30 + offset + 'px'});
});
/*end modal review*/

/*phone mask*/
$("#phone").mask("+7 (999) 999-99-99");
/*end phone mask*/

/*scrolltop*/
var scrollTop = $(".scrollTop");
$(window).scroll(function () {
	var topPos = $(this).scrollTop();
	if (topPos > 500) {
		$(scrollTop).addClass('vis');
	} else {
		$(scrollTop).removeClass('vis');
	}
});
$(scrollTop).click(function () {
	$('html, body').animate({
		scrollTop: 0
	}, 800);
	return false;
});
/*end scrolltop*/

/*header*/
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('header').outerHeight();
$(window).scroll(function(event){
    didScroll = true;
});
setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);
function hasScrolled() {
    var st = $(this).scrollTop();
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    if (st > lastScrollTop && st > navbarHeight){
        $('header').removeClass('vis').addClass('unvis');
    } else {
        if(st + $(window).height() < $(document).height()) {
            $('header').removeClass('unvis').addClass('vis');
        }
    }
    lastScrollTop = st;
}
/*end header*/
