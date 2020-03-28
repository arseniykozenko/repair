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