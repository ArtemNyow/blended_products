// Функції, які передаються колбеками в addEventListners

import iziToast from "izitoast";
import { refs } from "./refs";
import { getProducts, getProductsById, getProductsByValue, getProductsToCategory } from "./products-api";
import { hideNoProductsMessage, markupProducts, markupProductsModal, renderProductsModal, renderProductToCategory, showNoProductsMessage } from "./render-function";
import { setActiveCategoryButton } from "./helpers";
import { openModal } from "./modal";


export async function handleCategoryClick(event) {
    const button = event.target.closest('.categories__btn');
    if (!button) return;
  
    setActiveCategoryButton(button, refs.categoryList);
    
    const categoryName = button.textContent.trim();
    refs.productList.innerHTML = '';
    hideNoProductsMessage();
    try {
      let data;
        if (categoryName.toLowerCase() === 'all') {
          data = await getProducts(1); 
        } else {
          data = await getProductsToCategory(categoryName);
        }
      if (data && Array.isArray(data.products) && data.products.length>0) {
          renderProductToCategory(data.products)
        } else {
        showNoProductsMessage();
      }
    } catch (error) {
        iziToast.error({ message: error.message, position: "topRight" });
    }
  }
  
export async function handleProductClick(event){
  const productId = event.target.closest('.products__item');
  if (!productId) return;
  const id = productId.getAttribute("data-id");

  try {
    const product = await getProductsById(id)
    renderProductsModal(product);
    openModal();
    return;
    
 } catch (error) {
  iziToast.error({ message: error.message, position: "topRight" });
 }
}

export async function searchSubmit(event) {
  event.preventDefault();

  const query = refs.searchInput.value.trim();
  if (!query) return;

  refs.productList.innerHTML = '';
  hideNoProductsMessage()

  try {
    const data = await getProductsByValue(query);
    if (data.products.length > 0) {
      renderProductToCategory(data.products);
    } else {
      showNoProductsMessage()
    }
  } catch (error) {
    iziToast.error({ message: error.message, position: "topRight" })
  }
}
export async function clearSearch() {

  refs.searchInput.value=""
  refs.productList.innerHTML = ""
  hideNoProductsMessage();
  try {
    const data = await getProducts(1);
    if (data && Array.isArray(data.products) && data.products.length > 0) {
      renderProductToCategory(data.products);
    } else {
      showNoProductsMessage()
    }
  } catch (error) {
    iziToast.error({ message: error.message, position: "topRight" });
  }
}

