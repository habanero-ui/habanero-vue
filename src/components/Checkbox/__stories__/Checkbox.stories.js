import Checkbox from '../index'
export { default as Default } from './CheckboxDefault.story'
export { default as Stateful } from './CheckboxStateful.story'
export { default as TextWrapping } from './CheckboxTextWrapping.story'

export default {
  title: 'Checkbox',
  component: Checkbox,
  args: {
    disabled: false,
    isChecked: false,
    text: 'Check me out',
  },
}
