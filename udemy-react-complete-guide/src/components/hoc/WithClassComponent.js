import React from 'react'

const WithClassComponent = props => (
    <div className={props.cssClass}>
        {console.log(props.cssClass)}
        {props.children}
    </div>
)

export default WithClassComponent;