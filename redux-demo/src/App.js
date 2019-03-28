import React, { Component } from 'react'
import logo from './logo.svg'
import { Provider } from 'react-redux'
import { store } from './store'
import Posts from './components/Posts'
import PostForm from './components/PostForm'
import './App.css'


class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
        </header>
        <Posts />
        <PostForm />
      </div>
      </Provider>
    );
  }
}

export default App;
