'use strict'

const uno1 = '#EEEBFF'
const uno2 = '#C4B8FE'
const uno3 = '#A391FD'
const uno4 = '#6C6783'

const duo1 = '#FFCC99'
const duo2 = '#E49E58'
const duo3 = '#7C756E'

const foregroundColor = uno2
const backgroundColor = '#2A2734'
const accentColor = '#FFA852'

const colors = {
	black: backgroundColor,
	red: '#E2514E',
	green: '#2ED286',
	yellow: duo1,
	blue: duo2,
	magenta: duo3,
	cyan: uno3,
	white: foregroundColor,
	lightBlack: '#454257',
	lightRed: '#E2514E',
	lightGreen: '#2ED286',
	lightYellow: duo1,
	lightBlue: '#2ED286',
	lightMagenta: duo3,
	lightCyan: uno3,
	lightWhite: uno1
}

exports.decorateConfig = config => {
	return Object.assign({}, config, {
		backgroundColor,
		foregroundColor,
		borderColor: '#19181F',
		cursorColor: accentColor,
		colors: colors,
		css: `
			${config.css || ''}
			.tab_active:before {
				border-color: rgba(110, 82, 255, 0.25)
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
      action.config.cursorColor = accentColor
      action.config.colors = colors
  }
  next(action)
}
