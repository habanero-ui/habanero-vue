import { action } from '@storybook/addon-actions'

import DataTableRow from '../index'
export { default as Default } from './DataTableRowDefault.story'

export default {
  title: 'Components/DataTableRow',
  component: DataTableRow,
  argTypes: {
    columns: { table: { disable: true } },
  },
  args: {
    columns: [
      {
        name: 'Rank',
        key: 'id',
      },
      {
        name: 'Movie',
        key: 'movie.name',
      },
      {
        name: 'Director',
        getValue: ({ movie }) => {
          return `${movie.director.firstName} ${movie.director.lastName}`
        },
        key: 'movie.director.firstName',
      },
      {
        name: 'Budget',
        getValue: ({ movie }) => {
          return movie.costCents
            ? `$${(movie.costCents / 100)
                .toFixed(2)
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`
            : 'N/A'
        },
        key: 'movie.costCents',
      },
      {
        name: 'Release Year',
        key: 'movie.year',
      },
      {
        name: 'IMDB Rating',
        key: 'rating',
      },
    ],
    onRowSelect: action('onRowSelect'),
    row: {
      id: 1,
      movie: {
        name: 'The Shawshank Redemption',
        costCents: 2500000000,
        director: {
          firstName: 'Rob',
          lastName: 'Marshall',
        },
        year: 1994,
      },
      rating: 9.2,
    },
  },
}
