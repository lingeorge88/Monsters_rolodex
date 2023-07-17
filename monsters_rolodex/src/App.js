import logo from './logo.svg';
import { Component, useState, useEffect } from 'react';
import './App.css';

function App() {

  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => {setMonsters(users)
        setFilteredMonsters(users);})
      .catch(error => console.error('Error:', error));
  }, []);

  const handleSearch = (event) => {
    console.log(event.target.value);
    const searchString = event.target.value.toLocaleLowerCase();
    const filtered = monsters.filter((monster) => monster.name.toLocaleLowerCase().includes(searchString));;
    setFilteredMonsters(filtered)
  }
  return (
    <div className='App-header'>
      <input className='search-box' type='search' placeholder='Search monsters...' onChange={handleSearch}/>
      {/* <button onClick=''>search</button> */}
      {filteredMonsters.map((monster) => (
        <div key={monster.id}>
          <h1 >{monster.name}</h1>
        </div>
      ))}
    </div>
    
  );
};

export default App;
