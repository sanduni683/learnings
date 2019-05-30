import React, { Component } from 'react'
import Radium, { StyleRoot } from 'radium'
import Person from '../Person/Person'
import '../../containers/App.css'

class StylesDynamically extends Component
{
    state = {
        persons: [
            { id: 'asdf1', name: 'Jya', age: 34 },
            { id: 'asdf2', name: 'Taka', age: 24 },
            { id: 'asdf3', name: 'Kala', age: 30 }
        ],
        showPersons: false
    }

    togglePersonsHandler = () =>
    {
        const togglePersons = this.state.showPersons
        this.setState( { showPersons: !togglePersons } )
    }

    deletePersonsHandler = ( personIndex ) =>
    {
        const persons = [ ...this.state.persons ]
        persons.splice( personIndex, 1 )
        this.setState( { persons: persons } )
    }

    render()
    {
        const style = {
            backgroundColor: 'green',
            color: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer',
            //radium is a package in react which allow us to use inline styles with sudo selectors and media queries. 
            //below here shows using radium feature for sudo-selectors.
            ':hover': {
                backgroundColor: 'lightgreen',
                color: 'black'
            }
        }

        let persons = null
        if ( this.state.showPersons )
        {
            persons = (
                <div>
                    { this.state.persons.map(( person, index ) =>
                    {
                        return < Person
                            key={ person.id }
                            name={ person.name }
                            age={ person.age }
                            onDelete={ () => this.deletePersonsHandler( index ) }
                        />
                    } )
                    }
                </div> )
            //change backgroundColor style dynamically, since {style} is js variable
            style.backgroundColor = 'red';
            // simply set sudo-style and now not dot hover because it's a string, we need to use square brackets.
            style[ ':hover' ] = {
                backgroundColor: 'pink',
                color: 'black'
            }
        }

        // return array of strings =>   "ClassRed ClassBold"
        // const classes = [ 'ClassRed', 'ClassBold' ].join( ' ' )

        //dynamically added and assigned classes (class names)        
        let classes = []
        if ( this.state.persons.length <= 2 )
        {
            classes.push( 'ClassBold' ) // classes = ["ClassBold"]
        }
        if ( this.state.persons.length <= 1 )
        {
            classes.push( 'ClassRed' ) // classes = ["ClassBold", "ClassRed"]
        }

        return (
            /* wrapping whole the div with StyleRoot, so that we can use css media-queries. for css sudo -selectors its enough to wrap only with Radium , but for media queris need to wrap with StyleRoot */
            < StyleRoot >
                <div className="App">
                    <p className={ classes.join( ' ' ) }>Render Person elements from Person components</p>
                    <button style={ style } onClick={ this.togglePersonsHandler }>Show persons</button>
                    { persons }
                </div >
            </ StyleRoot >
        );
    }
}
//radium as a function and wrap your app with it.
//this is called higher order component
export default Radium( StylesDynamically );