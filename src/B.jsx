import React from 'react'
import { useCount } from './ContextAPI/AppContext'


const B = () => {

  const {setCount,count}=useCount()

  return (
    <button onClick={()=>{setCount(count+1)}}>click me!</button>
  )
}

export default B