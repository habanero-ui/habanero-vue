import { action } from '@storybook/addon-actions'

import PageSection from '../index'
export { default as Default } from './PageSectionDefault.story'
export { default as CustomAction } from './PageSectionCustomAction.story'

export default {
  title: 'PageSection',
  component: PageSection,
  args: {
    actionText: '',
    onActionClick: action('onActionClick'),
    titleText: 'Title Text',
  },
}
