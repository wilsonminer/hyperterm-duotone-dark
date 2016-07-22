'use strict';

const foregroundColor = '#eff0eb';
const backgroundColor = '#1d262f';
const black = backgroundColor;
const slate = '#495f79';
const lightSlate = '#56708f';
const blue = '#7cb5f9';
const green = '#0acd93';
const lightGreen = '#52ffc8';
const gray = '#8ca59d';
const brightBlack = '#8ca59d';
const brightWhite = foregroundColor;

exports.decorateConfig = config => {
	return Object.assign({}, config, {
		backgroundColor,
		foregroundColor,
		borderColor: '#222430',
		cursorColor: '#0acd93',
		colors: [
			black,
			slate,
      lightSlate,
      blue,
			green,
			lightGreen,
			gray,

			// bright
			brightBlack,
			slate,
      lightSlate,
      blue,
			green,
			lightGreen,
			brightWhite
		],
		css: `
			${config.css || ''}
			.tab_active:before {
				border-color: rgba(10, 205, 147, 0.25);
			}
		`
	});
};
