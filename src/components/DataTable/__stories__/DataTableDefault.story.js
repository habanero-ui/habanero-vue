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
          accessor: 'id',
        },
        {
          name: 'Movie',
          accessor: 'movie.name',
        },
        {
          name: 'Director',
          accessor: ({ movie }) => {
            return `${movie.director.firstName} ${movie.director.lastName}`
          },
        },
        {
          name: 'Budget',
          accessor: ({ movie }) => {
            return movie.costCents
              ? `$${(movie.costCents / 100)
                  .toFixed(2)
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`
              : 'N/A'
          },
        },
        {
          name: 'Release Year',
          accessor: 'movie.year',
        },
        {
          name: 'IMDB Rating',
          accessor: 'rating',
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
