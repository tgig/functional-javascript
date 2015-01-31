module.exports = function Spy(target, method) {
	var originalFunction = target[method];

	//use an object so we can pass by reference, not value
	// i.e., we can return result, but update count from scope
	var result = {
		count: 0
	}

	// replace method with spy method
	target[method] = function () {
		result.count++; //track that this function was called
		return originalFunction.apply(this, arguments); //invoke original function
	}

	return result;
}