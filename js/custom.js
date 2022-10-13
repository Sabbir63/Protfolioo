$(function () {

    /*========= typed =========*/
    var typed = new Typed('.type', {

        strings: ['Sabbir Hossain.',
                  'A web designer.',

        ],
        typeSpeed: 100,
        backSpeed: 100,
        loop: true,

    });  
    /*========= typed =========*/
    var typed = new Typed('.title', {

        strings: ['Full Stack Developer.',

        ],
        typeSpeed: 100,
        backSpeed: 100,
        loop: true,

    });

    /*========= aos animeted =========*/
    AOS.init({
        duration: 1200,
        delay: 200
    });

    /*--====== Progress Bar ======--*/
    $(window).on('scroll', function () {
        $(".skills-progress span").each(function () {
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            var myVal = $(this).attr('data-value');
            if (bottom_of_window > bottom_of_object) {
                $(this).css({
                    width: myVal
                });
            }
        });
    });
    /*==========================================================================================
    	
    ============================================================================================*/
    $(function () {

        /*===== NAVBAR =====*/
        $(window).on('scroll', function () {
            if ($(window).scrollTop()) {
                $('.navbar').addClass('black');
            } else {
                $('.navbar').removeClass('black');
            }
        });

        /*===== NAVBAR COLORMENU =====*/

        $(window).on('scroll', function () {
            if ($(window).scrollTop()) {
                $('.color_menu').addClass('black');
            } else {
                $('.color_menu').removeClass('black');
            }
        });

        /*===== navbar mobile view =====*/

        $('.navbar-toggler').click(function () {
            $('.navbar').toggleClass('click_nav');
        });

        /*===== Dark Theme =====*/

        var icon = document.getElementById("icon");

        icon.onclick = function () {
            document.body.classList.toggle("dark-theme");
            if (document.body.classList.contains("dark-theme")) {
                icon.src = "images/n1591757.png";
            } else {
                icon.src = "images/moon.png";
            }
        };

        /*===== VENOBOX =====*/

        $('.venobox').venobox();

        /*========= swiper =========*/

//        var swiper = new Swiper('.swiper-container', {
//            pagination: {
//                el: '.swiper-pagination',
//            },
//
//        });

        /*===== BACK TO TOP =====*/

        $(window).on('scroll', function (event) {
            if ($(this).scrollTop() > 200) {
                $('.back-to-top').fadeIn(100)
            } else {
                $('.back-to-top').fadeOut(100)
            }
        });

        /*========= back to top =========*/
        $('.back-to-top').on('click', function (event) {
            event.preventDefault();

            $('html, body').animate({
                scrollTop: 0,
            }, 400);
        });



        $('.colors').each(function () {
            $(this).click(function () {
                let color = $(this).attr('data-color');
                document.documentElement.style.setProperty('--color', color);
            })
        });


    });

});