import React from "react"

import "./style.css"

const Logo = props => {
  const {classGit, classSearch} = props
  return (    
      <h1 className= {classGit}>
        Github <span className= {classSearch}>Search</span>
      </h1>    
  )
}

export default Logo