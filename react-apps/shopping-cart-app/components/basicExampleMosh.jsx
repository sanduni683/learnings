import React, { Component } from 'react';
class Counter extends React.Component {
    state = {
        count: 0,
        size: 0,
        imageUrl: "https://picsum.photos/200",
        tags: ["tag1", "tag2", "tag3"]
    };

    style = {
        fontSize: 20,
        fontWeight: "bold"
    }

    render() {
        return (
            <div>
                <p>{1 + 1}</p>
                <button className="btn btn-secondary btn-sm">Increment</button>
                <p style={this.style}>Setting class and styles attributes and apply to elements</p> {/* rendering attributes dynamically */}
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span> {/* rendering methods dynamically */}
                <span>{this.formatSize()}</span> {/* rendering methods dynamically */}
                <img src={this.state.imageUrl} alt="Setting photo attribute" /> {/* rendering attributes dynamically */}
                <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>{/* rendering lists dynamically */}
                <p>{this.renderTags()}</p> {/* Conditional rendering*/}
                { /* passing event arguments */}
                <button id="reactbtn" onClick={() => { this.handleIncrement({ id: 1 }) }} className="btn btn-primary btn-sm">Click me</button> {/* handle events */}
                {/*When handling events we don't need to call function again whic gives us return value, we only need to give that function name*/}
            </div>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 ";
        classes += this.state.count == 0 ? "badge-warning" : "badge-primary"
        return classes;
    }

    formatCount() {
        return this.state.count === 0 ? 'Zero' : this.state.count
    }

    formatSize() {
        const { size } = this.state;
        const x = <h1>Zero</h1>;
        return size === 0 ? x : size
    }

    renderTags() {
        if (this.state.tags.length === 0) return "There are no tags";
        return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
    }

    //binding event handlers----------------------------------
    //  constructor() {
    //     super()
    //     this.handleIncrement = this.handleIncrement.bind(this)
    //  }
    //This all the constructor and super class can be ignore by using 'ES6 =>' feature(arrow function) 
    //arrow function don't rewind the 'this' keyword, THEY INHERIT IT.

    handleIncrement = (product) => {
        console.log("Clicked button", this)
        console.log(product)
        this.setState({ count: this.state.count + 1 }) //Updating the state
    }
}

export default Counter;
