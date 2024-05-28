import React from 'react'

const Commonbtn = (props) => {
  return (
    <>
        <button className={`common_btn ${props.bg} ff-inter text-white fw-semibold text-16 lh-29`}>{props.text}</button>
    </>
  )
}

export default Commonbtn