$(document).ready(function () {
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
    resizeMainPadding();



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
        const callbackBtn = qs('.number-order');
        const modalCallback = qs('.modal-callback');
        const modalCloseBtn = document.querySelectorAll('.modal__close-btn');

        callbackBtn.addEventListener('click', () => {
            modalCallback.style.display = 'block';
            qs('header').style.opacity = '0.5';
            qs('main').style.opacity = '0.5';
            qs('footer').style.opacity = '0.5';
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



    $(".discounts__inner").owlCarousel({
        responsive: {
            0: {
                items: 1,
            },

            550: {
                items: 2,
            },

            750: {
                items: 3,
            },
        }
    });







    $(".reviews__slider-container").owlCarousel({
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



    $(".news__slider-container").owlCarousel({
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

    $(".clients__slider-container").owlCarousel({
        items: 8,
        margin: 40
    });


    window.onresize = function () {
        if (wrapper.classList.contains('payment-delivery-page')) {
            resizePaddingLeft();
        }
    };

});