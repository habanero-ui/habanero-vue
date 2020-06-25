import { text } from '@storybook/addon-knobs'
import Avatar from '../index'

export default () => ({
  components: { Avatar },
  props: {
    firstName: {
      default: text('firstName', 'Patches'),
    },
    lastName: {
      default: text('lastName', 'O Houlihan'),
    },
  },
  template: `
    <div class="flex flex-start p-6"> 
      <Avatar :firstName="firstName" :lastName="lastName" image="http://placekitten.com/256/256" />
    </div>
  `,
})
