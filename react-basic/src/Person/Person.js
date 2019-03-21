import React from 'react';
import './Person.css'

const person = (props) => {
    // return (<p>hello everyone,I'm {props.name}!I own {props.count} demo</p>);
    return (
        <div className="Person">
            <p onClick={props.myclick}>hello everyone,I'm {props.name}!I own {props.count} demo</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} defaultValue={props.name}/>
        </div>
    )

}

export default person;