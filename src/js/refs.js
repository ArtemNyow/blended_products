//Обʼєкт з посиланнями на ДОМ елементи

export const refs = {
    categoryList: document.querySelector(".categories"),
    productList: document.querySelector(".products"),
    notFound: document.querySelector(".not-found"),
    modal: document.querySelector(".modal"),
    modalProduct: document.querySelector(".modal-product"),
    modalCloseBtn: document.querySelector(".modal__close-btn"),
    searchForm:document.querySelector(".search-form"),
    searchBtnClear:document.querySelector(".search-form__btn-clear"),
    searchInput: document.querySelector(".search-form__input"),
    cartCount: document.querySelector('[data-cart-count]'),
    wishlistCount: document.querySelector('[data-wishlist-count]'),
    modalBtnWishlist: document.querySelector('.modal-product__btn--wishlist'),
    modalBtnCart: document.querySelector('.modal-product__btn--cart'),
    cartSummaryCount: document.querySelector("[data-count]"),
    cartSummaryPrice: document.querySelector("[data-price]"),
    buyProductsBtn: document.querySelector(".cart-summary__btn"),
    loader: document.getElementById('loader'),
    scrollUpBtn: document.getElementById('scrollUpBtn'),
  
};
