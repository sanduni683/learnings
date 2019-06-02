import React from 'react'

const authContext = React.createContext( {
    //default values
    authanticated: false,
    login: () => { }
} )

export default authContext;