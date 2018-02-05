import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class RevealOnScroll {
	constructor(els, offset) {
		this.itemsToReveal = els;
		this.offsetPercent = offset;
		this.hideInitially();
		this.createWaypoints();	
	}

	hideInitially() {
		this.itemsToReveal.addClass("reveal-item");
	}

	createWaypoints() {
		// retain original pointer for this 
		var that = this;

		this.itemsToReveal.each( function() {

			// point this to indiv waypoint obj
			var currentItem = this;

			new Waypoint({

				element: currentItem,

				handler: function() {
					$(currentItem).addClass("reveal-item--is-visible");
				},

				offset: that.offsetPercent

			});
		});
	}

}


export default RevealOnScroll;