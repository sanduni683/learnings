import React, { Component } from 'react'
import Child from '../Person/Child'
import classes from '../Person/Child.css'

/*
To use this styling solution CSS module we need to unlock/change webpack.config.js file
First need to eject from the project created with create-react-app, default this doesn't come ==> npm run eject
We'll then replace some code in a newly added webpack config file (it'll be available after ejecting).
{
  test: cssRegex,
  exclude: cssModuleRegex,
  ...
}
change to this -->
{
  test: cssRegex,
  exclude: cssModuleRegex,
  use: getStyleLoaders({
      importLoaders: 1,
      modules: true,
      localIdentName: '[name]__[local]__[hash:base64:5]'
  }),
}
For now i have comment down the so called webpack.config.js newly added lines,
cuz other css styles won't work wih this feature.


CSS Modules automatically generate unique CSS class names for you.
And by importing a JS object and assigning classes from there,you use these dynamically generated, unique names.
So the imported JS object simply exposes some properties which hold the generated CSS class names as values.
If you want to define a global (i.e. un-transformed) CSS class in such a .css file,prefix the selector with :global .
*/

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
        let childs = null
        let btnClass = ''

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
            btnClass = classes.ClassRed; //pseudo selctors by css modules ->nested class selectors
        }

        let appCssClasses = []
        if ( this.state.childs.length <= 2 )
        {
            appCssClasses.push( classes.ClassBold ) // classes = ["ClassBold"]
        }
        if ( this.state.childs.length <= 1 )
        {
            appCssClasses.push( classes.ClassRed ) // classes = ["ClassBold", "ClassRed"]
        }

        return (
            <div className={ classes.App }>
                <p className={ appCssClasses.join( ' ' ) } >Render Child elements from Child components</p>
                {/*pseudo selctors by css modules-> btnClass need to be a string */ }
                <button className={ btnClass } onClick={ this.toggleChildsHandler }>Show childs</button>
                { childs }
            </div >
        );
    }
}

export default StylesCSSModules;