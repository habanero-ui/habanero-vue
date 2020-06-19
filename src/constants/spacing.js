import isNaN from 'lodash/isNaN'

export function getRemFromSpacing(spacing) {
  if (!isNaN(parseFloat(spacing))) {
    return `${(spacing * 4) / 16}rem`
  }

  const pxToRem = (px) => px / 16

  return (
    {
      none: '0',
      gutter: `${pxToRem(24)}rem`,
      xxsmall: `${pxToRem(4)}rem`,
      xsmall: `${pxToRem(8)}rem`,
      small: `${pxToRem(12)}rem`,
      medium: `${pxToRem(16)}rem`,
      large: `${pxToRem(32)}rem`,
      xlarge: `${pxToRem(64)}rem`,
      xxlarge: `${pxToRem(128)}rem`,
    }[spacing] || ''
  )
}

export const spacingAliases = [
  'none',
  'gutter',
  'xxsmall',
  'xsmall',
  'small',
  'medium',
  'large',
  'xlarge',
  'xxlarge',
]
