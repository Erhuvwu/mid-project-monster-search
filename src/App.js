import React, { Component } from 'react';
import MonsterList from './components/MonsterList';
import SearchBox  from './components/SearchBox';
import './App.css';

class App extends Component {
  state={
    searchField: '',
    monsterData: []
  }

  handleChange=(event)=>{
    this.setState({
      searchField: event.target.value
    })
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response =>response.json())
    .then(data=> {
      this.setState({   //this is saved to our state so u can access as props
        monsterData: data
      })
    })
    .catch(error => console.log(error))
  }

  render() {
    const filteredMonsters = this.state.monsterData.filter(monster =>
      monster.name.toLowerCase().includes(this.state.searchField.toLowerCase()))
   
    return (
      <div>
        <h1>Group of Monsters</h1>
        <SearchBox  placeholder='search monster' handleChange={this.handleChange}/>
        <MonsterList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;