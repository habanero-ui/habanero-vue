# Habanero for Vue

Spur's Design System and Component Library

[![npm](https://img.shields.io/npm/v/habanero-vue.svg?style=flat-square)](https://www.npmjs.com/package/habanero-vue)

# Roadmap

- [ ] Update README with useful info + branding
- [ ] Add more to .npmignore to reduce installed size
- [ ] Input components: Text, Textarea, Radio, Checkbox, Select
- [ ] EmptyState component
- [ ] ProgressBar component
- [ ] StepList component
- [ ] Fill out Roadmap

# Discussion Points

## Buttons

- How do we want to handle hover/active states?
  - Right now, we are using `opacity` to handle hover/active states instead of separate colors.

## Global Styles

- How do we want to handle global styles like using #3b3e3b as the font color for icons, text, etc.?
  - For example, right now the default color of icons is #000, but really all the Spur app should use #3b3e3b as the default color. If we don't setup global styles, then we would be required to pass `text-black` on every icon just to make sure it is the default color.
