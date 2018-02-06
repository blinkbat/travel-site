import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';
import smoothScroll from 'jquery-smooth-scroll';

class StickyHeader {
	constructor() {
		this.siteHeader = $(".site-header");

		this.headerTrigger = $(".large-hero__subtitle");

		// call method on page load
		this.createHeaderWaypoint();

		this.pageSections = $(".page-section");

		this.createPageSectionWaypoints();

		// smooth scroll broken?
		//this.addSmoothScroll();

		// grab all links in nav
		this.headerLinks = $(".primary-nav a");
	}

	addSmoothScroll() {
		this.headerLinks.smoothScroll();

	}

	createHeaderWaypoint() {
		var that = this;
		new Waypoint({
			// the first item in a jquery obj
			// is a pointer to the DOM element, so [0] works
			element: this.headerTrigger[0],
			handler: function( direction ) {
				if (direction == "down") {
					that.siteHeader.addClass("site-header--dark");
				} else {
					that.siteHeader.removeClass("site-header--dark");
				}
			}
		});
	}

	createPageSectionWaypoints() {
		var that = this;

		this.pageSections.each(function() {
			
			var currentPageSection = this;
			
			new Waypoint({
				element: currentPageSection,

				handler: function(direction) {
					if (direction == "down") {
						var matchingLink = currentPageSection.getAttribute("data-matching-link");

						that.headerLinks.removeClass("is-current-link");

						$(matchingLink).addClass("is-current-link");
					}
				},

				offset: "18%"

			});

			new Waypoint({
				element: currentPageSection,

				handler: function(direction) {
					if (direction == "up") {
						var matchingLink = currentPageSection.getAttribute("data-matching-link");

						that.headerLinks.removeClass("is-current-link");

						$(matchingLink).addClass("is-current-link");
					}
				},

				offset: "-40%"
				
			});

		});
	}
}

export default StickyHeader;