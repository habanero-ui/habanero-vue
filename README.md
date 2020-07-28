# Habanero for Vue

Spur's Design System and Component Library

[![npm](https://img.shields.io/npm/v/habanero-vue.svg?style=flat-square)](https://www.npmjs.com/package/habanero-vue)

# Roadmap

## Known Issues

- Date/Time Picker inputs clear out when label/helper/error text changes.

## New Components

- [ ] Tooltip

## Misc

- [ ] Prevent clicking in custom DataTable cell components like Checkbox + Action from triggering row selection
- [ ] Add count bubble for Tab component
- [ ] Build a landing page for Habanero
- [ ] Add dynamic stories, separate from `*Default` stories: Checkbox, Drawer, RadioButton, RadioGroup, Slideover, Tabs, and Toggle
- [ ] Think about updating both Checkbox and Toggle checked to be either both black or both blue
- [ ] Update `README.md` with useful info + branding
- [ ] Update Select component to be custom, not native
- [ ] Establish z-index ordering for elements (so far `Modal`, `Select`, and `Spinner` leverage style)

# Discussion Points

## Global Styles

- To make the hover states lighter to match the Zeplin designs, should we use a different background color or opacty?
- What kind of things should we do to facilitate Valid HTML when the components are used?

## Icons

- We need optical adjustments done on icons to make sure they all appear to have the same optical weight.
