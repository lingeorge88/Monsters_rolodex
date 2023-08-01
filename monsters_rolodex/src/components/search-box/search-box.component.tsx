import './search-box.styles.css';
import { ChangeEventHandler } from 'react';

type SearchBoxProps = {
  className: string;
  placeholder?: string;
  changeHandler: ChangeEventHandler<HTMLInputElement>;
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