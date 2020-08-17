import Inline from '../../Inline/index'
import Tag from '../index'

const Template = (args, { argTypes }) => ({
  components: { Inline, Tag },
  props: Object.keys(argTypes),
  template: `
    <div class="max-w-md">
      <Inline space="small">
        <Tag
          v-for="tag in tags"
          v-bind="$props"
          :key="tag.text"
          :onDelete="isDeleteVisible ? onDelete : undefined"
          :text="tag.text"
          :value="tag.value"
        />
      </Inline>
    </div>
  `,
})

const TagList = Template.bind({})

TagList.args = {
  tags: [
    { text: 'Alpha', value: 'a' },
    { text: 'Bravo', value: 'b' },
    { text: 'Charlie', value: 'c' },
    { text: 'Delta', value: 'd' },
    { text: 'Echo', value: 'e' },
    { text: 'Foxtrot', value: 'f' },
    { text: 'Golf', value: 'g' },
  ],
}

export default TagList
