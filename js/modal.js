(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };
  
  const toggleMenu = () => {
    const isMenuOpen =
      refs.openModalBtn.getAttribute('aria-expanded') === 'true' || false;
      refs.openModalBtn.setAttribute('aria-expanded', !isMenuOpen);
    refs.modal.classList.toggle('is-hidden');

    const scrollLockMethod = !isMenuOpen
      ? 'disableBodyScroll'
      : 'enableBodyScroll';
    bodyScrollLock[scrollLockMethod](document.body);
  };

  refs.openModalBtn.addEventListener('click', toggleMenu);
  refs.closeModalBtn.addEventListener('click', toggleMenu);
})();
