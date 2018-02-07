import $ from 'jquery';

class Modal {

	constructor() {
		this.openModalBtn = $(".open-modal");
		this.modal = $(".modal");
		this.closeModalBtn = $(".modal__close");
		this.events();
	}

	events() {
		// clicking the open-modal button
		this.openModalBtn.click(this.openModal.bind( this ));

		// clicking the close-modal button
		this.closeModalBtn.click(this.closeModal.bind( this ));


		// user pushes a key
		$(document).keyup(this.keyPressHandler.bind( this ));

	}

	keyPressHandler(k) {
		// keycode for ESC
		if (k.keyCode == 27) {
			this.closeModal();
		}

	}

	openModal() {
		this.modal.addClass("modal--is-visible");
		return false;
	}

	closeModal() {
		this.modal.removeClass("modal--is-visible");
	}



}


export default Modal;