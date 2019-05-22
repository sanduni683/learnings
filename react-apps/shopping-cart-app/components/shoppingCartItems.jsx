import React, { Component } from 'react';

class ShoppingCartItems extends Component
{
    //==============Single source of truth==================================================
    //controlled component doesn't have any local states.
    //It receives all the data via props
    //and raises events whenever data need to be changed.
    //so this component entirely controlled by it's parent.

    componentDidUpdate( prevProps, prevStates )
    {
        console.log( "shoppingCartItems-Updated , means we have new state or new props, when there is change make ajax request to get new data from the server" )
        console.log( 'prevoius props', prevProps )
        console.log( 'prevoius props', prevStates )
    }

    componentWillUnmount()
    {
        console.log( "shoppingCartItems-unmounted" )
    }

    render()
    {
        console.log( "shoppingCartItems -rendered" )
        return (
            <div>
                {/*  {this.props.children} {/* calling children props */ }
                <span style={ { 'font-size': '100%' } } className="badge badge-secondary xl-2">{ this.props.counters.name }</span> {/* handle events */ }
                <span style={ { 'font-size': '100%' } } className={ this.getBadgeClasses() }>{ this.formatCount() }</span> {/* rendering methods dynamically */ }
                <button onClick={ () => this.props.onIncrement( this.props.counters ) } className="btn btn-primary btn-sm">Add</button> {/* handle events */ }
                <button onClick={ () => this.props.onDelete( this.props.counters.id ) } className="btn btn-danger btn-sm m-2">Delete</button>
                <hr />
            </div>
        );
    }

    getBadgeClasses()
    {
        let classes = "badge m-2 ";
        classes += this.props.counters.value == 0 ? "badge-warning" : "badge-primary"
        return classes;
    }

    formatCount()
    {
        //object distructoring
        const value = this.props.counters.value
        return value === 0 ? 'Zero' : value
    }
}

export default ShoppingCartItems;