import Stack from '../../Stack/index'
import ListItem from '../index'

export default () => ({
  components: { ListItem, Stack },
  data: () => ({
    items: [
      { primaryText: 'Default' },
      { primaryText: 'Error', status: 'error' },
      { primaryText: 'Info', status: 'info' },
      { primaryText: 'Success', status: 'success' },
      { primaryText: 'Warning', status: 'warning' },
    ],
  }),
  template: `
    <Stack :showDividers="true">
      <ListItem
        v-for="item in items"
        :key="item.primaryText"
        primaryStatusText="Status"
        :primaryStatusTextColor="item.status"
        :primaryText="item.primaryText"
        secondaryText="Description"
      />
    </Stack>
  `,
})
