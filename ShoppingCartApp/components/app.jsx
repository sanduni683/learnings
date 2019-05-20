import React, { Component } from 'react';
import NavBar from './navBar.jsx'
import Counters from './counters.jsx'
import NewItemFormPopup from './newItemFormPopup.jsx'

class App extends Component
{
    state = {
        counters: [
            { id: 1, name: "Carrot", value: 4 },
            { id: 2, name: "Beans", value: 0 },
            { id: 3, name: "Milk", value: 0 },
            { id: 4, name: "Bread", value: 0 }
        ]
    };

    constructor()
    {
        super();
        console.log( "App-constructor called only once when an instance create, we can create more such instances." )
    }

    componentDidMount()
    {
        console.log( "App-Mounted ===> ajax call to get ata from the server" )
    }

    handleReset = () =>
    {
        const counters = this.state.counters.map( c =>
        {
            c.value = 0;
            return c;
        } )
        this.setState( { counters } )
    }

    handleDelete = ( counterId ) =>
    {
        const countersArray = this.state.counters.filter( c => c.id !== counterId ) // filtering(get) all counters(id) without parameter(given) counterId
        this.setState( { counters: countersArray } )
    }

    handleDeleteAll = () =>
    {
        this.setState( { counters: [] } )
    }

    handleIncrement = ( counter ) =>
    {
        //using spread operators to cloning array
        console.log( counter )
        const counters = [ ...this.state.counters ]
        const index = counters.indexOf( counter )
        counters[ index ] = { ...counter }
        counters[ index ].value++
        this.setState( { counters } )
    }

    handleAddItem = ( itemId, itemName, itemCount ) =>
    {
        console.log( itemId )
        const counters = [ ...this.state.counters ]
        counters.push( { id: itemId, name: itemName, value: itemCount } )
        this.setState( { counters } )
    }

    render()
    {
        console.log( "App-rendered ==> this is where component is rendering" )
        let totalCounters = 0;
        for ( var index = 0; index < this.state.counters.length; index++ )
        {
            totalCounters += ( this.state.counters[ index ].value )
            console.log( 'forloop', totalCounters )
        }

        return (
            <React.Fragment>
                <NavBar
                    itemCounters={ this.state.counters.filter( c => c.value > 0 ).length }
                    totalCounters={ totalCounters }
                />
                <main className="container">
                    <Counters
                        counters={ this.state.counters }
                        onReset={ this.handleReset }
                        onDelete={ this.handleDelete }
                        onDeleteAll={ this.handleDeleteAll }
                        onIncrement={ this.handleIncrement }
                        handleAddItem={ this.handleAddItem }
                    />
                </main>
            </React.Fragment>
        );
    }
}
export default App;