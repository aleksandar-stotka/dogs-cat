import React from 'react';
import { personProps } from '../types/Types'

function Person(props: personProps) {
    return (
        <>
         <div>{props.name.first}</div>
         <p>{props.name.last}</p>
        </>
       
    );
}

export default Person;
