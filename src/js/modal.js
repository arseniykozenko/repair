$(document).ready(function() {
    var button = $('#button');
    var modal = $('#modal');
    var close = $('#close');
    var body = $('body');

    button.on('click', function() {
        modal.addClass('modal_active');
        body.css('overflow-y','hidden');
        $('.modal-dialog').addClass('wow fadeInUp');
    });

    close.on('click', function() {
        modal.removeClass('modal_active');
        body.css('overflow-y','scroll');
    });
});

