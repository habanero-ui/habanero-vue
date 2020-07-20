import { action } from '@storybook/addon-actions'
import { object } from '@storybook/addon-knobs'

import DataTable from '../index'
import tableData from './tableData.js'

export default () => ({
  components: { DataTable },
  props: {
    columns: {
      default: object('columns', [
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
      ]),
    },
    rows: {
      default: object('rows', tableData),
    },
  },
  template: `
    <div class="p-6"> 
      <DataTable
        :columns="columns"
        :onRowSelect="onRowSelect"
        :rows="rows"
      />
    </div>
  `,
  methods: {
    onRowSelect: action('onRowSelect'),
  },
})
