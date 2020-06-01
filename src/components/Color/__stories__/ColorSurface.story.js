import Color from '../index'

export default () => ({
  components: { Color },
  template: `
    <div>
      <Color hex="FFFFFF" name="white" />
      <Color hex="242324" name="heavy-black" />
      <Color hex="3E3B3E" name="black" />
      <Color hex="7C7C86" name="grey-500" />
      <Color hex="B2B2B2" name="grey-400" />
      <Color hex="E5E5E5" name="grey-300" />
      <Color hex="F2F4F6" name="grey-200" />
      <Color hex="F8F9FA" name="grey-100" />
    </div>
  `,
})
