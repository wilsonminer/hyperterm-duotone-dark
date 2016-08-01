'use strict'

const baseA0 = "#2a2734"
const baseA1 = "#363342"
const baseA2 = "#545167"
const baseA3 = "#6c6783"
const baseA4 = "#787391"
const baseA5 = "#8e8aa3"
const baseA6 = "#a4a1b5"
const baseA7 = "#bab8c7"
const baseB0 = "#6a51e6"
const baseB1 = "#7a63ee"
const baseB2 = "#8a75f5"
const baseB3 = "#9a86fd"
const baseB4 = "#afa0fe"
const baseB5 = "#c4b9fe"
const baseB6 = "#d9d2fe"
const baseB7 = "#eeebff"
const baseC0 = "#7c756e"
const baseC1 = "#90877f"
const baseC2 = "#a19991"
const baseC3 = "#b2aba4"
const baseC4 = "#c3bdb6"
const baseC5 = "#d8d1ca"
const baseC6 = "#ebe6e0"
const baseC7 = "#fbfaf9"
const baseD0 = "#b37537"
const baseD1 = "#cb823a"
const baseD2 = "#e09142"
const baseD3 = "#ffa142"
const baseD4 = "#ffad5c"
const baseD5 = "#ffb870"
const baseD6 = "#ffc285"
const baseD7 = "#ffcc99"

const darkBackgroundColor = '#23212C'
const backgroundColor = '#292734'
const foregroundColor = baseA6
const cursorColor = baseD0

const colors = {
  black: baseA0,
  red: baseB2,
  green: baseD4,
  yellow: baseD7,
  blue: baseB3,
  magenta: baseD4,
  cyan: baseB4,
  white: baseA6,
  lightBlack: baseA3,
  lightRed: baseD5,
  lightGreen: baseA1,
  lightYellow: baseA2,
  lightBlue: baseA4,
  lightMagenta: baseB6,
  lightCyan: baseD3,
  lightWhite: baseB7
}

exports.decorateConfig = config => {
  return Object.assign({}, config, {
    backgroundColor,
    foregroundColor,
    cursorColor: cursorColor,
    borderColor: 'rgba(0, 0, 0, 0.15)',
    colors: colors,
    css: `
      ${config.css || ''}
      .header_header {
        top: 0;
        right: 0;
        left: 0;
      }
      .tabs_list {
        background-color: ${darkBackgroundColor} !important;
        border-bottom-color: rgba(0, 0, 0, 0.15) !important;
      }
      .tab_tab {
        color: ${baseA4} !important;
      }
      .tab_tab.tab_active {
        font-weight: 500;
        background-color: ${backgroundColor};
        border-color: rgba(0, 0, 0, 0.5) !important;
        box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.06);
      }
      .tab_tab.tab_active::before {
        border-bottom-color: ${backgroundColor};
      }
      .tab_tab::after {
        content: "";
        position: absolute;
        pointer-events: none;
        z-index: 2;
        top: 0px;
        left: -1px;
        bottom: -1px;
        width: 2px;
        border-radius: 0;
        background: ${baseB0};
        opacity: 0;
        transition: opacity .16s;
      }
      .tab_tab.tab_active::after {
        opacity: 1;
        transition-duration: .32s;
      }
      .tabs_title, .tab_icon, .tab_tab.tab_active {
        color: ${baseA6} !important;
      }
      .tab_tab.tab_hasActivity {
        color: ${baseB3} !important;
      }
    `
  })

