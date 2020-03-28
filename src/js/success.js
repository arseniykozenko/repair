$(document).ready(function () {
    var close = $('#success-close');
    var success = $('#success-info');
    
    close.on('click', function () {
        success.removeClass('success_active');
    });

});