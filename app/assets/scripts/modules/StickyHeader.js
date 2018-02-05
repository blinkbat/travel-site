import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class StickyHeader {
	constructor() {
		this.siteHeader = $(".site-header");
		this.headerTrigger = $(".large-hero__subtitle");
		this.createHeaderWaypoint();
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
}

export default StickyHeader;