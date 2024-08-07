import React from 'react'

export const SampleFunction = (props) => {
  const {handleClick}=props;
    return (
    <div>
        SampleFunction
        <button onClick={handleClick}>click me</button>

            </div>
  )
}
