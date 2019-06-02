import React from 'react';
import classes from './Child.css'

const child = ( props ) =>
{
    return (
        <div className={ classes.Child } >
            <p>I'm { props.name } and I'm { props.age } old.</p>
            <input type="text" onChange={ props.onChange } value={ props.name } />
            <button onClick={ props.onDelete }>Delete me</button>
        </div>
    );
}
export default child;
