import { refs } from "./refs";

//Описана робота модалки - відкриття закриття і все що з модалкою повʼязано
export function openModal() {
    refs.modal.classList.add('modal--is--open');
}
export function closeModal() {
    refs.modal.classList.remove('modal--is--open');
}