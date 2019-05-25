import React from 'react';

const ValidationComponent = ( props ) =>
{

    return (
        <div className="ValidationComponent">
            <p>Text length:  { props.textLength }</p>
            { props.textLength > 5 ? 'Text long enogh' : 'text too short' }
        </div>
    );
}

export default ValidationComponent;