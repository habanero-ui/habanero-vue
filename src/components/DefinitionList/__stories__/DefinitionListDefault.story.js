import DefinitionListItem from '../../DefinitionListItem/index'
import DefinitionList from '../index'

export default ((args, { argTypes }) => ({
  components: { DefinitionListItem, DefinitionList },
  props: Object.keys(argTypes),
  template: `
    <DefinitionList v-bind="$props">
      <DefinitionListItem name="Game">
        Banjo-Kazooie
      </DefinitionListItem>
      <DefinitionListItem name="Platform">
        Nintendo 64
      </DefinitionListItem>
      <DefinitionListItem name="Release">
        June 29, 1998
      </DefinitionListItem>
      <DefinitionListItem name="Rating">
        E
      </DefinitionListItem>
    </DefinitionList>
    `,
})).bind({})
