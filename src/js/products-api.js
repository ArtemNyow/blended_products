// Функції для роботи з бекендом
import axios from "axios";
import iziToast from "izitoast";

axios.defaults.baseURL = 'https://dummyjson.com';

export async function getCategories() {
    try {
        const { data } = await axios('/products/categories');
        return data; 
    } catch (error) {
        iziToast.error({ message: error.message,position:"topRight"})
    } 
} 

export async function getProducts(currentPage) {
    const url = `/products?limit=12&skip=${(currentPage - 1) * 12}`;
    try {
        const { data } = await axios(url);
        return data;  
    } catch (error) {
        iziToast.error({ message: error.message,position:"topRight"})
    }
    
}

export async function getProductsToCategory(currentCategorie) {
    const url = `products/category/${currentCategorie}`;
    try {
        const { data } = await axios(url);        
        return data;  
        
    } catch (error) {
        iziToast.error({ message: error.message,position:"topRight"})
    }
    
}


export async function getProductsById(id) {
    const url = `products/${id}`;
    try {
        const { data } = await axios(url);        
        return data;  
        
    } catch (error) {
        iziToast.error({ message: error.message,position:"topRight"})
    }
}

export async function getProductsByValue(value, currentPage = 1, limit = 12) {
    const skip = (currentPage - 1) * 12;
    const url = `products/search?q=${encodeURIComponent(value)}&limit=${limit}&skip=${skip}`;    try {
        const { data } = await axios(url);        
        return data;  
        
    } catch (error) {
        iziToast.error({ message: error.message,position:"topRight"})
    }
    
}