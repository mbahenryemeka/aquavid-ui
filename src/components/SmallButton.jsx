import React from 'react'
import "./SmallButton.css"

function SmallButton({label, onClick}) {
  return (
    <div>
      <button onClick={onClick} className="small-button">{label}</button>
    </div>
  )
}

export default SmallButton