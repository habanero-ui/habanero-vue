import { action } from '@storybook/addon-actions'
import Stack from '../../Stack/index'
import ListItem from '../index'

export default () => ({
  components: { ListItem, Stack },
  data: () => ({
    items: ['Alpha', 'Bravo', 'Charlie'],
  }),
  template: `
    <Stack :showDividers="true">
      <ListItem
        v-for="item in items"
        :isNavigation="true"
        :key="item"
        :primaryText="item"
        @click.native="action"
      />
    </Stack>
  `,
  methods: {
    action: action('click'),
  },
})
