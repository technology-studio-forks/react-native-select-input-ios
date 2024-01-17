import PropTypes from 'prop-types'

export default {
  enabled: PropTypes.bool,
  onEndEditing: PropTypes.func,
  onSubmitEditing: PropTypes.func,
  onValueChange: PropTypes.func,
  options: PropTypes.array,
  value: PropTypes.any
}
