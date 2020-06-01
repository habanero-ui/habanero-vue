import Color from '../index'

export default () => ({
  components: { Color },
  template: `
    <div>
      <Color name="blue" />
      <Color name="green" />
      <Color name="orange" />
      <Color name="pink" />
      <Color name="purple" />
    </div>
  `,
})
