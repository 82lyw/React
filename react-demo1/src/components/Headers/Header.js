import React from 'react'
import classes from './Header.css'

const MyHeader = (props) => {
    const assignClasses = [];

    const style = {
        backgroundColor: 'green',
        color: 'white',
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px',
        cursor: 'pointer'
      };

    if (props.shoqPersons) {
        style.backgroundColor = 'red';
    }

    if (props.persons.length <=2) {
        assignClasses.push(classes.red);
    }

    if (props.persons.length <=1) {
        assignClasses.push(classes.bold);
    }

    return (
        <div>
            <h1>{props.appTitle}</h1>
            <p className={assignClasses.join(" ")}>hi,react-app</p>
            <button style={style} onClick={props.clicked}>切换状态</button>
        </div>
    )
} 

export default MyHeader