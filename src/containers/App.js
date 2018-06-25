import React, { PureComponent } from 'react'; // eslint-disable-line no-unused-vars

import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends PureComponent {
  constructor(props) {
    super(props);
    console.log('[App.js] Inside Constructor', props);
    this.state = {
      persons: [
        {id: 'ab1', name: 'Peter', age: 54},
        {id: 'ab2', name: 'Chris', age: 51},
        {id: 'ab3', name: 'Carolyn', age: 49}
      ],
      otherState: 'some other value',
      showPersons: false
    };    
  }

  UNSAFE_componentWillMount() {
    console.log('[App.js] Inside componentWillMount()');
  }

  componentDidMount() {
    console.log('[App.js] Inside componentDidMount()');
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('[UPDATE App.js] Inside shouldComponentUpdate', nextProps, nextState);
  //   return nextState.persons !== this.state.persons ||
  //     nextState.showPersons !== this.state.showPersons;
  // }

  UNSAFE_componentWillUpdate(nextProps, nextState) {
      console.log('[UPDATE App.js] Inside componentWillUpdate', nextProps, nextState);
  }

  componentDidUpdate() {
      console.log('[UPDATE App.js] Inside componentDidUpdate');
  }
  
  // state = {
  //   persons: [
  //     {id: 'ab1', name: 'Peter', age: 54},
  //     {id: 'ab2', name: 'Chris', age: 51},
  //     {id: 'ab3', name: 'Carolyn', age: 49}
  //   ],
  //   otherState: 'some other value',
  //   showPersons: false
  // }
  
  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( {persons: persons} );
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    console.log('[Appljs] Inside render()');
    let persons = null;
    
    if (this.state.showPersons) {
      persons = <Persons 
        persons = {this.state.persons}
        clicked = {this.deletePersonHandler}
        changed = {this.nameChangeHandler} />;
    }

    return (
      <div className={classes.App}>
        <button onClick={() => {this.setState({showPersons: true})}}>Show Persons</button>
        <Cockpit
          appTitle={this.props.title}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler} />
        {persons}
      </div>
    );
    // return React.createElement('div', null, React.createElement('h1', {className: 'App'}, 'Does this work now?'))
  }
}

export default App;
