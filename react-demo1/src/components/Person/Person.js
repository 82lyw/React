import React,{ Component } from 'react';
import './Person.css'

class Person extends Component {
    constructor (props) {
        super (props);
        console.log("[Person.js] constructor is running...")
    }

    componentWillMount () {
        console.log("[Person.js] componentWillMount is running...")
    }
    
    componentDidMount () {
        console.log("[Person.js] componentDidMount is running...")
    }

    render () {
        console.log("[Person.js] render is running...")

        return (
            <div className="Person">
                <p onClick={this.props.myclick}>hello everyone,I'm {this.props.name}!I own {this.props.count} demo</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} defaultValue={this.props.name}/>
            </div>
        )
    }
}

export default Person;