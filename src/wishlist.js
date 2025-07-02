
//Логіка сторінки Wishlist

import { updateNavCartCount, updateNavWishlistCount } from "./js/helpers";
import { closeModal, initModalCartButton, initModalWishlistButton, openModal } from "./js/modal";
import { getProductsById } from "./js/products-api";
import { refs } from "./js/refs";
import { hideNoProductsMessage,renderProductsModal,renderProductToCategory, showNoProductsMessage } from "./js/render-function";
import { getWishlist } from "./js/storage";

async function initWishlistPage() {
    updateNavWishlistCount();
    updateNavCartCount();
    refs.loader.classList.add('active');

    const wishlistIds = getWishlist();
    if (wishlistIds.length === 0) {
        refs.productList.innerHTML = "";
        showNoProductsMessage();
        refs.loader.classList.remove('active'); 
        return;
    }

    try {
        const products = await Promise.all(wishlistIds.map(id => getProductsById(id)));
        renderProductToCategory(products);
        hideNoProductsMessage;
    } catch ({error}) {
        iziToast.error({ message: "Failed to load wishlist products", position: "topRight" });
    }finally {
        refs.loader.classList.remove('active'); 
    }
    
}

refs.productList.addEventListener("click", async (event) => {
    const productItem = event.target.closest(".products__item");
    if (!productItem) return;
    
    const productId = Number(productItem.dataset.id);

    try {
        const product = await getProductsById(productId);
        renderProductsModal(product);
        openModal();
        initModalCartButton(productId);
        initModalWishlistButton(productId);
        refs.modalCloseBtn.addEventListener('click', closeModal)
    } catch (error) {
        iziToast.error({ message: "Failed to load product details", position: "topRight" });
    }finally {
        refs.loader.classList.remove('active'); 
    }
})

initWishlistPage();