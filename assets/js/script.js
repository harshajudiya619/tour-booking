AOS.init();

$('.hero_slider').owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        }
    }
})

$('.Clients_Sliders').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    navText: ['<i class="ri-arrow-left-line"></i>', '<i class="ri-arrow-right-line"></i>'],
    responsive: {
        0: {
            items: 1
        },
    }
})

$(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
        $('.Topbar').addClass("fix_nav");
    } else {
        $('.Topbar').removeClass("fix_nav");
    }
});


$('#mobile-menu').click(function () {
    $(".navbar_ul").toggleClass("active");
    $(this).toggleClass("active");
    $('.NavItems').toggleClass("active");
    $('.nav-blacklayer').toggleClass("d-block");
    $('body').toggleClass("overflow-hidden");
});



