import Color from '../index'

export default () => ({
  components: { Color },
  template: `
    <div>
      <Color hex="C09E6B" name="gold" />
      <Color hex="F3F2E7" name="beige" />
      <Color hex="E4E3D9" name="dark-beige" />
    </div>
  `,
})
