//Робота з loacalStorage

import { STORAGE_KEYS } from "./constants";



export function getCart() {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.CART)) || [];
}
export function setCart(cart) {
    localStorage.setItem(STORAGE_KEYS.CART,JSON.stringify(cart));
}

export function addToCart(id) {
    const cart = getCart()
        if(!cart.includes(id)){
        cart.push(id);
        setCart(cart);
    }
    return cart;
}

export function removeFromCart(id) {
    const cart = getCart().filter(itemId => itemId !== id);
    setCart(cart);
    return cart;
}



export function getWishlist() {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.WISHLIST)) || [];
}
export function setWishlist(wishlist) {
    localStorage.setItem(STORAGE_KEYS.WISHLIST,JSON.stringify(wishlist));
}

export function addToWishlist(id) {
    const wishlist = getWishlist()
        if(!wishlist.includes(id)){
            wishlist.push(id);
        setWishlist(wishlist);
    }
    return wishlist;
}

export function removeFromWishlist(id) {
    const wishlist = getWishlist().filter(itemId => itemId !== id);
    setWishlist(wishlist);
    return wishlist;
}