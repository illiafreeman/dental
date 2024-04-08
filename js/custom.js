


/*carousel*/
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
                slidesPerView: 2,
                spaceBetween: 20,
            },
        }
    });
}
if($('#sert-gal').length){
    var review = new Swiper('#sert-gal', {
        slidesPerView: 1.5,
        spaceBetween: 20,
        freeMode: true,
        autoHeight: true,
        navigation: {
            nextEl: '#sert-next',
            prevEl: '#sert-prev',
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
/*end carousel*/

/*fancybox*/
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
if($('#sert-gal a[data-fancybox]').length){
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
$('.menu__close').click(function () {
    $('.menu, .menu__2, .menu__3, .nav span, .menu__2 span').removeClass('vis');
    $('body').removeClass('oh');
    //$('.hamburger').toggleClass('open');
});
$('.nav span').click(function () {
    $('.menu__2').addClass('vis');
    $(this).addClass('vis');
});
$('.menu__2 span').click(function () {
    var level = $(this).data('menu');
    $('.menu__3, .menu__2 span').removeClass('vis');
    $('#menu_' + level).addClass('vis');
    $(this).addClass('vis');
});
/*end menu*/

/*animation on scroll*/
if($('.wow').length){
    new WOW().init();
}
/*end animation on scroll*/

/*menu*/
function modal() {
	var offset = window.innerWidth - document.body.offsetWidth ;
	$('body').addClass('oh').css({'padding-right': offset, 'transition': 'all 0.5s ease-in-out;'});
	$('.modal-bg').addClass('vis');
	$('.modal-wrap').addClass('vis');
	$('.modal[data-attr="modal_form"]').addClass('vis');
	$('.scrollTop.vis').css({'right': 30 + offset + 'px'});
	//console.log(offset);
}
$('.btn_modal').click(modal);
$(document).on('click','.modal__close, .modal-wrap',function(){
	var offset = window.innerWidth - document.body.offsetWidth;
	$('body').removeClass('oh').css({'padding-right': offset, 'transition': 'all 0.5s ease-in-out;'});
	$('.modal-bg').removeClass('vis');
	$('.modal-wrap').removeClass('vis');
	$('.modal').removeClass('vis');
	$('.scrollTop.vis').css({'right': 30 + offset + 'px'});
	$('.modal[data-attr="modal_review"] .modal__body .review__item-inner').remove();
	
});
$(document).on('click','.modal',function(e){
	e.stopPropagation();
	
});
$(document).keydown(function(event) { 
    if($('.modal-wrap').hasClass('vis')){
        if (event.keyCode == 27) { 
            var offset = window.innerWidth - document.body.offsetWidth;
            $('body').removeClass('oh').css({'padding-right': offset, 'transition': 'all 0.5s ease-in-out;'});
            $('.modal-bg').removeClass('vis');
            $('.modal-wrap').removeClass('vis');
            $('.modal').removeClass('vis');
            $('.scrollTop.vis').css({'right': 30 + offset + 'px'});
        }
    }
});
/*end menu*/

/*modal phone mask*/
$("#phone").mask("+7 (999) 999-99-99");
/*end modal phone mask*/






