import React from 'react';
import AssignmentOneStyle from './AssignmentOneStyle.css'

const UserOutput = ( props ) =>
{
    return (
        <div className="UserOutput">
            <p>Username:  { props.username }</p>
            <p>I hope I'll be overwritten</p>
        </div>
    );
}

export default UserOutput;