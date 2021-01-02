// Get the current year for the copyright
$('#year').text(new Date().getFullYear());

$('.port-item').click(function () {
    $('.collapse').collapse('hide');
    console.log('c');
});

$('#BackToTopBtn').click(function () {
    window.scrollTo(0, 0);

});

window.addEventListener("scroll", function () {
    if (window.pageYOffset > 250) {
        $('#BackToTopBtn').addClass("active");
    }
    else {
        $('#BackToTopBtn').removeClass("active")
    }
});


$(window).scroll(function () {
    if ($(window).scrollTop() + $(window).height() < $(document).height() - $("#main-footer").height()) {

        $('#BackToTopBtn').css("bottom", "20px"); //resetting it
    }
    if ($(window).scrollTop() + $(window).height() > $(document).height() - $("#main-footer").height()) {
        $('#BackToTopBtn').css("bottom", "150px");
    }

});





