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
    const {products} = await getProducts(currentPage);
    refs.productList.insertAdjacentHTML('beforeend', markupProducts(products))
}