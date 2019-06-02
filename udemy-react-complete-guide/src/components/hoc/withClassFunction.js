import React from 'react'

const withClassFunction = (WrappedComponent , cssClassName) => {   //normal js function with 2 arguments
    /*
    return (props) => (   //react anonymous component funtion with props
        <div className={cssClassName}>
            <WrappedComponent /> //here missing all it's props,since haven't set any props here
            <WrappedComponent name="Maxi"/>
        </div>
    )
    */
      return (props) => (   //these props attributes are array and react combines them to an object 
        <div className={cssClassName}>
            <WrappedComponent {...props} /> 
        </div>
    )
}

export default withClassFunction;