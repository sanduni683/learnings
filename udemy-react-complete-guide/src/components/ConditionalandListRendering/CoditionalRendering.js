import React, { Component } from 'react';
import App from '../../containers/App.css'
import Person from '../Person/Person';

class CoditionalRendering extends Component
{
    state = {
        persons: [
            { name: 'Jya', age: 34 },
            { name: 'Taka', age: 24 },
            { name: 'Kala', age: 30 }
        ],
        otherPerson: 'Something',
        showPersons: false
    }

    togglePersonsHandler = () =>
    {
        const togglePersons = this.state.showPersons
        this.setState( { showPersons: !togglePersons } )
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

        //JavaScript way of handling dynamic conditional content, passing as a refererence to jsx body.this looks much cleaner        
        let persons = null;
        if ( this.state.showPersons )
        {
            persons = ( <div>
                <Person
                    name={ this.state.persons[ 0 ].name }
                    age={ this.state.persons[ 0 ].age }
                />
                <Person
                    name={ this.state.persons[ 1 ].name }
                    age={ this.state.persons[ 1 ].age }
                />
                <Person
                    name={ this.state.persons[ 2 ].name }
                    age={ this.state.persons[ 2 ].age }
                />
            </div> );
        }

        return (
            <div className="App">
                <button style={ style } onClick={ this.togglePersonsHandler }>Show persons</button>


                {/*    //CoditionalRendering using ternery operator ==> condition ? exprIfTrue : exprIfFalse 
                { this.state.showPersons ?
                    <div>
                        <Person
                            name={ this.state.persons[ 0 ].name }
                            age={ this.state.persons[ 0 ].age }
                        />
                        <Person
                            name={ this.state.persons[ 1 ].name }
                            age={ this.state.persons[ 1 ].age }
                        />
                        <Person
                            name={ this.state.persons[ 2 ].name }
                            age={ this.state.persons[ 2 ].age }
                        />
                    </div> : null }
                    */}


                { persons }
            </div>
        );
    }
}

export default CoditionalRendering;
