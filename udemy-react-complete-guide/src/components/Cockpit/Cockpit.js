import React, { useEffect, useRef, useContext } from 'react';
import AuthContext from '../Context/auth-context'

//For functional components we cannot use lifecycle hooks 
//instead we can use react hook, called useEffect()

const Cockpit = ( props ) =>
{
    //select an element using ref--> here clicking the button automaticallyy when page renders
    const autoToggleBtnRef = useRef( null )

    //for context API -gives access to Context API
    const authContext = useContext( AuthContext )

    // Similar to componentDidMount and componentDidUpdate:
    /* This executes whenever there is a change, sice no second argument
    useEffect(() => {
        console.log('[Cockpit.js] useEffect')
        //http request
        setTimeout(() => {
            alert ('Save data to cloud')
        } , 1000)
    })
    */

    /* only want to run this code whenever person changed
    useEffect(() => {
            console.log('[Cockpit.js] useEffect')
            //http request
            setTimeout(() => {
                alert ('Save data to cloud')
            } , 1000)
        }, [props.teachers]) //enable teachers to check
    */

    // only want to execute this when component renders for the first time--> pass empty array
    useEffect(() =>
    {
        console.log( '[Cockpit.js] useEffect' )
        //http request
        setTimeout(() =>
        {
            alert( 'Save data to cloud' )
        }, 1000 )
    }, [] ) // no dependencies to send,so this will only execute for the first time render


    //  useEffect(); //we can have more than one useEffect()

    /* For clean-Up work , classBased used componentWillUnmount()
    useEffect(() => {
            console.log('[Cockpit.js] useEffect')
            //http request
            const timer = setTimeout(() => {
                alert ('Save data to cloud')
            } , 2000)
            return () => {
                clearTimeout(timer)
                console.log('[Cockpit.js] cleanUp work in useEffect')
            }
        }, [])
     */

    //whenever component rerender this will execute(since no condition) and Cleanup work will do, since return statement
    useEffect(() =>
    {
        console.log( '[Cockpit.js] 2nd useEffect' )
        return () =>
        {
            console.log( '[Cockpit.js] cleanUp work in 2nd useEffect' )
        }
    } )

    useEffect(() =>
    {
        autoToggleBtnRef.current.click();
        return () =>
        {
            console.log( '[person.js] cleanup work in useEffect ' )
        }
    }, [] )


    const style = {
        backgroundColor: 'green',
        font: 'inherit',
        border: '1px solid black',
        padding: '8px',
        cursor: 'pointer'
    }

    return (
        <div>
            <h1>Hi I'm a React App</h1>
            <p>{ props.otherPerson }</p>
            <p style={ { color: "Gold", fontWeight: 'bold' } }>This is really something</p>
            <button ref={ autoToggleBtnRef } style={ style } onClick={ props.onToggle }>Show Teachers</button>

            {/* AuthContext.Consumer takes only function as a child.this function will get our context object.
            <AuthContext.Consumer>
                { ( context ) => <button style={ style } onClick={ context.login }>Log In</button> }
            </AuthContext.Consumer>
            */ }

            <button style={ style } onClick={ authContext.login }>Log In</button>
            
        </div>
    );
}
//Wrap with React.memo() when every change in component might not need to be update (rerender)
//React memorize to render if only input changes for this component , then re render it
export default React.memo( Cockpit );