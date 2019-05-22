import React, { Component } from 'react';
// import Counter from './basicExampleMosh.jsx'
import ShoppingCartItems from './shoppingCartItems.jsx'
import NewItemFormPopup from './newItemFormPopup.jsx'

class MainDivContent extends Component
{
    render()
    {
        //object distructuring
        //const { onReset, counters, onDelete, onIncrement } = this.props;
        console.log( "MainDivContent rendered" )

        return (
            <div>
                <div id="div" className="container-fluid">
                    <button onClick={ this.props.onReset } className="btn btn-primary btn-sm m-2">Reset All Counts</button>
                    <button onClick={ () => this.props.onDeleteAll() } className="btn btn-danger btn-sm m-2">Delete All items</button>

                    <NewItemFormPopup
                        handleAddItem={ this.props.handleAddItem }
                    />
                    <hr />
                </div>

                {/* This shows how many times Counter component should load , it comes from counters.length
                <p>{this.state.counters.map(counter =>
                    <Counter key={counter.id} value={counter.value} selected={true} />)}</p> {/*maping counters array to Counter class objects */}
                {/* This shows how many times ShoppingApp component should load , it comes from counters.length */ }
                {/* render ShoppingApp component using the map method 
                    even though both key={app.id} id={app.id} are the same but rect uses this key keyword internally
                    and we wont be able to use it.thats why need to pass id as a prop and reread this via prop.id
                    also we can simplify this sending all object without sending just attributes.like app={app}
                */}
                { this.props.counters.map( counter => (
                    <ShoppingCartItems
                        key={ counter.id }
                        counters={ counter }
                        onDelete={ this.props.onDelete }
                        onIncrement={ this.props.onIncrement } >

                        {/*   <h4>Counter #{app.id}</h4>   calling children props, 'h4' is children prop */ }
                    </ShoppingCartItems>
                ) ) }
            </div>
        );
    }
}

export default MainDivContent;