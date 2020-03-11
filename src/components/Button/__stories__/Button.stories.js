import Button from "../index";

export default {
  title: "Button",
  component: Button
};

export const Text = () => ({
  components: { Button },
  template: `
    <Button
      @click.native="action">
      Hello Button
    </Button>
  `,
  methods: { action: () => console.log("Clicked!") }
});
