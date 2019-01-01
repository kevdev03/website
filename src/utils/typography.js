import Typography from "typography"
import moragaTheme from 'typography-theme-moraga'

const typography = new Typography(moragaTheme);
moragaTheme.baseFontSize = `10px`;

// moragaTheme.overrideStyles = ({rhythm}, options) => ({
//   baseFontSize: `16px`,
// })
// const typography = new Typography({
//   baseFontSize: '16px',
//   baseLineHeight: 1.666,
//   headerFontFamily: ['Avenir Next', 'Helvetica Neue', 'Segoe UI', 'Helvetica', 'Arial', 'sans-serif'],
//   bodyFontFamily: ['Georgia', 'serif'],
//   // See below for the full list of options.
// })


export default typography