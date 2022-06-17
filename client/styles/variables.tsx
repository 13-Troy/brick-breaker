const allColors = {
  yellow: '#FBBF24',
  white: '#FFFFFF',
  black: '#231F20',
  red: '#F87171',
  green: '#34D399',
  blue: '#4F46E5',
  purple: '#5E5E5E',
  purple_medium: '#818CF8',
  purple_light: '#E0E7FF',
  grey: '#efefef',
  grey_light: '#f7f7f7',
};

export const baseTheme = {
  allColors: {
    yellow: '#FBBF24',
    white: '#FFFFFF',
    black: '#231F20',
    red: '#F87171',
    green: '#34D399',
    blue: '#4F46E5',
    purple: '#5E5E5E',
    purple_medium: '#818CF8',
    purple_light: '#E0E7FF',
    grey: '#efefef',
    grey_light: '#f7f7f7',
  },

  colors: {
    bg: allColors.purple_medium,
    bgBtn: allColors.blue,
    bgBtnHover: allColors.purple_light,
    font: allColors.black,
    fontBtn: allColors.white,
    fontBtnHover: allColors.purple,
    fontLink: allColors.blue,
    danger: allColors.red,
    inputBorder: allColors.purple,
  },

  fonts: {
    font_family: 'Montserrat, sans-serif',
    semi_bold: '600',
    black: '900',
  },

  borderRadius: '6px',
  skillsStartAnim: '0.3s',
} as const;

export type Theme = typeof baseTheme;
