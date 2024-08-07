import { formatDateProperty } from '@adminjs/design-system'

import { PropertyType } from '../../../../backend/adapters/property/base-property.js'

export default (value: Date, propertyType: PropertyType): string => {
  if (!value) {
    return ''
  }
  const date = propertyType === 'date' ? new Date(`${value}T00:00:00`) : new Date(value)
  if (date) {
    return formatDateProperty(date, propertyType)
  }
  return ''
}
