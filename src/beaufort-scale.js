;(function (global) {
	'use strict';

	var winds = [ 0, 2, 6, 12, 20, 29, 39, 50, 62, 75, 89, 103, 118 ];
	var langs = {
		'en' : ['Calm', 'Light air', 'Light breeze', 'Gentle breeze', 'Moderate breeze', 'Fresh breeze', 'Strong breeze', 'High wind', 'Gale', 'Strong gale', 'Storm', 'Violent Storm', 'Hurricane'],
		'es' : ['Calma', 'Ventolina', 'Brisa muy débil', 'Brisa ligera', 'Brisa moderada', 'Brisa fresca', 'Brisa fuerte', 'Viento fuerte', 'Temporal', 'Temporal fuerte', 'Temporal duro', 'Borrasca', 'Huracán']
	};

	var remap = function(range_from, range_to, value) {
		var v = Math.floor(((value - range_from)*100) / (range_to - range_from)) / 100;
		return (v<0) ? 0 : v;
	};

	var beaufort = function(speed, options) {

		var opts = options || {};

			if ( typeof opts.lang == 'object' ) {
				langs['add'] = options.lang;
				opts.lang = 'add';
			}

		var settings = {
			lang: opts.lang || 'en',
			int: opts.int || false
		};

		var grades = [];
		for ( var i = 0; i < winds.length; i++ ) {
			grades.push( { speed : winds[i], desc : langs[settings.lang][i] } );
		}

		var grade = false;
		grades.forEach(function(el, i) {
			if ( el.speed > speed && !grade ) {
				grade = i;
			}
		});
		grade = (grade) ? (grade-1) : (grades.length-1);
		var data = {
			desc : grades[grade].desc,
			grade : ((settings.int) ? grade : (grade + remap(grades[grade].speed, ((grades[grade+1]) ? grades[grade+1].speed : false), speed)))
		};
		return data;
	};

    if (typeof define === 'function' && define.amd) {
        define(function () { return beaufort; });
    } else if (typeof exports !== 'undefined') {
        if (typeof module !== 'undefined' && module.exports) {
            exports = module.exports = beaufort;
        }
        exports.beaufort = beaufort;
    } else {
        global.beaufort = beaufort;
    }

})(this);
