import React from 'react'

const Album = (props) => {
  return (
    <div>
    <p>{props.trackName}</p>
    <img src={props.image} />
    </div>
  )
}

export default Album