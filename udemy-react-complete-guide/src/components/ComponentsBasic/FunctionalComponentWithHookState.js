import React, { useState } from 'react';
import App from '../../containers/App.css'
import Person from '../Person/Person';

//Stateless functional components actually uses states after react 16.8+ with hooks, 
//Hooks uses use keyword with like(useState(), useCallback(),useRef()) to change state.
const FunctionalComponentWithHookState = ( props ) =>
{
    const [ personsState, setPersonsState ] = useState( {
        persons: [
            { name: 'Jya', age: 34 },
            { name: 'Taka', age: 24 },
            { name: 'Kala', age: 30 }
        ]
    } );

    const [ otherState, setOtherState ] = useState( { otherPerson: 'Other person something' } )

    console.log( personsState )
    console.log( otherState )

    const switchNameHandler = () =>
    {
        setPersonsState( {
            persons: [
                { name: 'Sanduni', age: 34 },
                { name: 'Anijitha', age: 24 },
                { name: 'Kiruthika', age: 30 }
            ],
            // otherPerson: personsState.otherPerson ==> manually merging state, otherwise gonna replace it.
        } )
        setOtherState( {
            otherPerson: 'Updating the other person (Second element) of state using useState multiple times '
        } )
    }

    return (
        <div className="App">
            <button onClick={ switchNameHandler }>Switch User</button>
            <Person name={ personsState.persons[ 0 ].name } age={ personsState.persons[ 0 ].age } />
            <Person name={ personsState.persons[ 1 ].name } age={ personsState.persons[ 1 ].age } />
            <Person name={ personsState.persons[ 2 ].name } age={ personsState.persons[ 2 ].age } />
        </div>
    );
}

export default FunctionalComponentWithHookState;