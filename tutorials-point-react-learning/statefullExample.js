import React, { Component } from 'react';
class App2 extends React.Component {
    constructor() {
        super();
        this.state = {
            data: [
                {
                    id: 1,
                    name: "Sandu",
                    age: "28"
                },
                {
                    id: 2,
                    name: "Hitan",
                    age: "28"
                },
                {
                    id: 3,
                    name: "Siri",
                    age: "28"
                }
            ]
        }
    }
    render() {
        return (
            <div>
                <table>
                    <tbody>
                        {this.state.data.map((person, i) => < TableRow key={i}
                            data={person} />)}
                    </tbody>
                </table>
            </div>
        );
    }
}

class TableRow extends React.Component {
    render() {
        return (
            <tr>
                <td>{this.props.data.id}</td>
                <td>{this.props.data.name}</td>
                <td>{this.props.data.age}</td>
            </tr>
        );
    }
}
export default App2;