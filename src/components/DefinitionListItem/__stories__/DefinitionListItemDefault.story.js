import DefinitionList from '../../DefinitionList/index'
import DefinitionListItem from '../index'

export default ((args, { argTypes }) => ({
  components: { DefinitionList, DefinitionListItem },
  props: Object.keys(argTypes),
  template: `
    <DefinitionList>
      <DefinitionListItem v-bind="$props">{{ value }}</DefinitionListItem>
    </DefinitionList>
  `,
})).bind({})
