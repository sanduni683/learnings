import React from 'react';

const UserInput = ( props ) =>
{
    const style = {
        width: "10%",
        margin: '16px auto',
        padding: '16px',
        float: 'center',
        backgroundColor: 'green',
    }
    return (

        <div style={ style }>
            Type your name here
            <input type="text" value={ props.username } onChange={ props.onChangeName } />
        </div>
    );
}

export default UserInput;