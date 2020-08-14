import spacingAliases from '../../../constants/spacingAliases'
import FormGroup from '../index'
export { default as Default } from './FormGroupDefault.story'

export default {
  title: 'FormGroup',
  component: FormGroup,
  argTypes: {
    space: {
      control: {
        type: 'select',
        options: [undefined, 2.5, ...spacingAliases],
      },
    },
  },
  args: {
    error: '',
    helperText: '',
    label: 'Some Label Text',
  },
}
