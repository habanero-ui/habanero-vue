import Color from '../index'

export default () => ({
  components: { Color },
  template: `
    <div>
      <Color name="white" />
      <Color name="heavy-black" />
      <Color name="black" />
      <Color name="grey-500" />
      <Color name="grey-400" />
      <Color name="grey-300" />
      <Color name="grey-200" />
      <Color name="grey-100" />
    </div>
  `,
})
