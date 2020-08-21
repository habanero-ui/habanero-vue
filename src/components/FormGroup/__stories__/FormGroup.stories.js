import spacingAliases from '../../../constants/spacingAliases'
import FormGroup from '../index'
export { default as Default } from './FormGroupDefault.story'

export default {
  title: 'Components/FormGroup',
  component: FormGroup,
  argTypes: {
    space: {
      control: {
        type: 'select',
        options: [2.5, ...spacingAliases],
      },
    },
  },
  args: {
    error: '',
    helperText: '',
    label: 'Some Label Text',
  },
}
