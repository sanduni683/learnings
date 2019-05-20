import React, { Component } from 'react';

//This is a stateless functional component(no state, no events,no helper methods, only render function)
//Here instead of using this NavBar class we could use NavBar function with whole return statement.
//(this.props) only works in class component
//For stateless functional components need to add props as a parameter.React will pass prop object as an argument to this function

const NavBar = ( props ) =>
{
    console.log( "NavBar -rendered" )
    return (
        <div>
            <nav className="navbar navbar-light bg-light">
                <a className="navbar-brand">
                    Navbar
                    <span className="badge badge-pill badge-secondary m-2">ItemCount { props.itemCounters }</span>
                    <span className="badge badge-pill badge-secondary m-2">TotalCount { props.totalCounters }</span>
                </a>
            </nav>
        </div>
    );
}

/*
class NavBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-light bg-light">
                <a className="navbar-brand" href="#">
                    Navbar <span badge badge-pill badge-secondary>{this.props.totalCounters}</span>
                </a>
            </nav>
        );
    }
}
*/
export default NavBar;