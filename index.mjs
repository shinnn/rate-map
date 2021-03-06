/*!
 * rate-map | ISC (c) Shinnosuke Watanabe
 * https://github.com/shinnn/rate-map
*/
import appendType from 'append-type';

var paramNames = ['start', 'end'];

export default function rateMap(val, start, end) {
	if (typeof val !== 'number') {
		throw new TypeError('Expected the first argument to be a number (0 ~ 1), but got ' + appendType(val) + '.');
	}

	if (!isFinite(val)) {
		throw new RangeError('Expected the first argument to be a finite number (0 ~ 1), but got ' + val + '.');
	}

	if (val < 0) {
		throw new RangeError('Expected the first argument to be a number (0 ~ 1), but got a negative number ' + val + '.');
	}

	if (val > 1) {
		throw new RangeError('Expected the first argument to be a number (0 ~ 1), but got a too large number ' + val + '.');
	}

	var args = [start, end];

	for (var i = 0; i < 2; i++) {
		if (typeof args[i] !== 'number') {
			throw new TypeError('Expected `' + paramNames[i] + '` argument to be a number, but got ' + appendType(args[i]) + '.');
		}

		if (!isFinite(args[i])) {
			throw new RangeError('Expected `' + paramNames[i] + '` argument to be a finite number, but got ' + args[i] + '.');
		}
	}

	return start + val * (end - start);
}
