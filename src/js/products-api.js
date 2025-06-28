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
