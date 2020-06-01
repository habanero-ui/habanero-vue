import Color from '../index'

export default () => ({
  components: { Color },
  template: `
    <div>
      <Color name="info" />
      <Color name="success" />
      <Color name="warning" />
      <Color name="error-300" />
      <Color name="error-200" />
      <Color name="error-100" />
    </div>
  `,
})
