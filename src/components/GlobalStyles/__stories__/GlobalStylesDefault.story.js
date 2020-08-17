export default ((args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: `
    <div>
      <p>This is some text</p>
      <p>This is some text with a <a href="#" target="_blank">Link</a> inside of it.</p>
    </div>
  `,
})).bind({})
