// Функції, які передаються колбеками в addEventListners

import iziToast from "izitoast";
import { refs } from "./refs";
import { getProducts, getProductsById, getProductsByValue, getProductsToCategory } from "./products-api";
import { hideNoProductsMessage, renderProductsModal, renderProductToCategory, showNoProductsMessage } from "./render-function";
import { setActiveCategoryButton } from "./helpers";
import { initModalCartButton, initModalWishlistButton, openModal } from "./modal";


export async function handleCategoryClick(event) {
    const button = event.target.closest('.categories__btn');
    if (!button) return;
  
    setActiveCategoryButton(button, refs.categoryList);
    
    const categoryName = button.textContent.trim();
    refs.productList.innerHTML = '';
  hideNoProductsMessage();
  refs.loader.classList.add('active'); 
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
    }finally {
      refs.loader.classList.remove('active');  
    }
  }
  
export async function handleProductClick(event){
  const productId = event.target.closest('.products__item');
  if (!productId) return;
  const id = productId.getAttribute("data-id");
  refs.loader.classList.add('active'); 
  try {
    const product = await getProductsById(id)
    renderProductsModal(product);
    openModal();
    initModalCartButton(id);
    initModalWishlistButton(id);
    return;
    
 } catch (error) {
  iziToast.error({ message: error.message, position: "topRight" });
 }finally {
  refs.loader.classList.remove('active');  
}
}

export async function searchSubmit(event) {
  event.preventDefault();

  const query = refs.searchInput.value.trim();
  if (!query) return;

  refs.productList.innerHTML = '';
  hideNoProductsMessage()

  
  refs.loader.classList.add('active');  
  try {
    const data = await getProductsByValue(query);
    if (data.products.length > 0) {
      renderProductToCategory(data.products);
    } else {
      showNoProductsMessage()
    }
  } catch (error) {
    iziToast.error({ message: error.message, position: "topRight" })
  }finally {
    refs.loader.classList.remove('active');  
  }
}
export async function clearSearch() {

  refs.searchInput.value=""
  refs.productList.innerHTML = ""
  hideNoProductsMessage();

  refs.loader.classList.add('active');  
  try {
    const data = await getProducts(1);
    if (data && Array.isArray(data.products) && data.products.length > 0) {
      renderProductToCategory(data.products);
    } else {
      showNoProductsMessage()
    }
  } catch (error) {
    iziToast.error({ message: error.message, position: "topRight" });
  }finally {
    refs.loader.classList.remove('active');  
  }
}

