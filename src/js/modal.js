import { updateNavCartCount, updateNavWishlistCount } from "./helpers";
import { refs } from "./refs";
import { addToCart, addToWishlist, getCart, getWishlist, removeFromCart, removeFromWishlist } from "./storage";

//Описана робота модалки - відкриття закриття і все що з модалкою повʼязано
export function openModal() {
    refs.modal.classList.add('modal--is--open');
}
export function closeModal() {
    refs.modal.classList.remove('modal--is--open');
}
export function initModalCartButton(productId) {
    const cart = getCart();
    const btnCart = refs.modalBtnCart;

    if (cart.includes(Number(productId))) {
        btnCart.textContent = "Remove from cart";   
    } else {
        btnCart.textContent = "Add to cart";
    }
    
    btnCart.onclick = () => {
        const currentCart = getCart();
        if (currentCart.includes(Number(productId))) {
            removeFromCart(Number(productId));
            btnCart.textContent = "Add to cart";
        } else {
            addToCart(Number(productId));
            btnCart.textContent = "Remove from cart";
        }
        updateNavCartCount();
    };
}
export function initModalWishlistButton(productId) {
    const wishlist = getWishlist();
    const btnWishlist = refs.modalBtnWishlist;

    if (wishlist.includes(Number(productId))) {
        btnWishlist.textContent = "Remove from Wishlist ";   
    } else {
        btnWishlist.textContent = "Add to Wishlist ";
    }

    btnWishlist.onclick = () => {
        const currentWishlist = getWishlist();
        if (currentWishlist.includes(Number(productId))) {
            removeFromWishlist(Number(productId));
            btnWishlist.textContent = "Add to Wishlist ";
        } else {
            addToWishlist(Number(productId));
            btnWishlist.textContent = "Remove from Wishlist ";
        }
        updateNavWishlistCount();
    };
}
