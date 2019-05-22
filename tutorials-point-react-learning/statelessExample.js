import React, { Component } from 'react';
class App extends React.Component {
    render() {
        var i = 0;
        var myStyle = {
            fontSize: 20,
            color: 'red'
        }
        return (
            <div>
                <Header />
                <h1>Content</h1>
                <p>{i == 1 ? 'True' : 'False'}</p>
                <h2 style={myStyle}>Header inline Styles</h2>
                <Footer />
            </div>
        );
    }
}
class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>Header</h1>
                <h4>Hello World</h4>
            </div>
        );
    }
}
class Footer extends React.Component {
    render() {
        return (
            <div>
                <h1>Footer</h1>
                <p>{1 + 1}</p>
            </div>
        );
    }
}
export default App;