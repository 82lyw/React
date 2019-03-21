
import React, { Component } from 'react';
import './App.css';
import Persons from '../components/Persons/Persons'
import MyHeader from '../components/Headers/Header'

//有状态组件
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

    let persons = [];
    if (this.state.showPersons) {
      persons = <Persons 
      persons={this.state.persons} 
      clicked={this.deletePersonHandler} 
      changed={this.nameChangeHandler}/>
    }

    return (
      <div className="App">
        <MyHeader 
        appTitle={this.props.title}
        persons={this.state.persons}
        showPersons={this.state.showPersons}
        clicked={this.togglePersonsHandler} />
        {persons}
      </div>
    );
  }
}

export default App;
