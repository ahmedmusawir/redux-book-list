import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import BookList from './containers/BookList';
import BookDetail from './containers/BookDetail';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React Redux',
    };
  }

  render() {
    const { name } = this.state;
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">{name}</h1>
          </header>
          <div className="container mt-5">
            <div className="row">
              <div className="col-md-4">
                <BookList />
              </div>
              <div className="col-md-8">
                <BookDetail />
              </div>
            </div>
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
