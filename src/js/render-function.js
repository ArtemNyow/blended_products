//Функцію для створення, рендеру або видалення розмітки

import { getCategories, getProducts } from "./products-api";
import { refs } from "./refs";



export const markupCategories = categoris => {
    return categoris.map(
        ({ name }) => `<li class="categories__item">
   <button class="categories__btn" type="button">${name}</button>
 </li>
`).join('');  
};

export const renderCategories = async () => {
    const categoriesArr = await getCategories();
    categoriesArr.unshift({ name: 'All' });
    refs.categoryList.insertAdjacentHTML('beforeend', markupCategories(categoriesArr))
    
    
}

export const markupProducts = products => {
    return products.map(
        ({ id, thumbnail, title, brand, category, price }) => `<li class="products__item" data-id="${id}">
    <img class="products__image" src="${thumbnail}" alt="${title}"/>
    <p class="products__title">${title}</p>
    <p class="products__brand"><span class="products__brand--bold">Brand: ${brand}</span></p>
    <p class="products__category">Category: ${category} </p>
    <p class="products__price">Price: ${price}$</p>
 </li>

`).join('');  
};

export const renderProducts = async currentPage => {
    const { products } = await getProducts(currentPage);
    if (products.length > 0) {
        refs.productList.insertAdjacentHTML('beforeend', markupProducts(products))
    } 
}
export function renderProductToCategory(products) {
    refs.productList.innerHTML = markupProducts(products);
  }

export function showNoProductsMessage() {
    refs.notFound.classList.add("not-found--visible");
  }
  
  export function hideNoProductsMessage() {
    refs.notFound.classList.remove("not-found--visible");
}
  



export function markupProductsModal ({
  thumbnail, title, price, tags =[], description, returnPolicy, shippingInformation
})  {

  const tagItems = tags.map(tag => `<li>${tag}</li>`).join('');  return `<img class="modal-product__img" src="${thumbnail}" alt="${title}" />
      <div class="modal-product__content">
        <p class="modal-product__title">${title}</p>
        <ul class="modal-product__tags">${tagItems}</ul>
        <p class="modal-product__description">${description}</p>
        <p class="modal-product__shipping-information">Shipping: ${shippingInformation}</p>
        <p class="modal-product__return-policy">Return Policy: ${returnPolicy}</p>
        <p class="modal-product__price">Price: ${price} $</p>
        <button class="modal-product__btn modal-product__btn--buy" type="button">Buy</button>
      </div>`
};


export function renderProductsModal(product) {
      refs.modalProduct.innerHTML = "";
      refs.modalProduct.insertAdjacentHTML('beforeend', markupProductsModal(product))
}