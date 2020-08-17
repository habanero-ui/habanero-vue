import includes from 'lodash/includes'
import isNil from 'lodash/isNil'

export default function validateEnumProp({
  componentName,
  enumValues,
  propName,
  value,
}) {
  if (!isNil(value) && !includes(enumValues, value)) {
    // eslint-disable-next-line no-console
    console.error(
      `${componentName}: Bad value "${value}". The ${propName} prop must be one of the following:`,
      String(enumValues),
    )
  }
}
