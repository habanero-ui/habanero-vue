import Logo from '../index'

export default () => ({
  components: { Logo },
  template: `
    <div class="w-1/3 p-6">
      <Logo color="black" />
      <Logo color="white" class="bg-black" />
      <Logo color="gold" />
    </div>
  `,
})
