import Typography from "typography"
import { baseHsl, colors } from "./colors"

const options = {
  baseFontSize: `18px`,
  baseLineHeight: 1.5,  
  headerColor: `${colors.black}`,
  bodyColor: `${colors.text}`,
  blockMarginBottom: 0.75,
  headerWeight: 300,
  googleFonts: [
    {
      name: 'Alegreya Sans',
      styles: [
        '300',
      ],
    },
    {
      name: 'Merriweather',
      styles: [
        '400',
        '400i',
        '700',
        '700i',
      ],
    },
  ],
  headerFontFamily: [
    `Alegreya Sans`,
    `sans-serif`,
  ],
  bodyFontFamily: [
    `Merriweather`,
    `serif`,
  ],
  overrideStyles: ({ rhythm, scale }, options) => {
    return {
      a: {
        borderColor: `${colors.link}`,
        color: `${colors.link}`,
        textDecoration: `none`,
      },
    }
  }
}


const typography = new Typography(options)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

module.exports = typography