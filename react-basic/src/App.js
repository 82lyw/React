import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  // state:用于改变组件内容状态的值（动态）
  // props:用于组件通信进行传值
  state = {
    persons: [
      {
        id: 1,
        name: "lyw",
        count: 30
      },
      {
        id: 2,
        name: "lyj",
        count: 10
      },
      {
        id: 3,
        name: "lyz",
        count: 25
      },
      {
        id: 4,
        name: "lyw",
        count: 30
      },
      {
        id: 5,
        name: "lyj",
        count: 10
      },
      {
        id: 6,
        name: "lyz",
        count: 25
      },
    ],
    otherState: "anything",
    showPersons: false
  }

  swicthNameHandler = () => {
    this.setState({
      persons: [
        {
          name: "lyw",
          count: 300
        },
        {
          name: "lyj",
          count: 100
        },
        {
          name: "lyz",
          count: 250
        },
      ],
    })
  }

  swicthNameHandler_2 = (newName) => {
    this.setState({
      persons: [
        {
          name: newName,
          count: 300
        },
        {
          name: "lyj",
          count: 100
        },
        {
          name: "lyz",
          count: 250
        },
      ],
    })
  }

  nameChangeHandler = (event,id) => {
    const personIndex = this.state.persons.findIndex(p =>{
      return p.id === id;
    })

    const person = {
      ...this.state.persons[personIndex]
    }
    
    person.name = event.target.value;

    const persons = [...this.state.persons];

    persons[personIndex] = person;

    this.setState({
      persons: persons
    })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    })
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons;
    const persons = [...this.state.persons]
    persons.splice(personIndex,1);
    this.setState({
      persons: persons
    })
  }

  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = [];
    if (this.state.showPersons) {
      persons = (
        <div>
          {
            this.state.persons.map((person,index) => {
              return <Person 
              changed={(event) => this.nameChangeHandler(event,person.id)}
              myclick={() => this.deletePersonHandler(index)}
              key={person.id} 
              name={person.name} 
              count={person.count} />
            })
          }
          </div>
      )
      style.backgroundColor = 'red';
    }

    // const classes = ["red","bold"].join(" ");
    const classes = [];

    if (this.state.persons.length <=2) {
      classes.push("red");
    }

    if (this.state.persons.length <=1) {
      classes.push("bold");
    }

    return (
      <div className="App">
        <h1>hello world!</h1>
        <p className={classes.join(" ")}>hi,react-app</p>
        {/* <button style={style} onClick={this.swicthNameHandler}>更改状态值1</button>
        <button style={style} onClick={this.swicthNameHandler_2.bind(this,"哈哈")}>更改状态值2</button> */}
        <button style={style} onClick={this.togglePersonsHandler}>切换状态</button>
        {persons}
      </div>
    );
  }
}

export default App;
