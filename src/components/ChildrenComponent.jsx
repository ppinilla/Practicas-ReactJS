import React from 'react'

const ChildrenComponent = ({title, children}) => {
  return (
    <div>
        <h1>{title}</h1>
        <div>{children}</div>
    </div>
  )
}

export default ChildrenComponent