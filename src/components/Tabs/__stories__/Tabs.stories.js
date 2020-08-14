import { action } from '@storybook/addon-actions'

import Tabs from '../index'
export { default as Default } from './TabsDefault.story'
export { default as Stateful } from './TabsStateful.story'

export default {
  title: 'Tabs',
  component: Tabs,
  args: {
    onSelectedNameChange: action('onSelectedNameChange'),
    selectedName: '',
  },
}
