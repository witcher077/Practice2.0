import React, { useContext } from 'react'
import { useCount } from './ContextAPI/AppContext'

const A = () => {

  const {count}=useCount()

  return (
    <div>{count}</div>
  )
}

export default A