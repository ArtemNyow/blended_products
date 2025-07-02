//Допоміжні функції

import { refs } from "./refs";
import { getCart, getWishlist } from "./storage";

export function setActiveCategoryButton(clickedButton, buttonsContainer) {
    const allButtons = buttonsContainer.querySelectorAll('.categories__btn');
    allButtons.forEach(btn => btn.classList.remove('categories__btn--active'));
    clickedButton.classList.add('categories__btn--active');
  }
  
  export function updateNavCartCount() {
    const cartCount = refs.cartCount;
    cartCount.textContent = getCart().length;
  }
  export function updateNavWishlistCount() {
    const wishlistCount = refs.wishlistCount;
    wishlistCount.textContent = getWishlist().length;
  }
  
export function initScrollUp() {
  const scrollUpBtn = refs.scrollUpBtn;
  if (!scrollUpBtn) return;

  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
      scrollUpBtn.style.display = 'block';
    } else {
      scrollUpBtn.style.display = 'none';
    }
  });

  scrollUpBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}