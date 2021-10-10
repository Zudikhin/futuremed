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

    $(".header_content_right_registration").click(function() {
        $(".modal_registration").addClass("active");
        $(".back_modal").addClass("active");
    });

    $(".back_modal").click(function() {
        $(this).removeClass("active");
        $(".modal_registration").removeClass("active");
    });

    $(".modal_registration_close").click(function() {
        $(".back_modal").removeClass("active");
        $(".modal_registration").removeClass("active");
    });

    $(".program_reg").click(function() {
        $(".modal_registration").addClass("active");
        $(".back_modal").addClass("active");
    });

    $(".about_left_content_btns_registration").click(function() {
        $(".modal_registration").addClass("active");
        $(".back_modal").addClass("active");
    });

    $(".link_about").click(function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $(".about").offset().top
        }, 2000);
    });

    $(".link_conference").click(function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $(".conference").offset().top
        }, 2000);
    });

    $(".link_program").click(function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $(".program h2").offset().top
        }, 2000);
    });

    $(".link_partners").click(function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $(".partners").offset().top
        }, 2000);
    });
    
    $(".about_left_content_btns_program").click(function() {
        $('html, body').animate({
            scrollTop: $(".program h2").offset().top
        }, 2000);
    });



    $(".dropdown_link_about").click(function(e) {
        e.preventDefault();
        $(".header_content_right_btn").removeClass("active");
        $(".header_dropdown").removeClass("active");
        $('html, body').animate({
            scrollTop: $(".about").offset().top
        }, 2000);
    });

    $(".dropdown_link_conference").click(function(e) {
        e.preventDefault();
        $(".header_content_right_btn").removeClass("active");
        $(".header_dropdown").removeClass("active");
        $('html, body').animate({
            scrollTop: $(".conference").offset().top
        }, 2000);
    });

    $(".dropdown_link_program").click(function(e) {
        e.preventDefault();
        $(".header_content_right_btn").removeClass("active");
        $(".header_dropdown").removeClass("active");
        $('html, body').animate({
            scrollTop: $(".program h2").offset().top
        }, 2000);
    });

    $(".dropdown_link_partners").click(function(e) {
        e.preventDefault();
        $(".header_content_right_btn").removeClass("active");
        $(".header_dropdown").removeClass("active");
        $('html, body').animate({
            scrollTop: $(".partners").offset().top
        }, 2000);
    });



});