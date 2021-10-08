$(document).ready(function () {
    "use strict";

    $(".header_content_right_btn").click(function() {
        $(this).toggleClass("active");
        $(".header_dropdown").toggleClass("active");
    });

    $('.conference_slider').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true,
        prevArrow: $('.conference_prev'),
        nextArrow: $('.conference_next')
    });
    

});