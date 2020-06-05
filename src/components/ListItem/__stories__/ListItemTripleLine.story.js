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
        :key="item"
        :primaryText="item"
        secondaryText="Description"
        tertiaryText="Details"
      />
    </div>
  `,
})
