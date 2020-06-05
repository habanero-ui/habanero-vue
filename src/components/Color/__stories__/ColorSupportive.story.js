import Color from '../index'

export default () => ({
  components: { Color },
  template: `
    <div>
      <Color name="error" />
      <Color name="info" />
      <Color name="subtle" />
      <Color name="success" />
      <Color name="warning" />
    </div>
  `,
})
