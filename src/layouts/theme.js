// breakpoint values
// any array length works with styled-system
const breakpoints = [
  '120rem'
]

const colors = {
  text: '#261A12',
  blue: '#3095BF',
  green: '#4EB96F',
  yellow: '#EFC319',
  pink: '#F05A5A',
  purple: '#C4549A',
  violet: '#945BA4',
  bright: {
    blue: '#00BBF1',
    green: '#1A9D1C',
    yellow: '#FFB800',
  },
  black: '#000',
  white: '#FFF',
  silver: '#5A5A5B',
  gray: [
    '#1D1D1B',
    '#5A5A5B',
    '#ABABAA',
    '#D8D8D7',
  ]
}

// space is used for margin and padding scales
// numbers are converted to px
const space = [
  0, 5, 10, 15, 20, 25, 30, 35, 45, 50, 75, 100, 125, 150, 200
]

// typographic scale
const fontSizes = [
  64, 34, 24, 21, 18, 16, 14, 12
]

// for any scale, either array or objects will work
const lineHeights = [
  '75px', '45px', '35px', '30px', '25px', '20px'
]

const fontWeights = {
  light: 300,
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700
}

const letterSpacings = {
  normal: 'normal',
  caps: '0.5em'
}

// border-radius
const radii = [
  0, 2, 4, 8
]

const borderWidths = [
  0, 1, 3, 4, 5, 10
]

const shadows = [
  `0 1px 2px 0 ${colors.text}`,
  `0 1px 4px 0 ${colors.text}`
]

const fonts = {
  base: 'Montserrat, Roboto, sans-serif',
  headers: 'Podkova, Consolas, monospace',
}

const sizes = {
  minWidth: '1200px',
  width: '1040px'
}

const theme = {
  breakpoints,
  colors,
  space,
  fontSizes,
  lineHeights,
  fontWeights,
  letterSpacings,
  radii,
  borderWidths,
  shadows,
  fonts,
  sizes
}



export default theme