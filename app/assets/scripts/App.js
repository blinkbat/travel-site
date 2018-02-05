import $ from 'jquery';

import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';

var mobileMenu = new MobileMenu();

new RevealOnScroll($(".feature-item"), '85%');
new RevealOnScroll($(".testimonial"), '60%');









/*var $ = require('jquery');

// node.js import syntax
//var Person = require('./modules/Person');

import Person from './modules/Person';

class Adult extends Person {
	payTaxes() {
		console.log(this.fullName + " paid dem taxes");
	}
}


alert('abc');

// create a new instance of Person
var john = new Person("John Doe", "blu");
john.greet();

var jane = new Adult("Janey D", "grn");
jane.greet();

jane.payTaxes();
*/