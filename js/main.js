$(document).ready(function () {
    "use strict";

    $(".header_content_right_btn").click(function() {
        $(this).toggleClass("active");
        $(".header_dropdown").toggleClass("active");
    });
    
});