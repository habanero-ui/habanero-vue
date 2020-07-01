import { select, text } from '@storybook/addon-knobs'
import icons from '../../../constants/icons'
import Button from '../../Button/index'
import EmptyState from '../index'

export default () => ({
  components: { Button, EmptyState },
  props: {
    align: {
      default: select(
        'align',
        ['left', 'center', 'right', 'stretch'],
        'center',
      ),
    },
    iconName: {
      default: select('iconName', [undefined, ...icons], 'warning'),
    },
    message: {
      default: text('message', 'A longer descriptive message.'),
    },
    title: {
      default: text('title', 'Some Title Text'),
    },
  },
  template: `
    <div class="flex flex-col p-6">
      <EmptyState
        :align="align"
        :iconName="iconName"
        :message="message"
        :title="title">
        <div><Button text="Perform Some Action" /></div>
      </EmptyState>
    </div>
  `,
})
