import React, { Component } from 'react';
import App from '../../App.css'
import ValidationComponent from './ValidationComponent';
import CharComponent from './CharComponent';

class AppAssignmentTwo extends Component
{
    state = {
        text: 'some text'
    }
    changeListner = ( event ) =>
    {
        this.setState( { text: event.target.value } )
    }

    deleteCharFromText = ( charIndex ) =>
    {
        // const charText = [ ...this.state.text ]
        // charText.splice( charIndex, 1 )
        // this.setState( { text: charText } )

        const splitText = this.state.text.split( '' )
        splitText.splice( charIndex, 1 )
        const updatedText = splitText.join( '' )
        this.setState( { text: updatedText } )
    }

    render()
    {
        const charArray = [ ...this.state.text ]

        const charInputBox =
            this.state.text.split( '' ).map(( char, index ) =>
            //charArray.map(( char, index ) =>
            {
                return <CharComponent
                    key={ index }
                    showChar={ char }
                    onDeleteChar={ () => this.deleteCharFromText( index ) }
                />
            } )

        return (
            <div >
                <ol>
                    <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
                    <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
                    <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
                    <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
                    <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
                    <li>When you click a CharComponent, it should be removed from the entered text.</li>
                </ol>
                <input type="text" onChange={ this.changeListner } value={ this.state.text } />
                <p>{ this.state.text }</p>
                <ValidationComponent textLength={ this.state.text.length } />
                { charInputBox }
            </div >
        );
    }
}
export default AppAssignmentTwo;