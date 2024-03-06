import React from 'react'
import { personNames } from '../types/Types'
function PersonList(props:personNames) {
  return (
    <div>
        <div>
            {props.names.map(name => {
                return (
                    <>
                    <p>{name.first}</p>
                    <p>{name.last}</p>
                    </>

                )
            })}
        </div>
    </div>
  )
}

export default PersonList