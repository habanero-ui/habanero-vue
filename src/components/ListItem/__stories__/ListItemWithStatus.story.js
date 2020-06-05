import ListItem from '../index'

export default () => ({
  components: { ListItem },
  data: () => ({
    items: [
      { primaryText: 'Subtle' },
      { primaryText: 'Error', status: 'error' },
      { primaryText: 'Info', status: 'info' },
      { primaryText: 'Success', status: 'success' },
      { primaryText: 'Warning', status: 'warning' },
    ],
  }),
  template: `
    <div>
      <ListItem
        v-for="item in items"
        :key="item.primaryText"
        primaryStatusText="Status"
        :primaryStatusTextColor="item.status"
        :primaryText="item.primaryText"
        secondaryText="Description"
      />
    </div>
  `,
})
