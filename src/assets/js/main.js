
(function ($) {
    "use strict";
    const $window = $(window);

    $window.on('load', function(){

        const $document = $(document);
        const $dom = $('html, body');
        const preLoader = $('#loading-area');
        const videoPlayBtn = $('.video-play-btn');

        /*========= Preloader =========*/
        $(preLoader).delay('500').fadeOut(2000);

        /*========= Scroll to top button =========*/
        var scrollToTopBtn = $('#scroll-top');

        $window.on('scroll', function(){
            // scroll to top button
            if ($window.scrollTop() > 300) {
                scrollToTopBtn.addClass('active');
            } else {
                scrollToTopBtn.removeClass('active');
            }
            // navbar fixed
            if ($(this).scrollTop() > 0) {
                $('.header-menu-area').addClass("fixed-top");
            }else{
                $('.header-menu-area').removeClass("fixed-top");
            }
        });

        scrollToTopBtn.on('click', function(e) {
            e.preventDefault();
            $($dom).animate({scrollTop:0}, '300');
        });

      

        /*=========== Magnific Popup ============*/
        if ($(videoPlayBtn).length) {
            $(videoPlayBtn).magnificPopup({
                type: 'video'
            });
        }

        /*==== Screenshot-slider =====*/
        var swiper = new Swiper('.screenshot-slider', {
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
                clickable: true,
            },
            autoplay: false,
            speed: 1000,
            effect: 'coverflow',
            loop: true,
            centeredSlides: true,
            slidesPerView: 'auto',
            coverflowEffect: {
                rotate: 0,
                stretch: 80,
                depth: 200,
                modifier: 1,
                slideShadows : false,
            }
        });

        /*==== Pricing table switcher =====*/
        if ($('#switch-toggle').length) {
            var toggleSwitch = $('#switch-toggle .switcher');
            var monthTabTitle = $('#switch-toggle li.month');
            var yearTabTitle = $('#switch-toggle li.year');
            var monthTabContent = $('#month');
            var yearTabContent = $('#year');
            // hidden show deafult;
            monthTabContent.show();
            yearTabContent.hide();

            function toggleHandle() {
                if (toggleSwitch.hasClass('on')) {
                    yearTabContent.hide();
                    monthTabContent.show();
                    monthTabTitle.addClass('active');
                    yearTabTitle.removeClass('active');
                } else {
                    monthTabContent.hide();
                    yearTabContent.show();
                    yearTabTitle.addClass('active');
                    monthTabTitle.removeClass('active');
                }
            }
            monthTabTitle.on('click', function () {
                toggleSwitch.addClass('on').removeClass('off');
                toggleHandle();
                return false;
            });
            yearTabTitle.on('click', function () {
                toggleSwitch.addClass('off').removeClass('on');
                toggleHandle();
                return false;
            });
            toggleSwitch.on('click', function () {
                toggleSwitch.toggleClass('on off');
                toggleHandle();
            });
        }

        /*===== Testimonial-slider ======*/
        var swiper = new Swiper('.testimonial-slider', {
            slidesPerView: 2,
            spaceBetween: 30,
            loop: true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            // Responsive breakpoints
            breakpoints: {
                // when window width is >= 320px
                320: {
                    slidesPerView: 1,
                    spaceBetween: 20
                },
                // when window width is >= 992px
                992: {
                    slidesPerView: 2,
                    spaceBetween: 20
                }
            }
        });

    });

    
    
})(jQuery);

//Date update
const footerDate  = document.getElementById('footer_date')

const newFooterDate = new Date()

const date = newFooterDate.getFullYear()

footerDate.innerHTML= date;

 /*==== Pricing table switcher =====*/
 if ($('#switch-toggle').length) {
    var toggleSwitch = $('#switch-toggle .switcher');
    var monthTabTitle = $('#switch-toggle li.month');
    var yearTabTitle = $('#switch-toggle li.year');
    var monthTabContent = $('#month');
    var yearTabContent = $('#year');
    // hidden show deafult;
    monthTabContent.show();
    yearTabContent.hide();

    function toggleHandle() {
        if (toggleSwitch.hasClass('on')) {
            yearTabContent.hide();
            monthTabContent.show();
            monthTabTitle.addClass('active');
            yearTabTitle.removeClass('active');
        } else {
            monthTabContent.hide();
            yearTabContent.show();
            yearTabTitle.addClass('active');
            monthTabTitle.removeClass('active');
        }
    }
    monthTabTitle.on('click', function () {
        toggleSwitch.addClass('on').removeClass('off');
        toggleHandle();
        return false;
    });
    yearTabTitle.on('click', function () {
        toggleSwitch.addClass('off').removeClass('on');
        toggleHandle();
        return false;
    });
    toggleSwitch.on('click', function () {
        toggleSwitch.toggleClass('on off');
        toggleHandle();
    });
}

