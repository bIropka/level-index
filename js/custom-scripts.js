$(document).ready(function () {

    /******************************
     ****** scroll scripts ********
     ******************************/

    if ($(window).scrollTop() < $('#solutions').offset().top - 200) {
        $('nav ul li.active').removeClass('active');
        $('nav ul li:nth-child(1)').addClass('active');
    }
    else if ($(window).scrollTop() < $('#steps').offset().top - 200) {
        $('nav ul li.active').removeClass('active');
        $('nav ul li:nth-child(2)').addClass('active');
    }
    else if ($(window).scrollTop() < $('#offers').offset().top - 200) {
        $('nav ul li.active').removeClass('active');
        $('nav ul li:nth-child(3)').addClass('active');
    }
    else if ($(window).scrollTop() < $('#statistics').offset().top - 200) {
        $('nav ul li.active').removeClass('active');
        $('nav ul li:nth-child(4)').addClass('active');
    }
    else if ($(window).scrollTop() < $('#reviews').offset().top - 200) {
        $('nav ul li.active').removeClass('active');
        $('nav ul li:nth-child(5)').addClass('active');
    }
    else if ($(window).scrollTop() < $('#contacts').offset().top - 300) {
        $('nav ul li.active').removeClass('active');
        $('nav ul li:nth-child(6)').addClass('active');
    } else {
        $('nav ul li.active').removeClass('active');
        $('nav ul li:nth-child(7)').addClass('active');
    }

    $(window).scroll(function() {

        if ($(window).scrollTop() < $('#solutions').offset().top - 200) {
            $('nav ul li.active').removeClass('active');
            $('nav ul li:nth-child(1)').addClass('active');
        }
        else if ($(window).scrollTop() < $('#steps').offset().top - 200) {
            $('nav ul li.active').removeClass('active');
            $('nav ul li:nth-child(2)').addClass('active');
        }
        else if ($(window).scrollTop() < $('#offers').offset().top - 200) {
            $('nav ul li.active').removeClass('active');
            $('nav ul li:nth-child(3)').addClass('active');
        }
        else if ($(window).scrollTop() < $('#statistics').offset().top - 200) {
            $('nav ul li.active').removeClass('active');
            $('nav ul li:nth-child(4)').addClass('active');
        }
        else if ($(window).scrollTop() < $('#reviews').offset().top - 200) {
            $('nav ul li.active').removeClass('active');
            $('nav ul li:nth-child(5)').addClass('active');
        }
        else if ($(window).scrollTop() < $('#contacts').offset().top - 300) {
            $('nav ul li.active').removeClass('active');
            $('nav ul li:nth-child(6)').addClass('active');
        } else {
            $('nav ul li.active').removeClass('active');
            $('nav ul li:nth-child(7)').addClass('active');
        }


    });

    $('a[href^="#"]').click(function(){
        $('nav ul li a').removeClass('active');
        $(this).addClass('active');
        if ($(window).width() < '981'){
            $('.burger').removeClass('active');
        }
        var target = $(this).attr('href');
        $('html, body').animate({scrollTop: $(target).offset().top - 100}, 600);
        return false;
    });

    /*******************************
     ******* other scripts *********
     ******************************/
    $('.burger').click(function() {
        $(this).toggleClass('active');
        $(this).siblings('ul').slideToggle();
    });

    /*******************************
     ******* forms scripts *********
     ******************************/

    $(function($) {
        $('form').validatr({
            showall: true,
            valid: function() {
                // Получение ID формы
                var formID = $(this).attr('id');
                // Добавление решётки к имени ID
                var formNm = $('#' + formID);
                var scriptFile;
                if (formID == 'form-order-1' || formID == 'form-order-2'|| formID == 'form-order-3') scriptFile = 'mail-order.php';
                if (formID == 'form-callback') scriptFile = 'mail-callback.php';
                if (formID == 'form-write-us') scriptFile = 'mail-write-us.php';
                $.ajax({
                    type: "POST",
                    url: scriptFile,
                    data: formNm.serialize(),
                    success: function (data) {
                        $('.window-order').fadeOut();
                        $('.window-successful').fadeIn();
                    },
                    error: function (data) {
                        $('.window-order').fadeOut();
                        $('.window-error').fadeIn();
                    }
                });
                return false;
            }
        });
    });

    $('button[type="submit"]').click(function() {
        $(this).parents('form').find('.form-field:invalid').addClass('invalid-field');
        $(this).parents('form').find('.no-checked').removeClass('invalid-field');
    });

    /******************************
     ******* other scripts ********
     ******************************/

    $('.callback p').click(function () {
        $('.window-callback').fadeIn();
    });
    $('.window-callback').click(function (event) {
        $target = $(event.target);
        if (!$target.closest($('#form-callback')).length) $('.window-callback').fadeOut();
        if ($target.hasClass('close-marker')) $('.window-callback').fadeOut();
    });

    $('.write-us p').click(function () {
        $('.window-write-us').fadeIn();
    });
    $('.window-write-us').click(function (event) {
        $target = $(event.target);
        if (!$target.closest($('#form-write-us')).length) $('.window-write-us').fadeOut();
        if ($target.hasClass('close-marker')) $('.window-write-us').fadeOut();
    });
    
    $('.window-successful').click(function (event) {
        $target = $(event.target);
        if (!$target.closest($('.message-successful')).length) $('.window-successful').fadeOut();
    });
    $('.message-successful button').click(function() {
        $('.window-successful').fadeOut();
        $('.window-callback').fadeOut();

    });
    $('.window-error').click(function (event) {
        $target = $(event.target);
        if (!$target.closest($('.message-error')).length) $('.window-error').fadeOut();
    });
    $('.message-error button').click(function() {
        $('.window-error').fadeOut();
        $('.window-callback').fadeOut();
    });

    $('textarea').on('focus', function() {
        $(this).removeClass('valid-field invalid-field');
    });
    $('input').on('focus', function() {
        $(this).removeClass('valid-field invalid-field');
    });
    $('input[type="checkbox"]').on('change', function() {
        $(this).removeClass('valid-field invalid-field');
    });

});


/*******************************
 ******* counter  script *******
 ******************************/

$(document).ready(function () {

    var dateForCounter = getDateForCounter();

    var timer = $('.timer').FlipClock(3600, {

        clockFace: 'DailyCounter',
        countdown: true,
        language: 'ru'
    });
    timer.setTime(dateForCounter);


    function getDateForCounter() {

        var date = + new Date();
        date = parseInt(date / 86400000);
        var daysFromStart = date % 5;

        var currentDate = new Date();
        var currentDay = currentDate.getDate();

        if (daysFromStart === 0) {
            currentDay += 1;
        } else {
            currentDay += 5 - daysFromStart;
        }
        currentDate.setDate(currentDay);
        currentDate.setHours(0);
        currentDate.setMinutes(0);
        currentDate.setSeconds(0);
        currentDate.setMilliseconds(0);

        return currentDate;

    }

});


/*******************************
 ******* sliders scripts *******
 ******************************/

$(document).ready(function () {

    var sliderPartner = $('.slider-partner');

    setTimeout(function(){
        var currentPartnerSlides = $('.slider-partner').find('.slick-active');
        $(currentPartnerSlides[currentPartnerSlides.length - 1]).addClass('slide-last');
    }, 1000);

    sliderPartner.slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 981,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 550,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    sliderPartner.on('afterChange', function(event, slick, currentSlide){
        $(this).find('.slick-active').removeClass('slide-last');
        var array = $(this).find('.slick-active');
        $(array[array.length - 1]).addClass('slide-last');
    });

    $('.slider-reviews').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: true,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

});
