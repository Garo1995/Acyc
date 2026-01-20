$(document).ready(function () {
    $(".phone").mask('+7 (999)-999-99-99');
});

$(document).ready(function () {
    setTimeout(function () {
        $(".animate-site").addClass("in-viewport");
    }, 500);
});

$(document).ready(function () {
    window.onscroll = function () {
        myFunction();
    };
    let nav = document.querySelector("header");
    let prt = nav.parentElement;
    let sticky = nav.offsetTop + 1;

    function myFunction() {
        let wdth = window.innerWidth
        if (wdth < 257) {
            if (window.pageYOffset > sticky) {
                nav.classList.add("sticky");
            } else {
                nav.classList.remove("sticky");
            }
        } else {
            if (window.pageYOffset > sticky) {
                nav.classList.add("sticky");
            } else {
                nav.classList.remove("sticky");
            }
        }
    }
});

$(document).ready(function () {
    let time = 0;
    $('.open-menu').on('click', function () {
        $(this).toggleClass('close-menu');
        if ($(this).hasClass('close-menu')) {
            $('.menu-cnt').addClass('transition-menu');
            $('.menu-header-mobile').css({'height': '100%', transition: '0.3s'});
            $('body').addClass('body_fix');
        } else {
            $('.menu-cnt').addClass('menu-width');
            $('body').removeClass('body_fix');
            $('.menu-cnt').removeClass('transition-menu');
            time = 0;
        }
    });
    $('.for-mobile-bg').on('click', function () {
        if ($('.open-menu').hasClass('close-menu')) {
            $('.open-menu').removeClass('close-menu')
        }
        $('.menu-cnt').removeClass('transition-menu');
        $('.menu-cnt').css({height: '0%!important'});
        $('body').removeClass('body_fix');
        time = 0;
    })
    $('.header__menu ul li a').on('click', function () {
        if ($('.open-menu').hasClass('close-menu')) {
            $('.open-menu').removeClass('close-menu')
        }
        $('.menu-cnt').removeClass('transition-menu');
        $('.menu-cnt').css({height: '0%!important'});
        $('body').removeClass('body_fix');
        time = 0;
    })
});


$('.header__menu ul li a').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
        && location.hostname == this.hostname) {
        var $target = $(this.hash);
        $target = $target.length && $target
            || $('[name=' + this.hash.slice(1) +']');
        if ($target.length) {
            var targetOffset = $target.offset().top-110;
            $('html,body')
                .animate({scrollTop: targetOffset}, 1000);
            return false;
        }
    }
});


$(document).ready(function () {
    $(".scroller").click(function () {
        var aid = $(this).attr("href");
        $('html,body').animate({ scrollTop: $(aid).offset().top + 20 }, 'slow');
    });
});

let projectSwiper = new Swiper(".project__slid", {
    slidesPerView: 1,
    slidesPerGroup: 1,
    loop: true,
    autoplay: {
        speed: 4000,
    },
});

let collecSwiper = new Swiper(".collec__slider", {
    slidesPerView: 1,
    slidesPerGroup: 1,
    loop: true,
    navigation: {
        nextEl: ".collec-button-next",
        prevEl: ".collec-button-prev",
    },
});



let productSwiper = new Swiper(".product__slider", {
    slidesPerView: 3,
    slidesPerGroup: 1,
    loop: true,
    spaceBetween: 16,
    breakpoints: {
        '1030': {
            slidesPerView: 3,
            slidesPerGroup: 1,
            spaceBetween: 10,

        },
        '992': {
            slidesPerView: 3,
            slidesPerGroup: 1,
        },
        '760': {
            slidesPerView: 2,
            slidesPerGroup: 1,
        },
        '300': {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 5,

        },
    },
    navigation: {
        nextEl: ".product-button-next",
        prevEl: ".product-button-prev",
    },
    pagination: {
        el: ".product-pagination",
        clickable: true,
    },
});



$(function () {
    let Accordion = function (el, multiple) {
        this.el = el || {};
        this.multiple = multiple || false;
        let links = this.el.find('.link');
        links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
    };
    Accordion.prototype.dropdown = function (e) {
        let $el = e.data.el;
        $this = $(this),
            $next = $this.next();
        $next.slideToggle();
        if (!e.data.multiple) {
            $el.find('.submenu').not($next).slideUp();
        }
        if (!$this.hasClass('open')) {
            $('.link').each(function () {
                $(this).removeClass('open')
            })
            $this.addClass('open')
        } else {
            $this.removeClass('open')
        }
    }
    let accordion = new Accordion($('#accordion'), false);
});

$('.collection__box').on('click', function () {
    $('.collection__box').removeClass('collection__act');
    $(this).addClass('collection__act')
});



$('.open_modal').on('click', function () {
    var attr = $(this).attr('data-val');
    var modal = $('#' + attr);
    modal.removeClass('out');
    modal.fadeIn();

});

$('.close').on('click', function () {
    var prt = $(this).parents('.modal');
    prt.addClass('out')
    setTimeout(function () {
        prt.fadeOut();
    }, 100);
});

$(window).on('click', function (event) {
    $('.modal').each(function () {
        var gtattr = $(this).attr('id');
        var new_mod = $('#' + gtattr);
        var md_cnt = $(new_mod).find('.modal-content');

        if (event.target === $(md_cnt)[0]) {
            setTimeout(function () {
                $(new_mod).addClass('out');
                $(new_mod).fadeOut()

            }, 100)
        }
        if (event.target === this) {
            setTimeout(function () {
                $(new_mod).addClass('out');
                $(new_mod).fadeOut()

            }, 100)

        }
    })
});





let constSwiper = new Swiper(".const__slider", {
    slidesPerView: 4,
    slidesPerGroup: 1,
    spaceBetween: 16,
    breakpoints: {
        '1199': {
            slidesPerView: 4,
            slidesPerGroup: 1,
        },
        '900': {
            slidesPerView: 4,
            slidesPerGroup: 1,
            spaceBetween: 10,

        },
        '570': {
            slidesPerView: 2,
            slidesPerGroup: 1,
            spaceBetween: 16,

        },
        '300': {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 5,


        },
    },
    navigation: {
        nextEl: ".const-button-next",
        prevEl: ".const-button-prev",
    },
    pagination: {
        el: ".const-pagination",
        clickable: true,
    },
});








$(window).scroll(function () {
    let $elemAdvantages = $('#product__main');
    let $window = $(window);

    let docViewTop = $window.scrollTop();
    let docViewBottom = docViewTop + $window.height();

    let elemTop = $elemAdvantages.offset().top;
    let elemBottom = elemTop + $elemAdvantages.height();

    if (elemTop + $elemAdvantages.height()  < docViewBottom && docViewBottom < elemBottom + $elemAdvantages.height()) {
        $(".product__box").addClass("in-viewport");
    } else {
        $(".product__box").removeClass("in-viewport");
    }
});