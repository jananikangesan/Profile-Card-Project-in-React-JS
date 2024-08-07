import React from 'react'
import PropTypes from 'prop-types'

export const OneofSample = (props) => {
    const {color}=props;
  return (
    <div style={{backgroundColor:color, padding:'20px',color:"white"}}>
        OneofSample {color}
        </div>
  )
}
OneofSample.propTypes={
    color:PropTypes.oneOf(["red","green","blue"]).isRequired
}
