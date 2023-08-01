import './search-box.styles.css';
import { ChangeEvent } from 'react';

type SearchBoxProps = {
  className: string;
  placeholder?: string;
  changeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
}

const SearchBox = ({className, placeholder, changeHandler}: SearchBoxProps) => {
  return (
    <input 
    className={`search-box ${className}`} 
    type='search' 
    placeholder={placeholder} 
    onChange={changeHandler}/> 
  )
}

export default SearchBox;