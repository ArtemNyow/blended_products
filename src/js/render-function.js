//Функцію для створення, рендеру або видалення розмітки

import { getCategories } from "./products-api";
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