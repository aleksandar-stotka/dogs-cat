import React from 'react'
import { greetProops } from '../types/Types'
function Greet(props:greetProops) {
  return (
    <>
    {props.isLogin ? `welcome ${props.name} you have ${props.messageCount} ` : "welcome guest"}
    </>
    
  )
}

export default Greet