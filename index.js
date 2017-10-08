'use strict';

var regex = /^\w+:/;

module.exports = function hasScheme(str) {
	return regex.test(str);
}
