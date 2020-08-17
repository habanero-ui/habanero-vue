import MultiSelect from '../index'

const Template = (args, { argTypes }) => ({
  components: { MultiSelect },
  props: Object.keys(argTypes),
  data: () => ({
    selectedIdsState: [],
  }),
  template: `
    <div class="w-screen max-w-lg">
      <MultiSelect
        v-bind="$props"
        :onSelectedIdsChange="handleSelectedIdsChange"
        :selectedIds="selectedIdsState"
      />
    </div>
  `,
  methods: {
    handleSelectedIdsChange(selectedIds) {
      this.selectedIdsState = selectedIds
    },
  },
})

const MultiSelectStateful = Template.bind({})

MultiSelectStateful.argTypes = {
  onSelectedIdsChange: { table: { disable: true } },
  selectedIds: { table: { disable: true } },
}

export default MultiSelectStateful
