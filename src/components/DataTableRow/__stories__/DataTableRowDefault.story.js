import { action } from '@storybook/addon-actions'

import DataTableRow from '../index'

export default () => ({
  components: { DataTableRow },
  data: () => ({
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
  }),
  template: `
    <DataTableRow
      :columns="columns"
      :onRowSelect="onRowSelect"
      :row="row"
    />
  `,
  methods: {
    onRowSelect: action('onRowSelect'),
  },
})
