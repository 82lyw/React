import React from 'react';

const person = (props) => {
    // return (<p>hello everyone,I'm {props.name}!I own {props.count} demo</p>);
    return (
        <div>
            <p onClick={props.myclick}>hello everyone,I'm {props.name}!I own {props.count} demo</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed}/>
        </div>
    )

}

export default person;