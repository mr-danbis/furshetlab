$(document).ready(function () {

    $.noConflict();
    const header = qs('.header');

    function qs(selector) {
        return document.querySelector(`${selector}`);
    }


    // function openingNewProductsTabs() {
    //     const tabNav = document.querySelector('.new-products__tabs-nav');
    //     tabNav.addEventListener('click', (e) => {
    //         if (e.target && !e.target.classList.contains('tabs-active') && !e.target.classList.contains('new-products__tabs-nav')) {
    //             tabNav.querySelector('.tabs-active').classList.remove('tabs-active');
    //             e.target.classList.add('tabs-active');
    //         }
    //     });
    // }
    // openingNewProductsTabs();





    function resizeMainPadding() {
        qs('.main').style.paddingTop = `${header.clientHeight-3}px`;
    }
    resizeMainPadding();




    function hiddenHeaderAddition() {

        if (pageYOffset > 150) {
            qs('.header__addition').style.transform = 'translateY(-150%)';
        } else {
            qs('.header__addition').style.transform = 'translateY(0%)';
        }

    }
    window.addEventListener('scroll', function () {
        hiddenHeaderAddition();
    });



    function openMobileSidebar() {
        const burgerBtn = qs('.header__top-mobile_burger');
        const closeMenuBtn = qs('.mobMenu__btn');
        const mobMenu = qs('.mobMenu');

        burgerBtn.addEventListener('click', () => {
            mobMenu.style.transform = 'translateX(0%)';
        });

        closeMenuBtn.addEventListener('click', () => {
            mobMenu.style.transform = 'translateX(200%)';
        });

    }
    openMobileSidebar();


    $('.product__slider-list').slick({
        slidesToShow: 1,
        infinite: false,
        prevArrow: $('.product-slider__btn-prev'),
        nextArrow: $('.product-slider__btn-next'),
    });


    $('.reviews__slider-container').slick({
        slidesToShow: 3,
        infinite: false,
        prevArrow: $('.reviews-slider__btn-prev'),
        nextArrow: $('.reviews-slider__btn-next'),
        responsive: [{
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 750,
                settings: {
                    slidesToShow: 1,
                    dots: true
                }
            }
        ]

    });


    $('.news__slider-container').slick({
        slidesToShow: 3,
        infinite: false,
        prevArrow: $('.news-slider__btn-prev'),
        nextArrow: $('.news-slider__btn-next'),
        responsive: [{
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 750,
                settings: {
                    slidesToShow: 1,
                    dots: true
                }
            }
        ]
    });


    $('.clients__slider-container').slick({
        slidesToShow: 8,
        infinite: false,
        prevArrow: $('.clients-slider__btn-prev'),
        nextArrow: $('.clients-slider__btn-next'),
        responsive: [

            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 5,
                }
            },

            {
                breakpoint: 750,
                settings: {
                    slidesToShow: 3,
                    dots: true
                }
            },

            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    dots: true
                }
            }
        ]
    });




    window.onresize = function () {
        if (window.screen.width < 750) {

            $('.delivery__сategories').slick({
                slidesToShow: 1,
                infinite: false,
                arrows: false,
            });


            $('.products__list').slick({
                slidesToShow: 2,
                infinite: false,
                arrows: false,
                dots: true,
                responsive: [{
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                    }
                }]
            });



            $('.discounts__inner').slick({
                slidesToShow: 2,
                infinite: false,
                arrows: false,
                responsive: [{
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                    }
                }]
            });




        } else {
            $('.discounts__inner').slick('unslick');
            $('.delivery__сategories').slick('unslick');
            $('.products__list').slick('unslick');
        }

    };





    const wrapper = qs('.wrapper');
    if(wrapper.classList.contains('product-page')){
        wrapper.querySelector('.new-products__title').innerHTML = 'Другие варианты';
    }
    if(wrapper.classList.contains('cart-page')){
        wrapper.querySelector('.new-products__title').innerHTML = 'Распродажа';
    }

});