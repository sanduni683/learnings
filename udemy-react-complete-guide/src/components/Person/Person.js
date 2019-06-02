import React, { useEffect, useRef } from 'react';
import './Person.css'


const person = ( props ) =>
{
    console.log( '[Person.js] rendering' )

    const randomNumber = Math.random()
    if ( randomNumber > 0.9 )
    {
        throw new Error( 'Random number is less than 0.7 , got an error since if condition fails' )
    }

    return (
        <div className="Person">
            <p>I'm a person and I'm { Math.floor( randomNumber * 30 ) } old. - inline js functions with curly brackets.</p>
            <p onClick={ props.click }>I'm { props.name } and I'm { props.age } old. - dynamic properties showing with curly brackets.</p>
            <h3>{ props.children }</h3>
            <input type="text" onChange={ props.onChange } value={ props.name } />
            <button onClick={ props.onDelete }>Delete me</button>
        </div>
    );
}
export default person;
