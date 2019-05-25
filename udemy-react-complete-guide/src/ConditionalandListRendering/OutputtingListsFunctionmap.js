import React, { Component } from 'react';
import App from '../App.css'
import Person from '../Person/Person';

class OutputtingListsFunctionmap extends Component
{
    state = {
        persons: [
            { id: 'asdf1', name: 'Jya', age: 34 },
            { id: 'asdf2', name: 'Taka', age: 24 },
            { id: 'asdf3', name: 'Kala', age: 30 }
        ],
        otherPerson: 'Something',
        showPersons: false
    }

    togglePersonsHandler = () =>
    {
        const togglePersons = this.state.showPersons
        this.setState( { showPersons: !togglePersons } )
    }

    deletePersonsHandler = ( personIndex ) =>
    {
        //update the state immutabaly, without mutating the original state, create a copy and update it.
        //1. create a copy of persons array(copy of original state)
        //2. Calling slice method without arguments copy an array and returns a new one 
        //3. const persons = this.state.persons.splice()
        // This is bad practice .same can be done with ES6 spread operator [...]
        // spread out the elements in the original array into a list of new elements
        const persons = [ ...this.state.persons ]
        persons.splice( personIndex, 1 )
        this.setState( { persons: persons } )
    }

    changePersonsHandler = ( event, personId ) =>
    {
        const personIndex = this.state.persons.findIndex( p =>
        {
            return p.id === personId
        } )
        const person = {
            ...this.state.persons[ personIndex ]
        }
        person.name = event.target.value

        const persons = [ ...this.state.persons ]
        persons[ personIndex ] = person

        this.setState( { persons: persons } )
    }

    render()
    {
        const style = {
            backgroundColor: 'green',
            font: 'inherit',
            border: '1px solid black',
            padding: '8px',
            cursor: 'pointer'
        }

        let persons = null;
        if ( this.state.showPersons )
        {
            persons = (
                <div>
                    {/* 
                     * outputting list using map method
                     * convert js array to jsx array using map method and return new objects array(<Person />)
                     * map simply maps every element in a given array(persons) into something else
                    
                    { this.state.persons.map( person =>
                    {
                        return <Person name={ person.name } age={ person.age } />
                        return <Person name={ person.name } age={ person.age } />
                        return <Person name={ person.name } age={ person.age } />
                    } ) }
                    */}

                    {/*passing second argument index to the DeletePersonsHandler method(by binding index ) */ }
                    { this.state.persons.map(( person, index ) =>
                    {
                        return <Person
                            name={ person.name }
                            age={ person.age }
                            onDelete={ () => this.deletePersonsHandler( index ) }
                            onChange={ ( event ) => this.changePersonsHandler( event, person.id ) }
                            key={ person.id }
                        />
                    } ) }

                </div> );
        }

        return (
            <div className="App">
                <button style={ style } onClick={ this.togglePersonsHandler }>Show persons</button>
                { persons }
            </div>
        );
    }
}

export default OutputtingListsFunctionmap;
