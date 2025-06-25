import React from 'react'
import "./LargeButton.css"

function LargeButton({label,type}) {
  return (
    <div>
      <button className="large-button" type={type}>{label}</button>
    </div>
  )
}

export default LargeButton