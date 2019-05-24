import React from 'react';
import './Person.css'

const person = ( props ) =>
{
    return (
        <div className="Person">
            <p>I'm a person and I'm { Math.floor( Math.random() * 30 ) } old. - inline js functions with curly brackets.</p>
            <p onClick={ props.click }>I'm { props.name } and I'm { props.age } old. - dynamic properties showing with curly brackets.</p>
            <h3>{ props.children }</h3>
            <input type="text" onChange={ props.onChange } />
        </div>
    );
}
export default person;
