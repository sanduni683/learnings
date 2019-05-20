import React, { Component } from 'react'

class NewItemFormPopup extends Component
{
    constructor( props )
    {
        super( props );
        this.state = {
            id: 0,
            name: '',
            count: 0
        };
        this.handleChange = this.handleChange.bind( this ); //binding the context of the function to this component
    }

    handleChange( event )
    {
        if ( event.target.id === 'item' )
        {
            this.setState( {
                name: event.target.value
            } );
        } else if ( event.target.id === 'count' )
        {
            this.setState( {
                count: parseInt( event.target.value )
            } );
        }
        event.preventDefault(); // To stop event propagration(prevent event from going to another handlers)
    }

    render()
    {
        console.log( "NewItemFormPopup rendered" )
        return (
            <div id="div" >

                <button className="btn btn-primary btn-sm m-2" data-toggle="modal" data-target="#myModal" >Add new Item</button>

                <div id="myModal" className="modal fade" role="dialog" >
                    <div className="modal-dialog">

                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title">Add new Items</h4>
                            </div>

                            <div className="modal-body">
                                <form onSubmit={ () =>
                                {
                                    this.props.handleAddItem( new Date().valueOf(), this.state.name, this.state.count );
                                    event.preventDefault();

                                } } >
                                    <div className="form-group">
                                        <label>Add Item:</label>
                                        <input type="text" id="item" value={ this.state.name } onChange={ this.handleChange } />
                                    </div>

                                    <div className="form-group">
                                        <label>Item count:</label>
                                        <input type="text" id="count" value={ this.state.count } onChange={ this.handleChange } />
                                    </div>

                                    <button type="submit" className="btn btn-primary btn-sm m-2">Submit</button>
                                    <button type="button" className="btn btn-primary btn-sm m-2" data-dismiss="modal">Close</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default NewItemFormPopup;