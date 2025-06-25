import React from 'react'
import "./LargeButton.css"

function LargeButton({label,type}) {
  return (
    
      <button className="large-button" type={type}>{label}</button>
    
  )
}

export default LargeButton