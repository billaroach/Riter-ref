$(document).ready(function() {
    $('input').styler();
    $('.my-select').styler();
    $(".user-menu").hide();

    $("#profile-icon").on('click', function() {
        $(".user-menu").toggle(70);
    });

    $('.categories__item').mouseover(function(e) {
        $('.menu').hide();
        $(this).children('.menu').show();
        $('.dropdown-layout').show();
    })

    /* $('.dropdown-layout').mouseover(function() {
        $('.dropdown-layout').show();
    }) */

    $('.dropdown-layout').mouseleave(function() {
        $('.menu').hide();
        $('.sub-menu').hide();
        $('.dropdown-layout').hide();
    })

    $('.menu__item').mouseover(function(e) {
        e.preventDefault();
        $('.dropdown-layout').show();
        $('.sub-menu').hide();
        $(this).children('.sub-menu').show();
    });

    $('.product-description__button-collapse').on('click', function() {
        if ($('.product-description__text').hasClass('open')) {
            $('.product-description__text').css('height', '150px');
            $('.product-description__fade-text').show();
            $('.product-description__text').removeClass('open');
        } else {
            $('.product-description__text').css('height', 'auto');
            $('.product-description__fade-text').hide();
            $('.product-description__text').addClass('open');
        }
    })
});