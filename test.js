'use strict';

const rateMap = require('.');
const test = require('tape');

test('rateMap()', t => {
	t.equal(
		rateMap(0.5, 0, 100),
		50,
		'should map a value to a new number with the given range.'
	);

	t.equal(
		rateMap(0.8, 0.4, -0.6),
		-0.4,
		'should support negative range.'
	);

	t.throws(
		() => rateMap('Hi', 0, 0),
		/^TypeError.*Expected the first argument to be a number \(0 ~ 1\), but got Hi \(string\)\./,
		'should throw an error when the first argument is not a number.'
	);

	t.throws(
		() => rateMap(Infinity, 0, 0),
		/^RangeError.*Expected the first argument to be a finite number \(0 ~ 1\), but got Infinity\./,
		'should throw an error when the first argument is an infinite number.'
	);

	t.throws(
		() => rateMap(NaN, 0, 0),
		/^RangeError.*Expected the first argument to be a finite number \(0 ~ 1\), but got NaN\./,
		'should throw an error when the first argument is NaN.'
	);

	t.throws(
		() => rateMap(-5, 0, 0),
		/^RangeError.*Expected the first argument to be a number \(0 ~ 1\), but got a negative number -5\./,
		'should throw an error when the first argument is a negative number.'
	);

	t.throws(
		() => rateMap(2, 0, 0),
		/^RangeError.*Expected the first argument to be a number \(0 ~ 1\), but got a too large number 2\./,
		'should throw an error when the first argument exceeds 1.'
	);

	t.throws(
		() => rateMap(0, null, 0),
		/^TypeError.*Expected `start` argument to be a number, but got null\./,
		'should throw an error when the range value is not a number.'
	);

	t.throws(
		() => rateMap(0, 0, -Infinity),
		/^RangeError.*Expected `end` argument to be a finite number, but got -Infinity\./,
		'should throw an error when the range value is not finite.'
	);

	t.end();
});
