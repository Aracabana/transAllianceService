$(document).ready(function () {
    var windowW;
    $(window).resize(function () {
        windowW = $(window).width();
        if (windowW >= 768) {
            $('#js-menu-btn').removeClass('open');
            $('#js-menu').removeAttr('style');
            $('.js-submenu-btn').removeClass('open');
            $('.js-submenu').removeAttr('style');
        }
    });
    $(window).trigger('resize');
   
    //scroll menu
    var menu = $('#js-menu-wrapper');
    var menuTop = menu.offset().top;
    $(window).scroll(function () {
        fixMenu();
    });
    fixMenu();
    function fixMenu() {
        if ($(window).scrollTop() >= menuTop) {
            menu.addClass('fixed');
        } else {
            menu.removeClass('fixed');
        }
    }
    
    //scroll to services
    var links = $('.js-link');
    links.click(function(e) {
        e.preventDefault();
        var link = $(this),
            linkHref = link.attr('href'),
            top = $(linkHref).offset().top;
        links.removeClass('active');
        link.addClass('active');
        $('body,html').animate({scrollTop: top}, 900);
    });
    
    //mobile menu
    $('#js-menu-btn').click(function (e) {
        e.preventDefault();
        $(this).toggleClass('open');
        $('#js-menu').slideToggle();
    });
    $('.js-submenu-btn').click(function (e) {
        e.preventDefault();
        $(this).toggleClass('open');
        $(this).next('.js-submenu').slideToggle();
    });
   
    //welcome-slider
    if ($('*').is('#js-welcome-slider')) {
        let swiper = new Swiper('#js-welcome-slider', {
            slidesPerView: 1,
            effect: 'flip',
            loop: true,
            speed: 400,
            autoplay: {
                delay: 5000,
            },
            navigation: {
                nextEl: '.swiper-button.swiper-button-next',
                prevEl: '.swiper-button.swiper-button-prev'
            },
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
            }
        });
    }
    //review-slider
    if ($('*').is('.js-reviews-slider')) {
        let swiper = new Swiper('.js-reviews-slider', {
            slidesPerView: 1,
            spaceBetween: 0,
            loop: true,
            speed: 400,
            autoplay: {
                delay: 5000,
            },
            navigation: {
                nextEl: '.swiper-button.swiper-button-next',
                prevEl: '.swiper-button.swiper-button-prev'
            },
            breakpoints: {
                451: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
                1200: {
                    slidesPerView: 4,
                    spaceBetween: 30,
                },
            }
        });
    }
    
    //product-slider
    if ($('*').is('.product-slider-big')) {
        var galleryThumbs = new Swiper('.product-slider-small', {
            spaceBetween: 10,
            slidesPerView: 2,
            loop: true,
            navigation: {
                nextEl: '.swiper-button.swiper-button-next',
                prevEl: '.swiper-button.swiper-button-prev'
            },
            breakpoints: {
                451: {
                    slidesPerView: 3
                }
            }
        });
        var galleryTop = new Swiper('.product-slider-big', {
            loop: true,
            thumbs: {
                swiper: galleryThumbs,
            },
        });
    }
    
});
