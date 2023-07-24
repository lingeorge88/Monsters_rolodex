import logo from './logo.svg';
import {  useState, useEffect } from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

const App =() => {

  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState([]);
  const [ searchField, setSearchField] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => {setMonsters(users)
        })
      .catch(error => console.error('Error:', error));
  }, []);

useEffect(() => {
  const filteredMonsters = monsters.filter((monster) => { 
    return monster.name.toLocaleLowerCase().includes(searchField);
});
    setFilteredMonsters(filteredMonsters)
}, [monsters, searchField]);

  const handleSearch = (event) => {
    console.log(event.target.value);
    const searchString = event.target.value.toLocaleLowerCase();
    setSearchField(searchString);
    
  }
  return (
    <div className='App-header'>
      <h1 className='app-title'>Monsters Rolodex</h1>
      <SearchBox className = 'monsters-search-box' changeHandler={handleSearch} placeholder ='search monsters'/>
      <CardList monsters={filteredMonsters}/>
    </div>
    
  );
};

export default App;
