import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';
import smoothScroll from 'jquery-smooth-scroll';

class StickyHeader {
	constructor() {
		this.siteHeader = $(".site-header");
		this.headerTrigger = $(".large-hero__subtitle");

		// grab all links in nav
		this.headerLinks = $(".primary-nav a");

		// grab lazyload imgs
		this.lazyImages = $(".lazyload");
		this.pageSections = $(".page-section");

		// call method on page load. always call after selectors!!! (duh)
		this.createHeaderWaypoint();
		this.createPageSectionWaypoints();
		this.refreshWaypoints();
		this.addSmoothScroll();

	}

	refreshWaypoints() {
		this.lazyImages.on('load', function() {
			Waypoint.refreshAll();

		});
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