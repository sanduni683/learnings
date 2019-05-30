import React, { Component } from 'react';
import App from '../../containers/App.css'
import Person from '../Person/Person';

//Statefull class components actually uses states using setState()
//Stateless functional components actually uses states after react 16.8+ with hooks, using useState()
class ClassBasedComponent extends Component
{
    state = {
        persons: [
            { name: 'Jya', age: 34 },
            { name: 'Taka', age: 24 },
            { name: 'Kala', age: 30 }
        ],
        otherPerson: 'Something'
    }

    switchNameHandler = ( firstName ) =>
    {
        //console.log( 'clicked' )
        //this.state.persons[ 0 ].name = "Sanduni"; ==> Cannot mutate state directly, use setState()
        this.setState( {
            persons: [
                { name: firstName, age: 34 },
                { name: 'Anijitha', age: 24 },
                { name: 'Kiruthika', age: 30 }
            ]
        } )
    }

    nameChangeHandler = ( event ) =>
    {
        this.setState( {
            persons: [
                { name: event.target.value, age: 34 },
                { name: 'Anijitha', age: 24 },
                { name: 'Kiruthika', age: 30 }
            ]
        } )
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

        return (
            <div className="App">
                <h1>Hi, I'm a react app</h1>
                <Person name="Max" age="29" />
                <Person name="Manu" age="26" >My Hobbies: Racing(props.children ==> Children property comes between tag lines of Component calling.)</Person>
                <Person name="Mala" age="39" />
                <p>==========================================================================================================</p>
                <button style={ style } onClick={ this.switchNameHandler.bind( this, 'Maximillion' ) }>Switch User</button>
                <Person
                    name={ this.state.persons[ 0 ].name }
                    age={ this.state.persons[ 0 ].age }
                    click={ this.switchNameHandler.bind( this, 'First Person' ) }
                    onChange={ this.nameChangeHandler }
                />
                <Person
                    name={ this.state.persons[ 1 ].name }
                    age={ this.state.persons[ 1 ].age }
                    click={ () => this.switchNameHandler( 'Second Person' ) } //new syntax for bind parameters and this is inefficient
                />
                <Person
                    name={ this.state.persons[ 2 ].name }
                    age={ this.state.persons[ 2 ].age }
                    click={ () => this.switchNameHandler( 'Third Person' ) } //new syntax for bind parameters and this is inefficient
                />
            </div>
        );
        // above return code get compiled this this code at the end
        // return React.createElement( 'div', { class: 'App' }, React.createElement( 'h1', null, 'Hi, I\'m a react app' ) )
    }
}

export default ClassBasedComponent;
