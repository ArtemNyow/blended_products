// Функції, які передаються колбеками в addEventListners

import iziToast from "izitoast";
import { refs } from "./refs";
import { getProducts, getProductsToCategory } from "./products-api";
import { markupProducts } from "./render-function";


export async function handleCategoryClick(event) {
    const button = event.target.closest('.categories__btn');
    if (!button) return;
  
    const categoryName = button.textContent.trim();
    refs.productList.innerHTML = '';

    try {
        let data;
        if (categoryName.toLowerCase() === 'all') {
          data = await getProducts(1); 
        } else {
          data = await getProductsToCategory(categoryName);
        }
    
        if (data && Array.isArray(data.products)) {
          refs.productList.insertAdjacentHTML('beforeend', markupProducts(data.products));
        }
    } catch (error) {
        iziToast.error({ message: error.message, position: "topRight" });
    }
  }
  

