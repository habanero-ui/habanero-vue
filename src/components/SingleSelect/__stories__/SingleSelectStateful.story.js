import SingleSelect from '../index'

const Template = (args, { argTypes }) => ({
  components: { SingleSelect },
  props: Object.keys(argTypes),
  data: () => ({
    selectedIdState: undefined,
  }),
  template: `
    <div class="w-screen max-w-lg">
      <SingleSelect
        v-bind="$props"
        :onSelectedIdChange="handleSelectedIdChange"
        :selectedId="selectedIdState"
      />
    </div>
  `,
  methods: {
    handleSelectedIdChange(selectedId) {
      this.selectedIdState = selectedId
    },
  },
})

const SingleSelectStateful = Template.bind({})

SingleSelectStateful.argTypes = {
  onSelectedIdChange: { table: { disable: true } },
  selectedId: { table: { disable: true } },
}

export default SingleSelectStateful
