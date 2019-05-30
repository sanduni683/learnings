import React, { Component } from 'react'
import Child from '../Person/Child'
import '../../containers/App.css'

class StylesCSSModules extends Component
{
    state = {
        childs: [
            { id: 'klmn1', name: 'Child1', age: 14 },
            { id: 'klmn2', name: 'Child2', age: 12 },
            { id: 'klmn3', name: 'Child3', age: 13 }
        ],
        showChilds: false
    }

    toggleChildsHandler = () =>
    {
        const toggleChilds = this.state.showChilds
        this.setState( { showChilds: !toggleChilds } )
    }

    deleteChildsHandler = ( childIndex ) =>
    {
        const childs = [ ...this.state.childs ]
        childs.splice( childIndex, 1 )
        this.setState( { childs: childs } )
    }

    changePersonsHandler = ( event, childId ) =>
    {
        const childIndex = this.state.childs.findIndex( c =>
        {
            return c.id === childId
        } )
        const child = {
            ...this.state.childs[ childIndex ]
        }
        child.name = event.target.value

        const childs = [ ...this.state.childs ]
        childs[ childIndex ] = child

        this.setState( { childs: childs } )
    }

    render()
    {
          const style = {
            backgroundColor: 'green',
            color: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer',
        }
        
        let childs = null
        if ( this.state.showChilds )
        {
            childs = (
                <div>
                    { this.state.childs.map(( child, index ) =>
                    {
                        return < Child
                            key={ child.id }
                            name={ child.name }
                            age={ child.age }
                            onDelete={ () => this.deleteChildsHandler( index ) }
                            onChange={ ( event ) => this.changePersonsHandler( event, child.id ) }
                        />
                    } )
                    }
                </div> )
                style.backgroundColor = 'red';
        }

        return (
            <div className="App">
                <p>Render Child elements from Child components</p>
                <button style={style} onClick={ this.toggleChildsHandler }>Show childs</button>
                { childs }
            </div >
        );
    }
}

export default StylesCSSModules;