import React, { Component } from 'react';
class App3 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            headerState: "Header from state",
            contentState: "Content from state"
        }
    }
    render() {
        return (
            <div>
                <h4>{this.props.headerProp}</h4>
                <h4>{this.props.contentProp}</h4>
                <Header headerState={this.state.headerState} />
                <Content contentState={this.state.contentState} />
            </div>
        );
    }

}

App3.defaultProps = {
    headerProp: "Header from props",
    contentProp: "Content from props"
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h4>{this.props.headerState}</h4>
            </div>
        );
    }
}

class Content extends React.Component {
    render() {
        return (
            <div>
                <h4>{this.props.contentState}</h4>
            </div>
        );
    }
}

export default App3;