import MultiSelect from '../index'

export default () => ({
  components: { MultiSelect },
  data: () => ({
    items: ['Alpha', 'Beta', 'Charlie', 'Delta', 'Echo'],
    selectedIds: [],
  }),
  template: `
    <div class="p-6">
      <MultiSelect
        :items="items"
        :onSelectedIdsChange="handleSelectedIdsChange"
        :selectedIds="selectedIds"
      />
    </div>
  `,
  methods: {
    handleSelectedIdsChange(selectedIds) {
      this.selectedIds = selectedIds
    },
  },
})
