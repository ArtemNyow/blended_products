import iziToast from "izitoast";
import { updateNavCartCount, updateNavWishlistCount } from "./js/helpers";
import { getProductsById } from "./js/products-api";
import { refs } from "./js/refs";
import { hideNoProductsMessage, renderProductToCategory, showNoProductsMessage } from "./js/render-function";
import { getCart } from "./js/storage";

//Логіка сторінки Cart
async function initCartPage() {
    updateNavCartCount();
    updateNavWishlistCount();
    refs.loader.classList.add('active');
    const cartIds = getCart();
    if (cartIds.length === 0) {
        refs.productList.innerHTML = "";
        showNoProductsMessage();
        updateCartSummary([], 0);
        refs.loader.classList.remove('active'); 
        return;
    }
    try {
        const products = await Promise.all(cartIds.map(id => getProductsById(id)));
        renderProductToCategory(products);
        updateCartSummary(products);
        hideNoProductsMessage();
    } catch (error) {
        iziToast.error({ message: "Failed to load cart products", position: "topRight" });
    } finally {
        refs.loader.classList.remove('active'); 
    }
}

function updateCartSummary(products) {
    const countEl = refs.cartSummaryCount;
    const priceEl = refs.cartSummaryPrice;

    const totalCount = products.length;
    const totalPrice = products.reduce((sum, product) => sum + (product.price || 0), 0);

    countEl.textContent = totalCount;
    priceEl.textContent = `$${totalPrice.toFixed(2)}`;
}


refs.buyProductsBtn.addEventListener("click", () => {
    iziToast.success({
        title: "Success",
        message: "Products purchased successfully!",
        position: "topRight",
    })
    localStorage.removeItem("cart");
    updateNavCartCount();

    refs.productList.innerHTML = "";
    updateCartSummary([], 0);
    showNoProductsMessage();
});

initCartPage();