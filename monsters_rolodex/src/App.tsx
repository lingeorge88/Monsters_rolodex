import {  useState, useEffect, ChangeEvent } from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import { getData } from './utils/data.utils';

export type Monster = {
  id: string;
  name: string;
  email: string
}

const App =() => {
  const [monsters, setMonsters] = useState<Monster[]>([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);
  const [ searchField, setSearchField] = useState('');

  useEffect(() => {
    const fetchUsers = async ()=> {
      const users = await getData<Monster[]>('https://jsonplaceholder.typicode.com/users');
      setMonsters(users);
    };
    fetchUsers();
  }, []);

useEffect(() => {
  const filteredMonsters = monsters.filter((monster) => { 
    return monster.name.toLocaleLowerCase().includes(searchField);
});
    setFilteredMonsters(filteredMonsters)
}, [monsters, searchField]);

  const handleSearch = (event: ChangeEvent<HTMLInputElement>): void => {
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
