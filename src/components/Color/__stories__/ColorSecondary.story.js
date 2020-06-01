import Color from '../index'

export default () => ({
  components: { Color },
  template: `
    <div>
      <Color hex="A6EFF5" name="blue" />
      <Color hex="97ECC2" name="green" />
      <Color hex="FCB68A" name="orange" />
      <Color hex="FAB5D3" name="pink" />
      <Color hex="B6A4FF" name="purple" />
    </div>
  `,
})
