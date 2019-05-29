import React from 'react';
import Radium from 'radium'
import './Person.css'

const person = ( props ) =>
{

    //radium is a package in react which allow us to use inline styles with sudo selectors and media queries. 
    //below here shows using radium feature for media queries.
    const style = {
        '@media (mix-width: 900)': {
            width: '25px'
        }
    }

    return (
        <div className="Person" style={ style }>
            <p>I'm a person and I'm { Math.floor( Math.random() * 30 ) } old. - inline js functions with curly brackets.</p>
            <p onClick={ props.click }>I'm { props.name } and I'm { props.age } old. - dynamic properties showing with curly brackets.</p>
            <h3>{ props.children }</h3>
            <input type="text" onChange={ props.onChange } value={ props.name } />
            <button onClick={ props.onDelete }>Delete me</button>
        </div>
    );
}
export default Radium( person );
