// Инициализация
new WOW().init();
// Слайдер
$(document).ready(function() {
    // Валидация формы
    $('#offer-form').validate({
        rules: {
            username: "required",
            userphone: "required"
        },
        messages: {
            username: "Укажите имя",
            userphone: "Введите номер вашего телефона"
        }
    });
    $('#brif-form').validate({
        rules: {
            username: "required",
            userphone: "required"
        },
        messages: {
            username: "Укажите имя",
            userphone: "Введите номер вашего телефона"
        }
    });
    $('#modal-form').validate({
        rules: {
            username: "required",
            userphone: "required"
        },
        messages: {
            username: "Укажите имя",
            userphone: "Введите номер вашего телефона"
        }
    });
    // Обработка и отправка формы с помощью технологии AJAX
    $('#offer-form').on('submit', function(event) {
        event.preventDefault();
        $('#submit').prop('disabled', true);
        $.ajax({
            url: 'mail.php',
            type: 'POST',
            data: $(this).serialize(),
            success: function(data) {
                $('.success').addClass('success_active');
                $('.success-dialog').addClass('wow fadeInUp');
                $(this).find('input').val('');
                $('#offer-form').trigger('reset');
            },
            error: function(jqXHR, textStatus) {
                console.log(jqXHR + ': ' + textStatus);
            }
        });
        return false;
    });
    $('#brif-form').on('submit', function(event) {
        var name = $('#username').val();
        var phone = $('#userphone').val();
        event.preventDefault();
        if(name == "") {
            return false;
        } else if (phone == "") {
            return false;
        }
        $.ajax({
            url: 'mail.php',
            type: 'POST',
            data: $(this).serialize(),
            success: function(data) {
                $('.success').addClass('success_active');
                $('.success-dialog').addClass('wow fadeInUp');
                $(this).find('input').val('');
                $('#brif-form').trigger('reset');
            },
            error: function(jqXHR, textStatus) {
                console.log(jqXHR + ': ' + textStatus);
            }
        });
        return false;
    });
    $('#modal-form').on('submit', function(event) {
        var name = $('#username').val();
        var phone = $('#userphone').val();
        event.preventDefault();
        if(name == "") {
            return false;
        } else if (phone == "") {
            return false;
        }
        $.ajax({
            url: 'mail.php',
            type: 'POST',
            data: $(this).serialize(),
            success: function(data) {
                $('.success').addClass('success_active');
                $('.success-dialog').addClass('wow fadeInUp');
                $(this).find('input').val('');
                $('#modal-form').trigger('reset');
            },
            error: function(jqXHR, textStatus) {
                console.log(jqXHR + ': ' + textStatus);
            }
        });
        return false;
    });
    // Маска для телефона
    $('.phone').mask('+7 (999) 999-99-99')
    // Слайдер
    $('.slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: $('.arrows__left'),
        nextArrow: $('.arrows__right'),
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }  
            }
        ],
    });
});