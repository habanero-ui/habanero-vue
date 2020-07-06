import Color from '../index'

export default () => ({
  components: { Color },
  template: `
    <div>
      <Color name="white" />
      <Color name="heavy-black" />
      <Color name="black" />
    </div>
  `,
})
