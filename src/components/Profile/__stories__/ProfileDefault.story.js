import { text } from '@storybook/addon-knobs'
import Profile from '../index'

export default () => ({
  components: { Profile },
  props: {
    name: {
      default: text('name', `Patches`),
    },
    subtitle: {
      default: text('subtitle', 'the Cat'),
    },
  },
  template: `
    <div class="flex flex-start p-6"> 
      <Profile :name="name" :subtitle="subtitle" />
    </div>
  `,
})
