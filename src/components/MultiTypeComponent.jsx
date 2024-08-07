import React from 'react'
import PropTypes from 'prop-types'
export const MultiTypeComponent = (props) => {
  return (
    <div>
        MultiTypeComponent {props.value}
    </div>
  )
}
MultiTypeComponent.propTypes={
    value:PropTypes.oneOfType([PropTypes.string,PropTypes.number,PropTypes.bool]).isRequired,
}

