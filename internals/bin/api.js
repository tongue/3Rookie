/* eslint-disable */
if (!require('piping')({
		hook: true
	})) {
	return;
}
/* eslint-enable */
require('babel-register');
require('../api');
