import React from 'react'
import "./LargeButton.css"

function LargeButton({label}) {
  return (
    <div>
      <button className="large-button">{label}</button>
    </div>
  )
}

export default LargeButton