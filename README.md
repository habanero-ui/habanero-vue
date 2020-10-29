# Habanero for Vue

Spur's Design System and Component Library

[![npm](https://img.shields.io/npm/v/habanero-vue.svg?style=flat-square)](https://www.npmjs.com/package/habanero-vue)

# Roadmap

- [ ] Icon sizing and consistency (PD-79)
- [ ] Improved validation support for DataTable (PD-82)

## Known Issues

- Date/Time Picker inputs clear out when label/helper/error text changes.

## Misc

- [ ] Update `README.md` with useful info + branding
- [ ] Update Select component to be custom, not native
- [ ] Establish z-index ordering for elements (so far `Modal`, `Select`, and `Spinner` leverage style)
- [ ] Swap out chevrons on Flatpickr to use our icons
- [ ] Support better styling for Flatpickr when date and time selections are both available

# Discussion Points

- Should we create a component for alerts/warning after an input?
- What kind of things should we do to facilitate Valid HTML when the components are used?
- Support helperText other than errors below elements in FormGroup
