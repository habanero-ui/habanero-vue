module.exports = {
  prefix: '',
  important: false,
  separator: ':',
  theme: {
    extend: {
      colors: {
        // Surface
        white: '#FFFFFF',
        'heavy-black': '#242324',
        black: '#3E3B3E',
        'grey-500': '#7C7C86',
        'grey-400': '#B2B2B2',
        'grey-300': '#E5E5E5',
        'grey-200': '#F2F4F6',
        'grey-100': '#F8F9FA',
        // Primary Colors
        gold: '#C09E6B',
        beige: '#F3F2E7',
        'dark-beige': '#E4E3D9',
        // Secondary Colors
        blue: '#A6EFF5',
        green: '#97ECC2',
        orange: '#FCB68A',
        pink: '#FAB5D3',
        purple: '#B6A4FF',
        // Supportive Colors
        info: '#3C6EEA',
        success: '#3AA76D',
        warning: '#F1B34D',
        'error-300': '#750E13',
        'error-200': '#BA1B23',
        'error-100': '#DA1E28',
        // Transparent Overlays
        'white-half': 'rgba(255,255,255, 0.5)',
        'black-half': 'rgba(36, 35, 36, 0.5)',
      },
      fontSize: {
        'body-extra-small': '0.75rem',
        'body-large': '1rem',
        'body-small': '0.875rem',
        button: '1rem',
        h1: '6.875rem',
        h2: '3.5rem',
        h3: '3rem',
        h4: '2rem',
        h5: '1.5rem',
        h6: '1.25rem',
        'label-large': '1rem',
        'label-small': '0.75rem',
      },
      spacing: {
        px3: '3px',
        '11': '2.75rem',
      },
      minWidth: {
        '8': '2rem',
        '11': '2.75rem',
        '32': '8rem',
      },
    },
  },
  variants: {
    backgroundColors: ['responsive', 'hover', 'focus', 'active'],
    borderWidth: ['responsive', 'hover'],
    opacity: ['responsive', 'hover'],
    fill: ['responsive', 'hover', 'active'],
    stroke: ['responsive', 'hover', 'active'],
    textColors: ['responsive', 'hover', 'focus', 'active'],
    fontStyle: ['responsive', 'hover', 'group-hover'],
  },
}
