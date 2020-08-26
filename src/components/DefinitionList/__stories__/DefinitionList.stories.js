import DefinitionList from '../index'
import definitionListData from './definitionListData'
export { default as Default } from './DefinitionListDefault.story'

export default {
  title: 'Components/DefinitionList',
  component: DefinitionList,
  args: {
    items: definitionListData,
  },
}
