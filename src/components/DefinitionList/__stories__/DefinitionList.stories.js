import DefinitionList from '../index'
export { default as Default } from './DefinitionListDefault.story'

export default {
  title: 'DefinitionList',
  component: DefinitionList,
  args: {
    items: [
      {
        term: 'Game',
        description: 'Banjo-Kazooie',
      },
      {
        term: 'Platform',
        description: 'Nintendo 64',
      },
      {
        term: 'Release Date',
        description: 'June 29, 1998',
      },
      {
        term: 'Rating',
        description: 'E',
      },
    ],
  },
}
