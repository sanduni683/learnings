//PureComponent is a normal component that already implements shouldComponentUpdate witha complete props check.
import React, { PureComponent } from 'react'
import Teacher from './Teacher'
import PropTypes from 'prop-types';

class Teachers extends PureComponent
{
    //For class based components we can use life cycle hooks without any problem

    static getDerivedStateFromProps( props, state )
    {
        console.log( '[Teachers.js] getDerivedStatefromProps' )
        return state;
    }

    //when there is more to check whether to update the component or not we can use {pureComponent} instead of shouldComponentUpdate()
    //we can done this by importing {PureComponent} instead of just {Component}
    /*
        shouldComponentUpdate( nextProps, nextState ) //after the update
        {
            console.log( '[Teachers.js] shouldComponentUpdate' )
            if (nextProps.teachers !== this.props.teachers ||
                nextProps.onDelete !== this.props.onDelete ||
                nextProps.onChange !== this.props.onChange
            ){
                return true; //need to return true or false as any updates happend in existing state or not
            }
            else{
                return false;
            }
        }
    */

    getSnapshotBeforeUpdate( prevProps, prevState )
    {
        console.log( '[Teachers.js] getSnapshotBeforeUpdate' )
        return { message: 'Snapshot!' }
    }

    componentDidUpdate( prevProps, prevState, snapshot )
    {
        console.log( '[Teachers.js] componentDidUpdate' )
        console.log( snapshot )
    }

    componentWillUnmount()
    {
        console.log( '[Teachers.js] componentWillUnmount' )
    }

    render()
    {
        console.log( '[Teachers.js] rendering' )
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

//checking prop types
Teachers.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    onChange: PropTypes.func,
    onDelete: PropTypes.func
}

export default Teachers;