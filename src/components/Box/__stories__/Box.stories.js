import borderRadii from '../../../constants/borderRadii'
import colors from '../../../constants/colors'
import spacingAliases from '../../../constants/spacingAliases'
import Box from '../index'
export { default as Default } from './BoxDefault.story'
export { default as Spacing } from './BoxSpacing.story'

const spacingArgType = {
  control: {
    type: 'select',
    options: [undefined, 2.5, ...spacingAliases],
  },
}

export default {
  title: 'Box',
  component: Box,
  argTypes: {
    backgroundColor: {
      control: {
        type: 'select',
        options: colors,
      },
    },
    borderRadius: {
      control: {
        type: 'select',
        options: borderRadii,
      },
    },
    margin: spacingArgType,
    marginBottom: spacingArgType,
    marginLeft: spacingArgType,
    marginRight: spacingArgType,
    marginTop: spacingArgType,
    marginX: spacingArgType,
    marginY: spacingArgType,
    padding: spacingArgType,
    paddingBottom: spacingArgType,
    paddingLeft: spacingArgType,
    paddingRight: spacingArgType,
    paddingTop: spacingArgType,
    paddingX: spacingArgType,
    paddingY: spacingArgType,
  },
}
