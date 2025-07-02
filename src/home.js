import iziToast from "izitoast";
import { clearSearch, handleCategoryClick ,handleProductClick, searchSubmit } from "./js/handlers";
import { initScrollUp, updateNavCartCount, updateNavWishlistCount } from "./js/helpers";
import { closeModal } from "./js/modal";
import { refs } from "./js/refs";
import { renderCategories, renderProducts } from "./js/render-function";

async function initHomePage() {
  try {
    refs.loader.classList.add('active');

    await renderCategories();

    const currentPage = 1;
    await renderProducts(currentPage);

    updateNavCartCount();
    updateNavWishlistCount();
    initScrollUp()
    refs.categoryList.addEventListener('click', handleCategoryClick);
    refs.productList.addEventListener('click', handleProductClick);
    refs.modalCloseBtn.addEventListener('click', closeModal);
    refs.searchForm.addEventListener('submit', searchSubmit);
    refs.searchBtnClear.addEventListener('click', clearSearch);

  } catch (error) {
    iziToast.error({
        message: error.message, 
        position: "topRight"
      });
  } finally {
    refs.loader.classList.remove('active');
  }
}

window.addEventListener('DOMContentLoaded', initHomePage);
