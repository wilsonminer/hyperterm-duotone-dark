'use strict'

const foregroundColor = '#eff0eb'
const backgroundColor = '#1d262f'
const black = backgroundColor
const slate = '#495f79'
const lightSlate = '#56708f'
const blue = '#7cb5f9'
const green = '#0acd93'
const lightGreen = '#52ffc8'
const gray = '#8ca59d'
const brightBlack = '#8ca59d'
const brightWhite = foregroundColor

const colors = {
	black: black,
	red: slate,
	green: lightSlate,
	yellow: blue,
	blue: green,
	magenta: lightGreen,
	cyan: gray,
	white: foregroundColor,
	lightBlack: brightBlack,
	lightRed: slate,
	lightGreen: lightSlate,
	lightYellow: blue,
	lightBlue: green,
	lightMagenta: lightGreen,
	lightCyan: gray,
	lightWhite: foregroundColor
}

exports.decorateConfig = config => {
	return Object.assign({}, config, {
		backgroundColor,
		foregroundColor,
		borderColor: '#222430',
		cursorColor: '#0acd93',
		colors: colors,
		css: `
			${config.css || ''}
			.tab_active:before {
				border-color: rgba(10, 205, 147, 0.25)
			}
		`
	})
}

exports.middleware = () => (next) => (action) => {
  switch (action.type) {
    case 'CONFIG_LOAD':
    case 'CONFIG_RELOAD':
      action.config.foregroundColor = foregroundColor
      action.config.backgroundColor = backgroundColor
      action.config.cursorColor = green
      action.config.colors = colors
  }
  next(action)
}
