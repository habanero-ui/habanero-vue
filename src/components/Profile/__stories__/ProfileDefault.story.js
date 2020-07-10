import { text } from '@storybook/addon-knobs'

import Profile from '../index'

export default () => ({
  components: { Profile },
  props: {
    firstName: {
      default: text('firstName', 'Patches'),
    },
    image: {
      default: text('image', 'http://placekitten.com/256/256'),
    },
    lastName: {
      default: text('lastName', "O'Houlihan"),
    },
    subtitle: {
      default: text('subtitle', 'the Cat'),
    },
  },
  template: `
    <div class="flex flex-start p-6"> 
      <Profile
        :firstName="firstName"
        :image="image"
        :lastName="lastName"
        :subtitle="subtitle" />
    </div>
  `,
})
