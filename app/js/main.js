document.addEventListener('DOMContentLoaded', function () {
    $.noConflict();

    const header = qs('.header');
    const wrapper = qs('.wrapper');
    const container = qs('.container');




    function qs(selector) {
        return document.querySelector(`${selector}`);
    }

    function resizeMainPadding() {
        qs('.main').style.paddingTop = `${header.clientHeight-3}px`;
    }



    function resizePaddingLeft() {
        const areaPoint = document.querySelectorAll('.area__point');
        const returnContent = document.querySelector('.return__content');

        areaPoint.forEach(point => {
            point.style.paddingLeft = window.getComputedStyle(container).marginLeft;
        });

        returnContent.style.marginLeft = window.getComputedStyle(container).marginLeft;

    }
    if (wrapper.classList.contains('payment-delivery-page')) {
        resizePaddingLeft();
    }



    function openProductFilter() {
        const filterBtn = qs('.sortCountView__filter');
        const filter = qs('.filter');
        const filterClodeBtn = qs('.filter__close-btn');

        filterBtn.addEventListener('click', () => {
            filter.style.transform = 'translateX(0)';
        });

        filterClodeBtn.addEventListener('click', () => {
            filter.style.transform = '';
        });

    }
    if (wrapper.classList.contains('all-dishes-page')) {
        openProductFilter();
    }




    function hiddenHeaderAddition() {
        const headerTop = qs('.header__top');

        if (pageYOffset > 150) {
            qs('.header__addition').style.transform = 'translateY(-150%)';
            header.style.height = `${headerTop.clientHeight}px`;

        } else {
            qs('.header__addition').style.transform = 'translateY(0%)';
            header.style.height = ' ';
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


    if (wrapper.classList.contains('product-page')) {
        wrapper.querySelector('.new-products__title').innerHTML = 'Другие варианты';
    }
    if (wrapper.classList.contains('cart-page')) {
        wrapper.querySelector('.new-products__title').innerHTML = 'Распродажа';
    }



    function modalOpenCloseRegistration() {
        const accountEnterBtn = qs('.account-enter__form_btn--registration');
        const modalRegistration = qs('.modal-registration');
        const modalCloseBtn = document.querySelectorAll('.modal__close-btn');

        accountEnterBtn.addEventListener('click', () => {
            modalRegistration.style.display = 'block';
            qs('header').style.opacity = '0.5';
            qs('main').style.opacity = '0.5';
            qs('footer').style.opacity = '0.5';
        });

        modalCloseBtn.forEach(btn => {
            btn.addEventListener('click', () => {
                modalRegistration.style.display = 'none';
                qs('header').style.opacity = '1';
                qs('main').style.opacity = '1';
                qs('footer').style.opacity = '1';
            });
        });

    }
    if (wrapper.classList.contains('account-enter-page')) {
        modalOpenCloseRegistration();
    }



    function modalOpenCloseCallback() {
        const callbackBtns = document.querySelectorAll('.number-order');
        const modalCallback = qs('.modal-callback');
        const modalCloseBtn = document.querySelectorAll('.modal__close-btn');


        callbackBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                modalCallback.style.display = 'block';
                qs('header').style.opacity = '0.5';
                qs('main').style.opacity = '0.5';
                qs('footer').style.opacity = '0.5';
            });
        });

        modalCloseBtn.forEach(btn => {
            btn.addEventListener('click', () => {
                modalCallback.style.display = 'none';
                qs('header').style.opacity = '1';
                qs('main').style.opacity = '1';
                qs('footer').style.opacity = '1';
            });
        });
    }
    modalOpenCloseCallback();


    function accountTabs() {
        const accountNav = qs('.account__nav');
        const accountNavItems = document.querySelectorAll('.account__nav-item');
        const activeTabClass = 'account__nav-item--active';
        const activeContentClass = 'content-active';
        const contentDBClasses = ['.account__data', '.account__bonuses', '.account__history'];

        accountNav.addEventListener('click', (e) => {

            if (e.target && !e.target.classList.contains(activeTabClass) && e.target.classList.contains('account__nav-item')) {
                e.target.classList.add(activeTabClass);
            } else {
                return;
            }

            accountNavItems.forEach(item => {
                if (item.classList.contains(activeTabClass) && item != e.target) {
                    item.classList.remove(activeTabClass);
                }
            });


            for (let i = 0; i < contentDBClasses.length; i++) {
                if (e.target.id && e.target.id.slice(-1) == i + 1) {
                    qs(contentDBClasses[i]).classList.add(activeContentClass);
                } else {
                    qs(contentDBClasses[i]).classList.remove(activeContentClass);
                }
            }


        });
    }

    if (wrapper.classList.contains('account-page')) {
        accountTabs();
    }



    function showingFullComment() {
        const showMoreCommentBtn = document.querySelectorAll('.reviews__slider-item_more');

        showMoreCommentBtn.forEach(btn => {
            btn.addEventListener('click', (e) => {
                let clickedItem = e.target.parentNode.parentNode;
                let clickedText = clickedItem.querySelector('.reviews__slider-item_text');

                if (btn.innerText == 'Закрыть') {
                    btn.innerHTML = 'Читать полностью';
                    clickedText.style.webkitLineClamp = '4';
                    clickedItem.style.zIndex = '0';
                } else {
                    btn.innerHTML = 'Закрыть';
                    clickedText.style.webkitLineClamp = 'unset';
                    clickedItem.style.zIndex = '1';
                }

            });

        });
    }
    if (wrapper.classList.contains('reviews-page')) {
        showingFullComment();
    }




    class Slider {
        constructor(owlElement, owlOptions) {
            this.owlElement = owlElement;
            this.owlOptions = owlOptions;
        }

        addSlider(owlElement, owlOptions) {
            $(owlElement).owlCarousel(owlOptions);
        }
    }
    const reviewsSlider = new Slider();
    const newsSlider = new Slider();
    const clientsSlider = new Slider();
    const allProductSlider = new Slider();
    const favouritesSlider = new Slider();
    const accountHistorySlider = new Slider();
    const reviewsPageSlider = new Slider();
    const newsPageSlider = new Slider();
    const fullNewsPageSlider = new Slider();




    class MobileSlider extends Slider {
        constructor(owlElement, owlOptions, windowWidth) {
            super(owlElement, owlOptions);
            this.windowWidth = windowWidth;
        }

        addMobileSlider(owlElement, owlOptions, windowWidth) {
            if (window.innerWidth > windowWidth) {
                $(owlElement).trigger('destroy.owl.carousel');
            } else {
                $(owlElement).owlCarousel(owlOptions);
            }
        }
    }
    const deliverySlider = new MobileSlider();
    const productSlider = new MobileSlider();
    const discountsSlider = new MobileSlider();
    const stocksSlider = new MobileSlider();







    reviewsSlider.addSlider(".reviews__slider-container", {
        responsive: {
            0: {
                items: 1,
                margin: 10,
            },

            750: {
                items: 2,
                margin: 20,
            },

            1300: {
                items: 3,
                margin: 40,
            },
        }
    });


    if (wrapper.classList.contains('main-page')) {
        newsSlider.addSlider(".news__slider-container", {
            responsive: {
                0: {
                    items: 1,
                    margin: 10,
                },

                650: {
                    items: 2,
                    margin: 20,
                },

                1300: {
                    items: 3,
                    margin: 40,
                },
            }
        });
    }



    clientsSlider.addSlider(".clients__slider-container", {
        responsive: {
            750: {
                items: 5,
                margin: 20
            },

            1000: {
                items: 8,
                margin: 40
            },
        }
    });


    allProductSlider.addSlider(".package__block .product__slider-list", {
        items: 1,
        margin: 20
    });

    favouritesSlider.addSlider(".favourites .products__list", {
        responsive: {
            0: {
                items: 1,
                margin: 10,
            },

            750: {
                items: 2,
                margin: 20,
            },

            1300: {
                items: 3,
                margin: 40,
            },
        }
    });



    accountHistorySlider.addSlider(".account__history-list", {
        margin: 20,
        responsive: {
            0: {
                items: 1
            },

            700: {
                items: 2
            },

            1100: {
                items: 3
            },
        },
    });


    reviewsPageSlider.addSlider(".reviews-slider__inner", {
        margin: 20,
        items: 1
    });


    newsPageSlider.addSlider(".news-slider__inner", {
        margin: 20,
        items: 1
    });

    fullNewsPageSlider.addSlider(".other-news .news__slider-container", {
        margin: 20,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        },
    });



    function contentLoaded() {

        resizeMainPadding();

        if (wrapper.classList.contains('payment-delivery-page')) {
            resizePaddingLeft();
        }

        discountsSlider.addMobileSlider(".discounts__inner", {
            items: 1,
        }, 750);


        deliverySlider.addMobileSlider(".delivery__сategories", {
            items: 1,
            margin: 20
        }, 750);


        if (wrapper.classList.contains('main-page')) {
            productSlider.addMobileSlider(".products__list", {
                margin: 20,
                responsive: {
                    0: {
                        items: 1,
                    },

                    550: {
                        items: 2,
                    }
                }
            }, 750);
        }


        stocksSlider.addMobileSlider(".other-stocks .stocks__list", {
            margin: 20,
            responsive: {
                0: {
                    items: 1,
                },

                750: {
                    items: 2,
                }
            }
        }, 1400);
    }
    contentLoaded();





    window.onresize = function () {
        contentLoaded();
    };
});