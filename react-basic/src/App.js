import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  // state:用于改变组件内容状态的值（动态）
  // props:用于组件通信进行传值
  state = {
    person: [
      {
        name: "lyw",
        count: 30
      },
      {
        name: "lyj",
        count: 10
      },
      {
        name: "lyz",
        count: 25
      },
    ],
    otherState: "anything"
  }

  swicthNameHandler = () => {
    // console.log("Hello");
    // Don't do this:this.state.person[0].name
    this.setState({
      person: [
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
    // console.log("Hello");
    // Don't do this:this.state.person[0].name
    this.setState({
      person: [
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

  nameChangeHandler = (event) => {
    this.setState({
      person: [
        {
          name: event.target.value,
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

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>hello world!</h1>
        <p>hi,react-app</p>
        <button style={style} onClick={this.swicthNameHandler}>更改状态值1</button>
        {/* <button onClick={() => this.swicthNameHandler_2("哈哈")}>更改状态值2</button> */}
        <button style={style} onClick={this.swicthNameHandler_2.bind(this,"哈哈")}>更改状态值2</button>
        <Person 
        changed={this.nameChangeHandler}
        name={this.state.person[0].name} 
        count={this.state.person[0].count} />
        <Person 
        myclick={this.swicthNameHandler_2.bind(this,"missu")}
        name={this.state.person[1].name} 
        count={this.state.person[1].count} />
        <Person 
        name={this.state.person[2].name} 
        count={this.state.person[2].count}>这是第一个react-demo</Person>
      </div>
    );

    // return React.createElement('div',{className:'App'},
    // React.createElement('h1',null,'hello world'))
  }
}

export default App;
