(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-mobule-open]"),
    closeModalBtn: document.querySelector("[data-mobule-close]"),
    modal: document.querySelector("[data-module]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
    document.body.classList.toggle("no-scroll");
  }
})();