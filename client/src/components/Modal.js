class Modal {
  constructor() {
    this._modal = document.querySelector("#modal");
    this._modalbtn = document.querySelector("#modal-btn");
    this.addEventListeners();
  }

  addEventListeners() {
    this._modalbtn.addEventListener("click", this.open.bind(this));
    window.addEventListener("click", this.outsideClick.bind(this));
    document.addEventListener("closemodal", () => {
      this.close();
    });
  }

  open() {
    this._modal.style.display = "block";
  }

  close() {
    this._modal.style.display = "none";
  }

  outsideClick(e) {
    if (e.target === this._modal) {
      this.close();
    }
  }
}

export default Modal;
