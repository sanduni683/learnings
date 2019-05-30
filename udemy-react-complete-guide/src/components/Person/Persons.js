import React from 'react'
import Person from './Person'

const persons = ( props ) =>
{
    console.log( '[ComponentsLifecycleBasic] Child components(Persons.js) rendering' )

    return props.persons.map(( person, index ) =>
    {
        {
            return <Person
                name={ person.name }
                age={ person.age }
                onDelete={ () => props.onDelete( index ) }
                onChange={ ( event ) => props.onChange( event, person.id ) }
                key={ person.id }
            />
        }
    } )

};
export default persons;