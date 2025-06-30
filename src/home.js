import { clearSearch, handleCategoryClick ,handleProductClick, searchSubmit } from "./js/handlers";
import { closeModal } from "./js/modal";
import { refs } from "./js/refs";
import { renderCategories, renderProducts } from "./js/render-function";

//Логіка сторінки Home

renderCategories()

const currentPage = 1;
renderProducts(currentPage)

refs.categoryList.addEventListener('click', handleCategoryClick)
refs.productList.addEventListener('click',handleProductClick)
refs.modalCloseBtn.addEventListener('click', closeModal)

refs.searchForm.addEventListener('submit', searchSubmit)
refs.searchBtnClear.addEventListener('click', clearSearch)
