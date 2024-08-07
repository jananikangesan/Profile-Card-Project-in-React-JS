import React from 'react'
import PropTypes from 'prop-types'

export const ArraySample = (props) => {
  const {lists}=props;
    return (
    <div>
        <h2>Items List</h2>
        <ul>
            {lists.map((item)=>(
                <li key={item.id}>{item.name}</li>
            ))}

        </ul>
    </div>
  )
}

ArraySample.propTypes={
    lists:PropTypes.arrayOf(
        PropTypes.shape({
            id:PropTypes.number.isRequired,
            name:PropTypes.string.isRequired
        })
    ).isRequired,
}
