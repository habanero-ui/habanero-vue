import difference from 'lodash/difference'
import every from 'lodash/every'
import includes from 'lodash/includes'
import map from 'lodash/map'
import omit from 'lodash/omit'
import union from 'lodash/union'

import DataTableCheckboxCell from '../../DataTableCheckboxCell'
import DataTableHeaderCheckboxCell from '../../DataTableHeaderCheckboxCell'
import DataTable from '../index'

const Template = (args, { argTypes }) => ({
  components: { DataTable },
  props: Object.keys(omit(argTypes, ['columns'])),
  data: () => ({
    selectedIds: [],
  }),
  computed: {
    areAllIdsSelected() {
      return every(this.rows, ({ id }) => includes(this.selectedIds, id))
    },

    columns() {
      return [
        {
          cellComponent: DataTableCheckboxCell,
          getValue: ({ id }) => includes(this.selectedIds, id),
          headerCellComponent: DataTableHeaderCheckboxCell,
          headerIsChecked: this.areAllIdsSelected,
          name: '',
          onHeaderIsCheckedChange: this.handleHeaderIsCheckedChange,
          onIsCheckedChange: this.handleRowIsCheckedChange,
        },
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
      ]
    },
  },
  template: '<DataTable v-bind="$props" :columns="columns" />',
  methods: {
    handleHeaderIsCheckedChange(isChecked) {
      this.selectedIds = isChecked ? map(this.rows, 'id') : []
    },

    handleRowIsCheckedChange({ id }, isChecked) {
      this.selectedIds = isChecked
        ? union(this.selectedIds, [id])
        : difference(this.selectedIds, [id])
    },
  },
})

const DataTableMultiselect = Template.bind({})

DataTableMultiselect.argTypes = {
  columns: { table: { disable: true } },
}

export default DataTableMultiselect
