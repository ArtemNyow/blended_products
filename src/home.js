import { handleCategoryClick } from "./js/handlers";
import { refs } from "./js/refs";
import { renderCategories, renderProducts } from "./js/render-function";

//Логіка сторінки Home

renderCategories()

const currentPage = 1;
renderProducts(currentPage)

refs.categoryList.addEventListener('click', handleCategoryClick)
