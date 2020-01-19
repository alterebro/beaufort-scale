var tap = require('tap'),
	beaufort = require('../src/beaufort-scale');

	// Examples
	var a = beaufort(40);
		tap.equal( a.grade, 6.09 );
		tap.equal( a.desc, "Strong breeze" );

	var b = beaufort(40, {lang: 'es', int: true});
		tap.equal( b.grade, 6 );
		tap.equal( b.desc, "Brisa fuerte" );

	var c = beaufort(40, {
			lang: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm'],
			int: true
		});
		tap.equal( c.grade, 6 );
		tap.equal( c.desc, "g" );

	// Some random values
	var values = [ -10, 0, 2, 5, 8.65, 12, 40, 95, 120, 140, 33456.456 ];
	for (var i = 0; i < values.length; i++) {

		var t = beaufort(values[i]);
		tap.equal( typeof(t), 'object', 'Returning value is an Object' );
		tap.equal( typeof(t.grade), 'number', 'grade is a number' );
		tap.equal( typeof(t.desc), 'string', 'desc is a string' );
		tap.equal( (t.grade >= 0 && t.grade <= 12), true, 'Grade is a number in the range 0-12' );
	}
