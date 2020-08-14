import MultiSelect from '../index'

export default (args, { argTypes }) => ({
  components: { MultiSelect },
  props: Object.keys(argTypes),
  data: () => ({
    selectedIdsState: [],
  }),
  template: `
    <div class="w-screen max-w-lg">
      <MultiSelect v-bind="$props" :onSelectedIdsChange="handleSelectedIdsChange" :selectedIds="selectedIdsState" />
    </div>
  `,
  methods: {
    handleSelectedIdsChange(selectedIds) {
      this.selectedIdsState = selectedIds
    },
  },
})
