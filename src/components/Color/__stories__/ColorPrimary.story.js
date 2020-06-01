import Color from '../index'

export default () => ({
  components: { Color },
  template: `
    <div>
      <Color name="gold" />
      <Color name="beige" />
      <Color name="dark-beige" />
    </div>
  `,
})
