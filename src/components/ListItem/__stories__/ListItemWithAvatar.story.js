import Stack from '../../Stack/index'
import ListItem from '../index'

export default () => ({
  components: { ListItem, Stack },
  data: () => ({
    items: [
      { image: 'http://placekitten.com/256/256', text: 'Alpha' },
      { image: 'http://placekitten.com/256/256', text: 'Bravo' },
      { text: 'Charlie' },
    ],
  }),
  template: `
    <Stack :showDividers="true">
      <ListItem
        v-for="item in items"
        :avatarFirstName="item.text"
        :avatarImage="item.image"
        :key="item.text"
        :primaryText="item.text"
      />
    </Stack>
  `,
})
