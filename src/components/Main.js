//react
import React from 'react'
//context
import { useGlobalContext } from "../context"

//components 
const Main = () => {

  const { drinks } = useGlobalContext();

  return (
    <div>
      <h1>MAIN</h1>
    </div>
  )
}

export default Main
