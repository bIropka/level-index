$(document).ready(function () {

    /******************************
     ******* init scripts *********
     ******************************/

    if ($(window).width() < '992'){

    } else {

    }

    $(window).resize(function(){
        if ($(window).width() < '992'){

        } else {

        }
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
                if (formID == 'form-order') scriptFile = 'mail-order.php';
                if (formID == 'form-callback') scriptFile = 'mail-callback.php';
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

    $('.form-submit').click(function() {
        $(this).parents('form').find('.form-field:invalid').addClass('invalid-field');
        if(document.getElementById('order-checkbox').checked) {
            document.getElementById('order-checkbox').classList.remove('invalid-field');
        } else {
            document.getElementById('order-checkbox').classList.add('invalid-field');
        }
        $(this).parents('form').find('.custom-checkbox:invalid').addClass('invalid-field');
        $(this).parents('form').find('.no-checked').removeClass('invalid-field');
    });

    /******************************
     ******* other scripts ********
     ******************************/

    $('.callback').click(function () {
        $('.window-callback').fadeIn();
    });
    $('.window-callback').click(function (event) {
        $target = $(event.target);
        if (!$target.closest($('#form-callback')).length) $('.window-callback').fadeOut();
        if ($target.hasClass('close-marker')) $('.window-callback').fadeOut();
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

    $('input').on('focus', function() {
        $(this).removeClass('valid-field invalid-field');
    });
    $('input[type="checkbox"]').on('change', function() {
        $(this).removeClass('valid-field invalid-field');
    });

    $('input[type="tel"]').mask("+7 ( 999 ) 999 - 99 - 99");
    $('input[type="tel"]').click(function() {
        $(this).focus();
    });

    /*******************************
     ******* sliders scripts ********
     ******************************/

    $('.slider-logisticians').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1366,
                settings: {
                    slidesToShow: 5
                }
            },
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
                breakpoint: 600,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 360,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

});


/*******************************
 ******* counter  script *******
 ******************************/

$(document).ready(function () {

    var dateForCounter = getDateForCounter();

    function getDateForCounter() {

        var date = + new Date();
        date = parseInt(date / 86400000);

        var currentDate = new Date();
        var currentDay = currentDate.getDate();
        var currentMonth, currentYear;

        if (date % 2) {
            currentDay += 1;
        } else {
            currentDay += 2;
        }
        currentDate.setDate(currentDay);

        currentDay = currentDate.getDate();

        currentMonth = currentDate.getMonth();
        ++currentMonth;
        if (currentMonth != 12) {
            currentMonth = '0' + currentMonth;
        }

        currentYear = currentDate.getFullYear();

        return '' + currentMonth + '/' + currentDay + '/' + currentYear + ' 00:00:00';

    }

    $('.timer ul').downCount({
        date: dateForCounter,
        offset: +3
    });

});