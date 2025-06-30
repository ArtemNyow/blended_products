//Допоміжні функції

export function setActiveCategoryButton(clickedButton, buttonsContainer) {
    const allButtons = buttonsContainer.querySelectorAll('.categories__btn');
    allButtons.forEach(btn => btn.classList.remove('categories__btn--active'));
    clickedButton.classList.add('categories__btn--active');
  }
  