import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './styles.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: '',
    };

    // Binding the `this` of handleChange.
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((users) => this.setState({ monsters: users }));
  }

  handleChange(e) {
    this.setState({
      searchField: e.target.value,
    });
  }

  render() {
    const { monsters, searchField } = this.state;

    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    console.log(filteredMonsters);

    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox change={this.handleChange} placeholder="Search Monsters" />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
