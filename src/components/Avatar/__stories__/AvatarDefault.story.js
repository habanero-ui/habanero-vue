import { text } from '@storybook/addon-knobs'
import Avatar from '../index'

export default () => ({
  components: { Avatar },
  firstName: {
    default: text('firstName', 'Patches'),
  },
  // image: {
  //   default: text('image', `http://placekitten.com/256/256`),
  // },
  lastName: {
    default: text('lastName', 'O Houlihan'),
  },
  template: `
    <div class="flex flex-start p-6"> 
      <Avatar :firstName="firstName" :lastName="lastName" />
    </div>
  `,
})
