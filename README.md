# Habanero for Vue

Spur's Design System and Component Library

[![npm](https://img.shields.io/npm/v/habanero-vue.svg?style=flat-square)](https://www.npmjs.com/package/habanero-vue)

# Roadmap

## New Components

- [ ] FileUpload
- [ ] Textarea
- [ ] Tooltip

## Misc

- [ ] Add "With Image" for ListItem component
- [ ] Add count bubble for Tab component
- [ ] Build a landing page for Habanero
- [ ] Add dynamic stories, separate from `*Default` stories: Checkbox, Drawer, RadioButton, RadioGroup, Slideover, Tabs, and Toggle
- [ ] Think about updating both Checkbox and Toggle checked to be either both black or both blue
- [ ] Update `README.md` with useful info + branding
- [ ] Update Select component to be custom, not native

# Discussion Points

## Global Styles

- How do we want to handle global styles like using #3b3e3b as the font color for icons, text, etc.?
  - For example, right now the default color of icons is #000, but really all the Spur app should use #3b3e3b as the default color. If we don't setup global styles, then we would be required to pass `text-black` on every icon just to make sure it is the default color.
- To make the hover states lighter to match the Zeplin designs, should we use a different background color or opacty?
- What kind of things should we do to facilitate Valid HTML when the components are used?
