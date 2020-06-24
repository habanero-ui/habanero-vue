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
        :isActionable="false"
        :key="item"
        :primaryText="item"
      />
    </Stack>
  `,
})
