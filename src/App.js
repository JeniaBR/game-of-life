import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">I've just change this HEADER :)</h1>
      </header>
      <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
      </p>
      <div>
        <h2>This is my second header that I've added!</h2>
      </div>
        <SomeClass/>
      </div>
    );
  }
}

class SomeClass extends Component {
	render(){
		return(
			<div>
				<ul>
					<li>This is so COOL</li>
					<li>This is so COOL</li>
					<li>This is so COOL</li>
					<li>This is so COOL</li>
					<li>This is so COOL</li>
				</ul>
			</div>
		);
	}
}

export default App;
