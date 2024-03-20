AOS.init({
    easing: 'ease-in',
    throttleDelay:5000
});

$(function () {
    var $window = $(window),
     win_height_padded = $window.height() * 1.1;
    $window.on('scroll', revealOnScroll);
    function revealOnScroll() {
        var scrolled = $window.scrollTop(),
            win_height_padded = $window.height() * 1.1;
        $(".revealOnScroll:not(.animated)").each(function () {
            var $this = $(this),
                offsetTop = $this.offset().top;
            if (scrolled + win_height_padded > offsetTop) {
                if ($this.data('timeout')) {
                    $this.addClass('animated ' + $this.data('animation'));
                    $this.css('animation-delay', $this.data('timeout'));
                } else {
                    $this.addClass('animated ' + $this.data('animation'));
                }

                if ($this.data('duration')) {
                    $this.addClass('animated ' + $this.data('animation'));
                    $this.css('animation-duration', $this.data('duration'));
                } else {
                    $this.addClass('animated ' + $this.data('animation'));
                }
            }
        });
        $(".revealOnScroll.animated").each(function (index) {
            var $this = $(this),
                offsetTop = $this.offset().top;
            if (scrolled + win_height_padded < offsetTop) {
                $(this).removeClass('animated ' + $(this).attr("data-animation"))

            }
        });

    }
    revealOnScroll();
});

$(document).ready(function () {
    $('.home-product-list .product-list-content').slick({
        autoplay: true,
        autoplaySpeed: 6000,
        arrows: true,
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 2.5,
        slidesToScroll: 2.5,
        prevArrow: `
            <button type="button" class="slick-prev" aria-label="Previous">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.3536 14.3536C11.1583 14.5488 10.8417 14.5488 10.6464 14.3536L4.64645 8.35355C4.45118 8.15829 4.45118 7.84171 4.64645 7.64645L10.6464 1.64645C10.8417 1.45118 11.1583 1.45118 11.3536 1.64645C11.5488 1.84171 11.5488 2.15829 11.3536 2.35355L5.70711 8L11.3536 13.6464C11.5488 13.8417 11.5488 14.1583 11.3536 14.3536Z" fill="black"/>
                </svg>
            </button>
        `,
        nextArrow: `
            <button type="button" class="slick-next" aria-label="Next">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.64645 1.64645C4.84171 1.45118 5.15829 1.45118 5.35355 1.64645L11.3536 7.64645C11.5488 7.84171 11.5488 8.15829 11.3536 8.35355L5.35355 14.3536C5.15829 14.5488 4.84171 14.5488 4.64645 14.3536C4.45118 14.1583 4.45118 13.8417 4.64645 13.6464L10.2929 8L4.64645 2.35355C4.45118 2.15829 4.45118 1.84171 4.64645 1.64645Z" fill="black"/>
                </svg>
            </button>
        `,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 1.7,
                    slidesToScroll: 1.7,
                }
            },
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 1.4,
                    slidesToScroll: 1.4,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2.5,
                    slidesToScroll: 2.5,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2.3,
                    slidesToScroll: 2.3,
                    arrows: false,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2.2,
                    slidesToScroll: 2.2,
                    arrows: false,
                }
            }
        ]
    });
    $('.product-variant > div > a').click(function(){
        if(!$(this).parent().hasClass("active")) {
            $(this).parent().parent(".product-variant").children("div.active").each(function(){
                $(this).removeClass("active");
            });
            $(this).parent("div").addClass("active")
        }
    });
});