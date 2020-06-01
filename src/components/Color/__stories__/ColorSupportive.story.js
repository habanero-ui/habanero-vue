import Color from '../index'

export default () => ({
  components: { Color },
  template: `
    <div>
      <Color hex="3C6EEA" name="info" />
      <Color hex="3AA76D" name="success" />
      <Color hex="F1B34D" name="warning" />
      <Color hex="750E13" name="error-300" />
      <Color hex="BA1B23" name="error-200" />
      <Color hex="DA1E28" name="error-100" />
    </div>
  `,
})
