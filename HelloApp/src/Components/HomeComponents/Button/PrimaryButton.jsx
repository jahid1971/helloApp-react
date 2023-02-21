import React from 'react'

const PrimaryButton = ({ children, classes, handler }) => {
  return (
    <button
      onClick={handler}
      className={`hover:text-gray-100 bg-gradient-to-r from-[#ea422c] to-[#e35f4e] text-white ${classes}`}
    >
      {children}
    </button>
  )
}

export default PrimaryButton