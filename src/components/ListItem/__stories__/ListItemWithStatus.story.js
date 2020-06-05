import ListItem from '../index'

export default () => ({
  components: { ListItem },
  data: () => ({
    items: [
      { primaryText: 'Alpha', status: 'error' },
      { primaryText: 'Bravo', status: 'success' },
      { primaryText: 'Charlie', status: 'warning' },
    ],
  }),
  template: `
    <div>
      <ListItem v-for="item in items" :key="item.primaryText" :primaryText="item.primaryText" secondaryText="Description" :primaryStatusText="item.status" :primaryStatusTextIntent="item.status" />
    </div>
  `,
})
