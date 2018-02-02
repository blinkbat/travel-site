import $ from 'jquery';


class MobileMenu {
	constructor() {
		// element selectors
		this.menuIcon = $(".site-header__menu-icon");

		this.menuContent = $(".site-header__menu-content");

		this.siteHeader = $(".site-header");

		// call events immediately to listen for click
		this.events();

	}


	events() {
		// anything within bind() will be used as 'this' instead of affected element
		// binding 'this' stops mutation and retains 'this' as the object
		// instead of the selected element
		this.menuIcon.click(this.toggleMenu.bind(this));

	}

	toggleMenu() {
		this.menuContent.toggleClass("site-header__menu-content--is-visible");

		this.siteHeader.toggleClass("site-header--is-expanded");

		this.menuIcon.toggleClass("site-header__menu-icon--close-x");
	}

}

export default MobileMenu;