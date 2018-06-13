import React, { Component } from 'react'; // eslint-disable-line no-unused-vars
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'Peter', age: 54},
      {name: 'Chris', age: 51},
      {name: 'Carolyn', age: 49}
    ],
    otherState: 'some other value'
  }

  switchNameHandler = (newName) => {
    // console.log('Was clicked!');
    // DON'T DO THIS: this.state.persons[0].name = 'Pete';
    this.setState( {
      persons: [
        {name: newName, age: 54},
        {name: 'Chris', age: 50},
        {name: 'Carolyn', age: 49}
      ]
    } )
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App!</h1>
        <p>This is really working!</p>
        <button onClick={() => this.switchNameHandler('Peter!!')}>Switch Name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age} />
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Peter!')} >My Hobbies: Racing</Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age} />
      </div>
    );
    // return React.createElement('div', null, React.createElement('h1', {className: 'App'}, 'Does this work now?'))
  }
}

export default App;
