import React from "react"

import "./style.css"

const Logo = props => {
  const {classGit, classSearch} = props
  return (
    <div>
      <p className= {classGit}>
        Github <span className= {classSearch}>Search</span>
      </p>
    </div>
  )
}

export default Logo