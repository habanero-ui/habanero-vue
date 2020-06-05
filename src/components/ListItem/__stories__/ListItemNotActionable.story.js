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
        :isActionable="false"
        :key="item"
        :primaryText="item"
      />
    </div>
  `,
})
