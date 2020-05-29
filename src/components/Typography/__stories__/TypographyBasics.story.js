import Typography from '../index'

export default () => ({
  components: { Typography },
  template: `
    <div>
      <Typography variant="h1">Header 1</Typography>
      <Typography variant="h2">Header 2</Typography>
      <Typography variant="h3">Header 3</Typography>
      <Typography variant="h4">Header 4</Typography>
      <Typography variant="h5">Header 5</Typography>
      <Typography variant="h6">Header 6</Typography>
      <Typography variant="body-large">Body Large</Typography>
      <Typography variant="body-small">Body Small</Typography>
      <Typography variant="body-extra-small">Body Extra Small</Typography>
      <Typography variant="label-large">Label Large</Typography>
      <Typography variant="label-small">Label Small</Typography>
      <Typography variant="button">Button</Typography>
    </div>
  `,
})
