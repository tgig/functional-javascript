module.exports = function reduce(arr, fn, initial) {
	if (!arr.length) return initial;

	var head = arr[0];
	var tail = arr.slice(1);

	initial = fn(initial, head);

	return reduce(tail, fn, initial);
}

//arr
// [ 'fugiat','enim','qui','mollit','sunt','eu','voluptate','cillum','dolore',
// 'ea','nostrud','esse','consectetur','esse','dolor','consectetur','pariatur','mollit','incididunt','sunt',
// 'non','quis','adipisicing','adipisicing','dolore','ex','labore','amet','enim','non','aute','ex','sint' ]

//fn
// function (prev, curr) {
// 	prev[curr] = ++prev[curr] || 1
// 	return prev
// }

//initial
//{}

//proper answer
// module.exports = function reduce(arr, fn, initial) {
// 	return (function reduceOne(index, value) {
//   		if (index > arr.length - 1) return value // end condition
//   		return reduceOne(index + 1, fn(value, arr[index], index, arr)) // calculate & pass values to next step
// 	})(0, initial) // IIFE. kick off recursion with initial values
// }
