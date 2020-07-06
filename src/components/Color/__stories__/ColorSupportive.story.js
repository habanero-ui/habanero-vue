import Color from '../index'

export default () => ({
  components: { Color },
  template: `
    <div>
      <Color name="border" />
      <Color name="error" />
      <Color name="info" />
      <Color name="offwhite" />
      <Color name="subtle" />
      <Color name="success" />
      <Color name="warning" />
    </div>
  `,
})
