import React, { Component, Fragment } from 'react';
import App from '../../containers/App.css'
import Teachers from '../Person/Teachers';
import Cockpit from '../Cockpit/Cockpit';
import AuthContext from '../Context/auth-context'

class ClassbasedComponentsLifecycleBasic extends Component
//For class based components we can use life cycle hooks without any problem
//But for functional components we cannot use life cycle hooks, we should use useEffect() react hook instead
/////////////Here Teachers.js as Classbased Component and Cockpit.js as functionalbased Component used.////////////////
{
    constructor( props )
    {
        super( props )
        console.log( '[ClassbasedComponentsLifecycleBasic.js] constructor' )
        this.state = {
            persons: [
                { id: 'asdf1', name: 89, age: "34" },
                { id: 'asdf2', name: 'Taka', age: 24 },
                { id: 'asdf3', name: 'Kala', age: 30 }
            ],
            otherPerson: 'Something',
            showPersons: false,
            showCockpit: true,
            changeCounter: 0,
            authanticated: false
        }
    }

    static getDerivedStateFromProps( props, state ) //usee static keyword 
    {
        console.log( '[ClassbasedComponentsLifecycleBasic.js] getDerivedStateFromProps', props )
        return state; //updated state
    }

    componentWillMount() // preparing state correctly
    {
        console.log( '[ClassbasedComponentsLifecycleBasic.js] componentWillMount' )
    }

    componentDidMount() //for http requests
    {
        console.log( '[ClassbasedComponentsLifecycleBasic.js] componentDidMount' )
    }

    shouldComponentUpdate( nextProps, nextState )
    {  //for http requests-decide whether continue/update or not 
        console.log( '[ClassbasedComponentsLifecycleBasic.js] shouldComponentUpdate' )
        return true;
    }

    componentDidUpdate()
    {  //for http requests
        console.log( '[ClassbasedComponentsLifecycleBasic.js] componentDidUpdate' )
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

        //updating the state when you are depending on plsd state..................
        //here setState with anonymous function uses to check prevState with current prop
        this.setState(( prevState, props ) =>
        {
            return {
                persons: persons,
                // changeCounter: this.state.changeCounter +1 //depending on the old state
                //here gurantees this.state.changeCounter(prevState) is the actual previous state as assumed
                changeCounter: prevState.changeCounter + 1 //depending on the old state
            }
        } )
    }

    loginPersonsHandler = () =>
    {
        this.setState( { authanticated: true } )
    }

    render()
    {
        console.log( '[ClassbasedComponentsLifecycleBasic.js] rendering' )

        let teachers = null;
        if ( this.state.showPersons )
        {
            teachers = <Teachers
                teachers={ this.state.persons }
                onDelete={ this.deletePersonsHandler }
                onChange={ this.changePersonsHandler }
            />
        }

        return (
            <div className="App">
                <button onClick={ () => { this.setState( { showCockpit: false } ) } }>Remove Cockpit for cleanUp work</button>

                {/*Context API - fr pass data(props across the components(to <Teacher> but not through <Teachers>)) */ }
                <AuthContext.Provider value={ {
                    authanticated: this.state.authanticated,
                    login: this.loginPersonsHandler
                } }>

                    { this.state.showCockpit ? <Cockpit
                        // teachers={ this.state.persons } //since we use React.memo()cannot use arry of elements                 
                        otherPerson={ this.state.persons.otherPerson }
                        onToggle={ this.togglePersonsHandler }
                    /> : null }
                    { teachers }
                </AuthContext.Provider>
            </div>
        );
    }
}
export default ClassbasedComponentsLifecycleBasic;
