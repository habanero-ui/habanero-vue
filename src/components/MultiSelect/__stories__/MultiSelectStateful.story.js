import MultiSelect from '../index'

export default () => ({
  components: { MultiSelect },
  data: () => ({
    items: ['Alpha', 'Beta', 'Charlie', 'Delta', 'Echo'],
    selectedIds: [],
  }),
  template: `
    <MultiSelect
      :items="items"
      :onSelectedIdsChange="handleSelectedIdsChange"
      :selectedIds="selectedIds"
    />
  `,
  methods: {
    handleSelectedIdsChange(selectedIds) {
      this.selectedIds = selectedIds
    },
  },
})
