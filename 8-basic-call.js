module.exports = function duckCount() {

	var args = arguments;

	return (function count(hasQuack, i) {
		if (i == args.length)
			return hasQuack;

		if (Object.prototype.hasOwnProperty.call(args[i], 'quack') == true) {
			return count(++hasQuack, ++i);
		}
		else {
			return count(hasQuack, ++i);
		}
			
	})(0, 0); //IIFE		

}

//arguments
// { '0': { quack: true },
//   '1': { quack: false },
//   '2': {},
//   '3': {},
//   '4': { quack: true, hasOwnProperty: [Function] },
//   '5': { quack: true },
//   '6': {},
//   '7': {},
//   '8': { quack: undefined },
//   '9': {} }

//official solution
/*
module.exports = function duckCount() {
	return Array.prototype.slice.call(arguments).filter(function (obj) {
		return Object.prototype.hasOwnProperty.call(obj, 'quack');
	}).length;
}

--> It's a beauty b/c the arguments passed into the function is not really an array. 
	They are assigning the Array prototype and Object prototype, then using native
	functions.
	Once they have arguments into an Array, filter grabs only the items with a 'quack'
	property, and length returns the total number.
*/

