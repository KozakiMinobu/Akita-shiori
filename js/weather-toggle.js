$(function(){
    $('.weather-btn').on('click', function(){
        var weather = $(this).data('weather');
        $('.weather-btn').removeClass('is-active');
        $(this).addClass('is-active');
        $('.weather-schedule').hide();
        $('.weather-schedule[data-weather-schedule="' + weather + '"]').show();
    });
    $('.weather-btn[data-weather="rainy"]').trigger('click');
});
