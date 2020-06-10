import Tabs from '../index'

export default () => ({
  components: { Tabs },
  template: `
    <div class="p-6">
      <Tabs>
        <Tab>Home</Tab>
        <Tab>About</Tab>
        <Tab>Contact</Tab>
      </Tabs>
    </div>
  `,
})
