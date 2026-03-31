$(function () {
    $(window).scroll(function () {
        if ($(window).scrollTop() >= 700) {
            $('.gotop').fadeIn()
        } else {
            $('.gotop').fadeOut()
        }
    })

    $('.gotop').click(function (e) {
        e.preventDefault()
        $('html,body').animate({
            scrollTop: 0,
        }, 2000)

    })
    $('header ul li').click(function () {
        $('header ul li').removeClass('on')
        $(this).addClass('on')
        let idx = $(this).index()

        let sd = $('main section').eq(idx).offset().top + 120
        $('html,body').animate({
            scrollTop: sd
        }, 600)
    })
    $(window).scroll(function () {
        $('main section').each(function () {
            if ($(this).offset().top <= $(window).scrollTop() + 114) {
                let idx = $(this).index()
                $('header ul li').removeClass('on')
                $('header ul li').eq(idx).addClass('on')
            }
        })
    })

    let pot1 = $('.contest').offset().top
    let pot2 = $('.typhograpy').offset().top
    let pot3 = $('.D3works').offset().top
    let youtube = $('.youtube').offset().top
    let pro = $('.MiniProject').offset().top
    let contact = $('.contact').offset().top
    $(window).resize(function () {
        pot1 = $('.contest').offset().top
        pot2 = $('.typhograpy').offset().top
        pot3 = $('.D3works').offset().top
        youtube = $('.youtube').offset().top
        pro = $('.MiniProject').offset().top
        contact = $('.contact').offset().top
    })
    $(window).scroll(function () {
        if (pot1 <= $(this).scrollTop() && youtube > $(this).scrollTop()) {
            $('header').addClass('on')
            console.log('ok')
        } else if (pot2 < $(this).scrollTop() && pro > $(this).scrollTop()) {
            $('header').addClass('on')
        } else if (pot3 < $(this).scrollTop() && contact > $(this).scrollTop()) {
            $('header').addClass('on')
        } else {
            $('header').removeClass('on')
        }
        // let scrolled = pot <= $(window).scrollTop()
        // $('header').toggleClass('on', scrolled)
    })
    const swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        spaceBetween: 20,
    });
})