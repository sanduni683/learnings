import React, { Component } from 'react'
import Teacher from './Teacher'

class Teachers extends Component
{
    static getDerivedStateFromProps( props, state )
    {
        console.log( '[Teachers.js] getDerivedStatefromProps' )
        return state;
    }

    static shouldComponentUpdate( nextProps, nextState ) //after the update
    {
        console.log( '[Teachers.js] shouldComponentUpdate' )
        return true; //need to return true or false as any updates happend o existing state or not
    }

    getSnapshotBeforeUpdate( prevProps, prevState )
    {
        console.log( '[Teachers.js] getSnapshotBeforeUpdate' )
    }

    componentDidUpdate()
    {
        console.log( '[Teachers.js] componentDidUpdate' )
    }

    render()
    {
        console.log( '[ComponentsLifecycleBasic] Child components(Persons.js) rendering' )
        return this.props.teachers.map(( teacher, index ) =>
        {
            {
                return <Teacher
                    name={ teacher.name }
                    age={ teacher.age }
                    onDelete={ () => this.props.onDelete( index ) }
                    onChange={ ( event ) => this.props.onChange( event, teacher.id ) }
                    key={ teacher.id }
                />
            }
        } )
    }
}

export default Teachers;