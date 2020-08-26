import DefinitionListItem from '../../DefinitionListItem/index'
import DefinitionList from '../index'

export default ((args, { argTypes }) => ({
  components: { DefinitionList, DefinitionListItem },
  props: Object.keys(argTypes),
  template: `
    <DefinitionList v-bind="$props">
      <DefinitionListItem v-for="item in items" :key="item.id" :name="item.name">
        {{ item.value }}
      </DefinitionListItem>
    </DefinitionList>
    `,
})).bind({})
