import { action } from '@storybook/addon-actions'
import ListItem from '../index'

export default () => ({
  components: { ListItem },
  data: () => ({
    items: ['Alpha', 'Bravo', 'Charlie'],
  }),
  template: `
    <div>
      <ListItem
        v-for="item in items"
        :isNavigation="true"
        :key="item"
        :primaryText="item"
        @click.native="action"
      />
    </div>
  `,
  methods: {
    action: action('click'),
  },
})
