import React, { Component } from 'react';
import App from '../../containers/App.css'
import Teachers from '../Person/Teachers';

class ComponentsLifecycleBasic extends Component
{
    constructor( props )
    {
        super( props )
        console.log( '[ComponentsLifecycleBasic] constructor' )
        this.state = {
            persons: [
                { id: 'asdf1', name: 'Jya', age: 34 },
                { id: 'asdf2', name: 'Taka', age: 24 },
                { id: 'asdf3', name: 'Kala', age: 30 }
            ],
            otherPerson: 'Something',
            showPersons: false
        }
    }

    static getDerivedStateFromProps( props, state ) //usee static keyword 
    {
        console.log( '[ComponentsLifecycleBasic] getDerivedStateFromProps', props )
        return state; //updated state
    }

    componentWillMount() // preparing state correctly
    {
        console.log( '[ComponentsLifecycleBasic] componentWillMount' )
    }

    componentDidMount() //for http requests
    {
        console.log( '[ComponentsLifecycleBasic] componentDidMount' )
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
        console.log( '[ComponentsLifecycleBasic] render' )
        const style = {
            backgroundColor: 'green',
            font: 'inherit',
            border: '1px solid black',
            padding: '8px',
            cursor: 'pointer'
        }

        let teachers = null;
        if ( this.state.showPersons )
        {
            teachers = (
                <div>
                    <Teachers
                        teachers={ this.state.persons }
                        onDelete={ this.deletePersonsHandler }
                        onChange={ this.changePersonsHandler }
                    />
                </div> );
        }

        return (
            <div className="App">
                <button style={ style } onClick={ this.togglePersonsHandler }>Show Teachers</button>
                { teachers }
            </div>
        );
    }
}

export default ComponentsLifecycleBasic;
