import PropTypes from 'prop-types'

import selectInputPropTypes from '../AbstractSelectInput/types.js'

export default {
  ...selectInputPropTypes,
  mode: PropTypes.oneOf(['dialog', 'dropdown'])
}

export const defaultProps = {
  enabled: true,
  mode: 'dialog',
  options: [{ value: 0, label: '0' }],
  value: 0
}
