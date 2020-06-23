# Habanero for Vue

Spur's Design System and Component Library

[![npm](https://img.shields.io/npm/v/habanero-vue.svg?style=flat-square)](https://www.npmjs.com/package/habanero-vue)

# Roadmap

## New Components

- [ ] Avatar component
- [ ] Badge component
- [ ] Breadcrumbs component
- [ ] DatePicker component
- [ ] EmptyState component
- [ ] FileUpload component
- [ ] Profile component
- [ ] ProgressBar component
- [ ] Search component
- [ ] StepList component
- [ ] Table component
- [ ] Textarea component
- [ ] TextLink component
- [ ] Toast component
- [ ] Tooltip component

## Misc

- [ ] Add "With Image" for ListItem component
- [ ] Add count bubble for Tab component
- [ ] Add more to .npmignore to reduce installed size
- [ ] Build a landing page for Habanero
- [ ] Make stories more interactive: Checkbox, Drawer, RadioButton, RadioGroup, Slideover, Tabs, and Toggle
- [ ] Think about updating both Checkbox and Toggle checked to be either both black or both blue
- [ ] Update `README.md` with useful info + branding
- [ ] Update Select component to be custom, not native

# Discussion Points

## Global Styles

- How do we want to handle global styles like using #3b3e3b as the font color for icons, text, etc.?
  - For example, right now the default color of icons is #000, but really all the Spur app should use #3b3e3b as the default color. If we don't setup global styles, then we would be required to pass `text-black` on every icon just to make sure it is the default color.
