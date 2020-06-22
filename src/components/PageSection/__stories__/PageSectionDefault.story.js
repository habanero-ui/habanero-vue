import { action } from '@storybook/addon-actions'
import { text } from '@storybook/addon-knobs'
import PageSection from '../index'

export default () => ({
  components: { PageSection },
  props: {
    actionText: {
      default: text('actionText', 'Action'),
    },
    titleText: {
      default: text('titleText', 'Section'),
    },
  },
  template: `
    <div class="flex justify-start p-6">
      <PageSection
        :actionText="actionText"
        :titleText="titleText"
        :onActionClick="onActionClick">
        <div>Put some content here...</div>
      </PageSection>
    </div>
  `,
  methods: {
    onActionClick: action('onActionClick'),
  },
})
