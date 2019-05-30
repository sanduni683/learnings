import React, { Component } from 'react';
import './Person.css'

class Teacher extends Component
{
    render()
    {
        console.log( '[ComponentsLifecycleBasic] Child components(Person.js) rendering' )
        return (
            <div className="Person">
                <p>I'm { this.props.name } and I'm { this.props.age } old.</p>
                <h3>{ this.props.children }</h3>
                <input type="text" onChange={ this.props.onChange } value={ this.props.name } />
                <button onClick={ this.props.onDelete }>Delete me</button>
            </div>
        );
    }
}
export default Teacher;
