import React, { Component, Fragment } from 'react';
import './Person.css';
import withClassFunction from '../hoc/withClassFunction';
import PropTypes from 'prop-types';
import AuthContext from '../Context/auth-context'

class Teacher extends Component
{
    constructor( props )
    {
        super( props );
        this.inputElementRef = React.createRef();
    }
    //This is the second way of using context, first type can only accessed via jsx code, 
    //this can be accessed anywhere
    //should be a static property,can be access from outside without need to intantiate   
    static contextType = AuthContext;

    componentDidMount()
    {
        //document.querySelector( 'input' ).focus(); //focus input feild of first element -but this is html way
        //react uses ref for select aan element -ref is a special key and they can be use in 2 ways
        //this.inputElement.focus();
        this.inputElementRef.current.focus();
        console.log( this.context.authanticated )
    }

    render()
    {
        console.log( '[Teacher.js] rendering' )
        return (
            <Fragment> {/*<div className="Person"> */ }

                {/*This is the first way of using context, first type can only accessed via jsx code
                AuthContext.Consumer takes only function as a child.this function will get our context object. 
                <AuthContext.Consumer>
                    { ( context ) => context.authanticated ? <p>This person is authanticated</p> : <p>Please log in</p> }
                </AuthContext.Consumer >
                */ }

                { this.context.authanticated ? <p>This person is authanticated</p> : <p>Please log in</p> }

                <p>I'm { this.props.name } and I'm { this.props.age } old.</p>
                <h3>{ this.props.children }</h3>
                <input
                    type="text"
                    // ref={ ( inputEl ) => { this.inputElement = inputEl } } //function approch for ref
                    ref={ this.inputElementRef } //react.ref version
                    onChange={ this.props.onChange }
                    value={ this.props.name }
                />
                <button onClick={ this.props.onDelete }>Delete me</button>
            </Fragment>
        );
    }
}
//checking prop types
Teacher.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    onChange: PropTypes.func,
    onDelete: PropTypes.func
}

export default withClassFunction( Teacher, "Person" );
