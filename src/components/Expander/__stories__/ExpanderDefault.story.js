import Expander from '../index'

export default () => ({
  components: { Expander },
  template: `
    <div class="absolute inset-0">
      <Expander
        titleText="Expander">
        <div>Some Content</div>
      </Expander>
    </div>
  `,
})
