import React from 'react'
import "./SmallButton.css"

function SmallButton({label}) {
  return (
    <div>
      <button className="small-button">{label}</button>
    </div>
  )
}

export default SmallButton